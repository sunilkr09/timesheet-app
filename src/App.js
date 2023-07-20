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
import ProjectCard from './components/ProjectCard';

function App() {
  return (
    <ChakraProvider theme={theme}>
      <TaskCanvas />
      {/* <ProjectCard /> */}
    </ChakraProvider>
  );
}

export default App;
