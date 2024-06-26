import React from 'react';
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  Image,
  Text,
  Stack,
  Heading,
} from '@chakra-ui/react';

const Modalbox = ({ isOpen, onClose, product }) => {
  if (!product) return null;

  return (
    <Modal onClose={onClose} isOpen={isOpen} isCentered>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>{product.title}</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <Stack spacing="3">
            <Image src={product.image} alt={product.title} borderRadius="lg" boxSize="200px" objectFit="cover" mx="auto" />
            <Heading size="md">{product.title}</Heading>
            <Text>{product.description}</Text>
            <Text color="blue.600" fontSize="2xl">${product.price}</Text>
          </Stack>
        </ModalBody>
        <ModalFooter>
          <Button colorScheme="blue" onClick={onClose}>Close</Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default Modalbox;
