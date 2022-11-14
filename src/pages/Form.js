import React from 'react'
import { Box, Input, Stack, Flex, Heading, Button, VStack } from '@chakra-ui/react';

const Form = () => {

  const createToDo = ()=>{

  }

  return (
    <Flex minH="90vh" p="0.5rem" pt="5rem" alignItems="center" direction="column">
      <Heading as="h1" mb="5rem">Create To Do</Heading>
      <VStack w="20vw" spacing='64px'>
        <Input variant='flushed' placeholder='To Do' />
        <Input variant='flushed' placeholder='Quantity (optional)' />
        <Button
          colorScheme='green'
          variant='outline'
          onClick={createToDo}
        >
          Add To Do
        </Button>
      </VStack>
    </Flex>
  )
}

export default Form