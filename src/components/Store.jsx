import React, { useState, useEffect } from "react";
import axios from "axios";
import {
  Card,
  CardBody,
  Image,
  Stack,
  Heading,
  Text,
  Divider,
  ButtonGroup,
  Button,
  CardFooter,
  useDisclosure,
} from "@chakra-ui/react";
import Modalbox from "./Modalbox";
import { useToast } from "@chakra-ui/react";

const Store = ({ handleAddToCart, searchTerm }) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [selectedProduct, setSelectedProduct] = useState(null);
  const toast = useToast();

  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products")
      .then((res) => {
        setProducts(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  }, []);

  const handleOpenModal = (product) => {
    setSelectedProduct(product);
    onOpen();
  };

  const handleAddToCartWithToast = (product) => {
    handleAddToCart(product);
    toast({
      title: "Product added to cart",
      description: `${product.title} has been added to your cart.`,
      status: "success",
      duration: 2000,
      isClosable: true,
      position: "bottom-right",
    });
  };

  const filteredProducts = products.filter((product) =>
    product.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="md:flex items-center justify-center">
      <div className="store md:grid md:grid-cols-3 mt-10 hover:shadow-2xl hover:shadow-gray-500">
        {filteredProducts.map((product) => (
          <Card key={product.id} maxW="sm" m="4">
            <CardBody>
              <Image
                src={product.image}
                alt={product.title}
                borderRadius="lg"
                boxSize="150px"
                objectFit="cover"
                mx="auto"
              />
              <Stack mt="6" spacing="3">
                <Heading size="md">{product.title}</Heading>
                <Text>{product.description}</Text>
                <Text color="blue.600" fontSize="2xl">
                  ${product.price}
                </Text>
              </Stack>
            </CardBody>
            <Divider />
            <CardFooter>
              <ButtonGroup spacing="2">
                <Button
                  variant="solid"
                  colorScheme="blue"
                  onClick={() => handleOpenModal(product)}
                >
                  View Product
                </Button>
                <Button
                  variant="ghost"
                  colorScheme="blue"
                  onClick={() => handleAddToCartWithToast(product)}
                >
                  Add to cart
                </Button>
              </ButtonGroup>
            </CardFooter>
          </Card>
        ))}
      </div>
      {selectedProduct && (
        <Modalbox isOpen={isOpen} onClose={onClose} product={selectedProduct} />
      )}
    </div>
  );
};

export default Store;
