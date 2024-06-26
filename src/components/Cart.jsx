import React from "react";
import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Button,
  Stack,
  Text,
} from "@chakra-ui/react";
import { IoRemove } from "react-icons/io5";
import { MdRemoveCircle } from "react-icons/md";
import { CgRemove } from "react-icons/cg";
import { FaRemoveFormat } from "react-icons/fa";
import { VscRemove } from "react-icons/vsc";

const Cart = ({ isOpen, onClose, cartItems, handleRemoveCartItem }) => {
  // Calculate the total sum of all items in the cart
  const totalSum = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);

  return (
    <Drawer isOpen={isOpen} placement="right" onClose={onClose}>
      <DrawerOverlay />
      <DrawerContent>
        <DrawerCloseButton />
        <DrawerHeader>Cart</DrawerHeader>
        <DrawerBody>
          {cartItems.length === 0 ? (
            <Text>Your cart is empty.</Text>
          ) : (
            <Stack spacing="4">
              {cartItems.map((item) => (
                <Stack
                  key={item.id}
                  direction="row"
                  justifyContent="space-between"
                  alignItems="center"
                >
                  <Text>{item.title}</Text>
                  <Text>${item.price}</Text>
                  <Text>x{item.quantity}</Text>
                  <Button colorScheme="red" onClick={() => handleRemoveCartItem(item.id)}>X</Button>
                </Stack>
              ))}
            </Stack>
          )}
        </DrawerBody>
        {cartItems.length > 0 && (
          <DrawerFooter justifyContent="space-between">
            <Text fontWeight="bold">Total: ${totalSum.toFixed(2)}</Text>
            <Button colorScheme="blue">Checkout</Button>
          </DrawerFooter>
        )}
        <DrawerFooter>
          <Button variant="outline" mr={3} onClick={onClose}>
            Close
          </Button>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
};

export default Cart;
