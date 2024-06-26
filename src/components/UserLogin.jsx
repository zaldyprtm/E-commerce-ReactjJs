import React, { useState } from "react";
import {
  FormControl,
  FormLabel,
  Input,
  FormHelperText,
  Button,
  Box,
  Heading,
  VStack,
  InputGroup,
  InputRightElement,
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

const UserLogin = ({ setIsLoggedIn }) => {
  const [show, setShow] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleClick = () => setShow(!show);

  const handleLogin = () => {
    if (email === "admin@mail.com" && password === "admin") {
      setIsLoggedIn(true);
      navigate("/dashboard");
    } else {
      setError("Invalid email or password");
    }
  };

  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      height="100vh"
      backgroundColor="gray.100"
    >
      <Box
        p={8}
        maxWidth="400px"
        borderWidth={1}
        borderRadius={8}
        boxShadow="lg"
        backgroundColor="white"
      >
        <Heading as="h1" size="xl" textAlign="center" mb={6}>
          Login
        </Heading>
        <FormControl>
          <VStack spacing={4}>
            <Box width="100%">
              <FormLabel>Email address</FormLabel>
              <Input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </Box>
            <Box width="100%">
              <FormLabel>Password</FormLabel>
              <InputGroup size="md">
                <Input
                  pr="4.5rem"
                  type={show ? "text" : "password"}
                  placeholder="Enter password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <InputRightElement width="4.5rem">
                  <Button h="1.75rem" size="sm" onClick={handleClick}>
                    {show ? "Hide" : "Show"}
                  </Button>
                </InputRightElement>
              </InputGroup>
            </Box>
            {error && (
              <Box color="red.500" textAlign="center">
                {error}
              </Box>
            )}
            <FormHelperText textAlign="center">
              We'll never share your email.
            </FormHelperText>
            <Button colorScheme="teal" size="md" width="100%" onClick={handleLogin}>
              Login
            </Button>
          </VStack>
        </FormControl>
      </Box>
    </Box>
  );
};

export default UserLogin;
