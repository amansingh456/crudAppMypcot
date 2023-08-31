const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const Authdb = require("../models/auth.models.js");
const { createError } = require("../utils/createError.js");

const registerUser = async (req, res) => {
  const avatar =
    "https://th.bing.com/th/id/R.b057e6fb8c8ef4d7307987434cb448ad?rik=4%2ftohfpr4apS1g&riu=http%3a%2f%2fclipart-library.com%2fnewhp%2favatar_nick.png&ehk=KNFrQ5owNTmsvn4tREpL%2brqx01UO%2fpMeopUY9v1hrco%3d&risl=&pid=ImgRaw&r=0";
  try {
    const salt = bcrypt.genSaltSync(4);
    const hash = bcrypt.hashSync(req.body.password, salt);
    const newUser = new Authdb({
      username: req.body.username,
      email: req.body.email,
      password: hash
     
    });
    await newUser.save();
    const { password, ...otherDetails } = newUser._doc;
    res.status(200).json({ otherDetails });
  } catch (error) {
    res.status(500).send(error);
  }
};

const loginUser = async (req, res) => {
 
  try {
    const user = await Authdb.findOne({ email: req.body.email });

    if (!user) return next(createError(404, "User not found"));

    const isPasswordCorrect = await bcrypt.compare(
      req.body.password,
      user.password
    );
    if (!isPasswordCorrect) return next(createError(400, "Wrong Password"));

    const token = jwt.sign(
      {id: user._id},
      process.env.JWT_KEY
    );

    const { password,...otherDetails } = user._doc;
    // console.log(user)
    res
      .cookie("access_token", token, {
        httpOnly: true,
      })
      .status(200)
      .send({ token, otherDetails });
  } catch (error) {
    res.status(500).send(error);
  }
};

const loggedInUser = async (req, res) => {
  const { authorization } = req.headers;
  if (!authorization) return res.status(401).send("you are not authorized to perform this action..!");
  const token = authorization.split(" ")[1];
  const user = jwt.verify(token, process.env.JWT_KEY);
  console.log("user",user)
  try {
    const res = await Authdb.find(user.id) 
    res.status(200).send(res)
  } catch (error) {
    res.status(500).send(error)
  }
  
};

module.exports = {
  registerUser,
  loginUser,
  loggedInUser
};
