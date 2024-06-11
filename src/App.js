import logo from './logo.svg';
import './App.css';
import Weather from './Weather-component';
import * as React from 'react'

// 1. import `ChakraProvider` component
import { ChakraProvider } from '@chakra-ui/react'

function App() {
  return (
    <ChakraProvider>
      <div className="App">
      <Weather />
      </div>
    </ChakraProvider>
    
  );
}

export default App;
