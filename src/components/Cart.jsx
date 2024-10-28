import React, { useContext } from 'react';
import { CartContext } from '../components/CartContext';
import { Box, Button, List, ListItem, Text, Heading } from '@chakra-ui/react';

const Cart = () => {
  const { cart, removeFromCart, clearCart } = useContext(CartContext);

  return (
    <Box p={6}>
      <Heading mb={4}>Shopping Cart</Heading>
      {cart.length === 0 ? (
        <Text>Your cart is empty.</Text>
      ) : (
        <List spacing={3}>
          {cart.map((item) => (
            <ListItem key={item.id} display="flex" justifyContent="space-between" alignItems="center">
              <Text>{item.name} - ${item.price}</Text>
              <Button size="sm" colorScheme="red" onClick={() => removeFromCart(item.id)}>Remove</Button>
            </ListItem>
          ))}
        </List>
      )}
      {cart.length > 0 && (
        <Button mt={4} colorScheme="red" onClick={clearCart}>
          Clear Cart
        </Button>
      )}
    </Box>
  );
};

export default Cart;
