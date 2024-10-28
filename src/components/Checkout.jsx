import React, { useContext } from 'react';
import { CartContext } from './CartContext';
import { Box, Button, Text, Heading } from '@chakra-ui/react';

const Checkout = () => {
  const { cart } = useContext(CartContext);

  const totalAmount = cart.reduce((total, item) => total + item.price, 0);

  return (
    <Box p={6}>
      <Heading mb={4}>Checkout</Heading>
      {cart.length === 0 ? (
        <Text>Your cart is empty. Please add items to proceed.</Text>
      ) : (
        <Box>
          <Text fontSize="lg">Total Amount: ${totalAmount.toFixed(2)}</Text>
          <Button colorScheme="teal" mt={4}>Confirm Purchase</Button>
        </Box>
      )}
    </Box>
  );
};

export default Checkout;
