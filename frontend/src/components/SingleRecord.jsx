import { Box, Button, Flex, Image, Text } from "@chakra-ui/react";
import { Link, useNavigate } from "react-router-dom";

const SingleRecord = ({ post }) => {

   console.log(post)
   var nowDate = new Date();
   var date = nowDate.getFullYear() + '/' + (nowDate.getMonth() + 1) + '/' + nowDate.getDate();
   console.log(post._id)
   const navigate = useNavigate()

   return (
      <Box
         onClick={() => navigate(`/update/${post._id}`)}
         key={post._id}
         bg="#f0ece9"
         p={4}
         borderRadius="md"
         width="100%"
         cursor={"pointer"}
         className="blogBox"
      >

         <Flex
            justify={"space-between"}
            align={"center"}
            borderRadius={"10px"}
            p={2}
         >
            <Box w={"25%"} p={2}>
               <Image src={post.image} alt={name} borderRadius={"50%"} />
            </Box>
            <Flex direction={"column"}>
               <Text
                  w={"100%"}
                  fontSize={{ base: "1rem", md: "1rem" }}
               >
                  {date}
               </Text>
               <Text fontSize={{ base: "1rem", md: "1rem" }}>
                  <span style={{ fontSize: "18px", fontWeight: "bold", textTransform: "capitalize", fontFamily: "Lugrasimo" }}>{post.email}</span>
               </Text>
            </Flex>
         </Flex>

         <Image src={post.image} alt={name} w={"300px"} m={"auto"} h={"250px"} my={4} />
         <Flex justify={"space-between"}
            align={"center"}
            borderRadius={"10px"}
            p={2}>
            <Text fontWeight={"bold"} fontSize={"1.2rem"} fontFamily={"Lugrasimo"}>
               {post.name}
            </Text>
            <Text>
               <Button>{post.status}</Button>
            </Text>
         </Flex>

      </Box>
   );
};

export default SingleRecord;
