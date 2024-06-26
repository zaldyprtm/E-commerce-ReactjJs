import React, { useState } from "react";
import {
  Box,
  Flex,
  HStack,
  IconButton,
  Button,
  useDisclosure,
  Stack,
  Image,
  Text,
  Input,
  useBreakpointValue,
} from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";
import { FaShoppingCart } from "react-icons/fa";
import { Link as RouterLink, useNavigate } from "react-router-dom";
import { BiHome, BiLogIn, BiStore, BiLogOut } from "react-icons/bi";
import { FcAbout, FcContacts } from "react-icons/fc";
import Cart from "./Cart";

const Navbar = ({
  cartItems = [],
  handleRemoveCartItem,
  handleSearch,
  isLoggedIn,
  setIsLoggedIn,
}) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const {
    isOpen: isCartOpen,
    onOpen: onCartOpen,
    onClose: onCartClose,
  } = useDisclosure();
  const navigate = useNavigate();

  // Use useBreakpointValue to set the input width based on screen size
  const inputWidth = useBreakpointValue({
    base: "100px",
    sm: "200px",
    md: "300px",
    lg: "400px",
  });

  const handleLogout = () => {
    setIsLoggedIn(false);
    navigate("/");
  };

  return (
    <>
      <div className="sticky z-10 top-0 backdrop-blur-2xl bg-transparent">
        <Box bg="gray.100" px={4}>
          <Flex h={16} alignItems="center" justifyContent="space-between">
            <IconButton
              size="md"
              icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
              aria-label="Open Menu"
              display={{ md: "none" }}
              onClick={isOpen ? onClose : onOpen}
            />
            <HStack spacing={8} alignItems="center">
              <Box display="flex" alignItems="center">
                <Image
                  boxSize="30px"
                  src="/icon.png"
                  alt="Logo"
                  mr={2}
                  onClick={() => (window.location.href = "/")}
                  className="hover:cursor-pointer"
                />
                <Text className="text-sm">Store</Text>
              </Box>
              <HStack
                as="nav"
                spacing={4}
                display={{ base: "none", md: "flex" }}
              >
                <RouterLink to="/" className="flex items-center gap-1">
                  <BiHome values="Home" name="Home" />
                  <span>Home</span>
                </RouterLink>
                <RouterLink to="/store" className="flex items-center gap-1">
                  <BiStore values="Store" name="Store" />
                  <span>Store</span>
                </RouterLink>
                <RouterLink to="/about" className="flex items-center gap-1">
                  <FcAbout values="About" name="About" />
                  <span>About</span>
                </RouterLink>
                <RouterLink to="/contact" className="flex items-center gap-1">
                  <FcContacts values="Contact" name="Contact" />
                  <span>Contact</span>
                </RouterLink>
              </HStack>
            </HStack>

            <Input
              width={inputWidth}
              placeholder="Search..."
              onChange={(e) => handleSearch(e.target.value)}
            />

            <Flex alignItems="center">
              {isLoggedIn ? (
                <>
                  <Button
                  colorScheme="blue"
                  mr={5}
                  size={"sm"}
                  >
                    <RouterLink to="/dashboard">Dashboard</RouterLink>
                  </Button>
                  <Button
                    colorScheme="red"
                    size={"sm"}
                    mr={4}
                    leftIcon={<BiLogOut />}
                    variant="solid"
                    onClick={handleLogout}
                  >
                    Logout
                  </Button>
                </>
              ) : (
                <Button
                  colorScheme="blue"
                  size={"sm"}
                  mr={4}
                  leftIcon={<BiLogIn />}
                  variant="solid"
                  onClick={() => navigate("/login")}
                >
                  Login
                </Button>
              )}

              <Button
                variant="solid"
                colorScheme="teal"
                size="sm"
                mr={4}
                leftIcon={<FaShoppingCart />}
                onClick={onCartOpen}
              >
                Cart
                <div className="p-1 bg-red-500 rounded-full relative -top-2 left-4">
                  ({cartItems.length})
                </div>
              </Button>
            </Flex>
          </Flex>

          {isOpen ? (
            <Box pb={4} display={{ md: "none" }}>
              <Stack as="nav" spacing={4}>
                <RouterLink to="/" className="flex items-center gap-1">
                  <BiHome values="Home" name="Home" />
                  <span>Home</span>
                </RouterLink>
                <RouterLink to="/store" className="flex items-center gap-1">
                  <BiStore values="Store" name="Store" />
                  <span>Store</span>
                </RouterLink>
                <RouterLink to="/about" className="flex items-center gap-1">
                  <FcAbout values="About" name="About" />
                  <span>About</span>
                </RouterLink>
                <RouterLink to="/contact" className="flex items-center gap-1">
                  <FcContacts values="Contact" name="Contact" />
                  <span>Contact</span>
                </RouterLink>
              </Stack>
            </Box>
          ) : null}
        </Box>
      </div>
      <Cart
        isOpen={isCartOpen}
        onClose={onCartClose}
        cartItems={cartItems}
        handleRemoveCartItem={handleRemoveCartItem}
      />
    </>
  );
};

export default Navbar;
