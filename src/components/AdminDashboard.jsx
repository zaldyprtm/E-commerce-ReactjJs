import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {
  Box,
  Heading,
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
  Button,
  IconButton,
  Input,
  FormControl,
  FormLabel,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  VStack,
} from '@chakra-ui/react';
import { AddIcon, EditIcon, DeleteIcon } from '@chakra-ui/icons';

const AdminDashboard = () => {
  const [products, setProducts] = useState([]);
  const [currentProduct, setCurrentProduct] = useState({ id: null, title: '', description: '', price: '', image: '' });
  const [isEditing, setIsEditing] = useState(false);

  const { isOpen, onOpen, onClose } = useDisclosure();

  useEffect(() => {
    axios
      .get('https://fakestoreapi.com/products')
      .then((res) => {
        setProducts(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setCurrentProduct({ ...currentProduct, [name]: value });
  };

  const handleAddProduct = () => {
    if (currentProduct.title && currentProduct.description && currentProduct.price) {
      setProducts([...products, { ...currentProduct, id: products.length + 1 }]);
      setCurrentProduct({ id: null, title: '', description: '', price: '', image: '' });
      onClose();
    }
  };

  const handleEditProduct = (product) => {
    setCurrentProduct(product);
    setIsEditing(true);
    onOpen();
  };

  const handleUpdateProduct = () => {
    setProducts(products.map(product => (product.id === currentProduct.id ? currentProduct : product)));
    setCurrentProduct({ id: null, title: '', description: '', price: '', image: '' });
    setIsEditing(false);
    onClose();
  };

  const handleDeleteProduct = (id) => {
    setProducts(products.filter(product => product.id !== id));
  };

  const handleOpenModal = () => {
    setIsEditing(false);
    setCurrentProduct({ id: null, title: '', description: '', price: '', image: '' });
    onOpen();
  };

  return (
    <Box p={8}>
      <Heading mb={6}>Admin Dashboard</Heading>
      <Button colorScheme="teal" onClick={handleOpenModal} leftIcon={<AddIcon />}>
        Add Product
      </Button>
      <TableContainer mt={6}>
        <Table variant="striped" colorScheme="teal">
          <TableCaption>Manage Products</TableCaption>
          <Thead>
            <Tr>
              <Th>ID</Th>
              <Th>Title</Th>
              <Th>Description</Th>
              <Th>Price</Th>
            </Tr>
          </Thead>
          <Tbody>
            {products.map(product => (
              <Tr key={product.id}>
                <Td>{product.id}</Td>
                <Td>{product.title}</Td>
                <Td>${product.price}</Td>
                <Td>
                  <IconButton
                    icon={<EditIcon />}
                    colorScheme="blue"
                    onClick={() => handleEditProduct(product)}
                    mr={2}
                  />
                  <IconButton
                    icon={<DeleteIcon />}
                    colorScheme="red"
                    onClick={() => handleDeleteProduct(product.id)}
                  />
                </Td>
              </Tr>
            ))}
          </Tbody>
          <Tfoot>
            <Tr>
              <Th>ID</Th>
              <Th>Title</Th>
              <Th>Price</Th>
              <Th>Actions</Th>
            </Tr>
          </Tfoot>
        </Table>
      </TableContainer>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>{isEditing ? 'Edit Product' : 'Add Product'}</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <VStack spacing={4}>
              <FormControl>
                <FormLabel>Title</FormLabel>
                <Input
                  type="text"
                  name="title"
                  value={currentProduct.title}
                  onChange={handleInputChange}
                />
              </FormControl>
            
              <FormControl>
                <FormLabel>Price</FormLabel>
                <Input
                  type="number"
                  name="price"
                  value={currentProduct.price}
                  onChange={handleInputChange}
                />
              </FormControl>
              <FormControl>
                <FormLabel>Image URL</FormLabel>
                <Input
                  type="text"
                  name="image"
                  value={currentProduct.image}
                  onChange={handleInputChange}
                />
              </FormControl>
            </VStack>
          </ModalBody>
          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={isEditing ? handleUpdateProduct : handleAddProduct}>
              {isEditing ? 'Update' : 'Add'}
            </Button>
            <Button variant="ghost" onClick={onClose}>Cancel</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Box>
  );
};

export default AdminDashboard;
