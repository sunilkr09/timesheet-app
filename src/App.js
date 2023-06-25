import React from 'react';
import {
  ChakraProvider,
  Box,
  Text,
  Link,
  VStack,
  Code,
  Grid,
  theme,
} from '@chakra-ui/react';
import { ColorModeSwitcher } from './ColorModeSwitcher';
import { Logo } from './Logo';
import TaskCanvas from './components/TaskCanvas';

function App() {
  return (
    <ChakraProvider theme={theme}>
      <TaskCanvas />
    </ChakraProvider>
  );
}

export default App;
