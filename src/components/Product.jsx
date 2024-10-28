import React from 'react';
import { Box, Button, Text, VStack } from '@chakra-ui/react';

const Product = ({ product, addToCart }) => {
  return (
    <Box borderWidth="1px" borderRadius="lg" overflow="hidden" p={4}>
      <VStack spacing={4}>
        <Text fontSize="xl" fontWeight="bold">{product.name}</Text>
        <Text fontSize="lg" color="gray.600">${product.price}</Text>
        <Button colorScheme="teal" onClick={() => addToCart(product)}>Add to Cart</Button>
      </VStack>
    </Box>
  );
};

export default Product;
