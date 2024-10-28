import React, { useContext } from 'react';
import { CartContext } from './CartContext';
import { SimpleGrid, Box, Heading } from '@chakra-ui/react';
import Product from './Product';

const products = [
  { id: 1, name: 'Product 1', price: 29.99 },
  { id: 2, name: 'Product 2', price: 39.99 },
  { id: 3, name: 'Product 3', price: 19.99 },
];

const ProductList = () => {
  const { addToCart } = useContext(CartContext);

  return (
    <Box p={6}>
      <Heading mb={4}>Products</Heading>
      <SimpleGrid columns={[1, 2, 3]} spacing={6}>
        {products.map((product) => (
          <Product key={product.id} product={product} addToCart={addToCart} />
        ))}
      </SimpleGrid>
    </Box>
  );
};

export default ProductList;
