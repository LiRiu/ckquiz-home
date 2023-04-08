import React from 'react';
import ReactDOM from 'react-dom/client';
import { ChakraProvider } from "@chakra-ui/react";
import theme from "@chakra-ui/theme";
import Nav from './Nav';
import Footer from './footer';
import SplitWithImage from './features';
import CallToActionWithVideo from './Hero';
import GridListWithHeading from './roadmap';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ChakraProvider theme={theme}>
    <Nav />
    <CallToActionWithVideo />
    <SplitWithImage />
    <GridListWithHeading />
    <Footer />
  </ChakraProvider>,
  document.getElementById("root")
);
