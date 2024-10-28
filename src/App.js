import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import { CartProvider } from './components/CartContext';
import ProductList from './components/ProductList';
import Cart from './components/Cart';
import Checkout from './components/Checkout';
import { Box, Flex, Button, Heading } from '@chakra-ui/react';

const App = () => {
  return (
    <CartProvider>
      <Router>
        <Box p={4} bg="teal.500">
          <Flex justify="space-between" align="center" color="white">
            <Heading as="h1" size="lg">My E-Commerce</Heading>
            <Flex gap={4}>
              <Button as={Link} to="/" variant="ghost" color="white">
                Home
              </Button>
              <Button as={Link} to="/cart" variant="ghost" color="white">
                Cart
              </Button>
              <Button as={Link} to="/checkout" variant="ghost" color="white">
                Checkout
              </Button>
            </Flex>
          </Flex>
        </Box>
        <Routes>
          <Route path="/" element={<ProductList />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<Checkout />} />
        </Routes>
      </Router>
    </CartProvider>
  );
};

export default App;
