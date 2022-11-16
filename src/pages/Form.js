import React, { useRef } from 'react'
import { Box, Input, Stack, Flex, Heading, Button, VStack } from '@chakra-ui/react';
import axios from 'axios';

const Form = () => {

  const name = useRef()
  const quantity = useRef()
  // const tokenInput = useRef()

  const createToDo = async () => {
    const form = {
      name: name.current.value,

      description: quantity.current.value
    }
    name.current.value = ''
    quantity.current.value = ''
    // tokenInput.current.value = ''

    // const token = tokenInput.current.value

    console.log(form);
    const res = await axios.post('https://lista-productos-playground.herokuapp.com/api/productos', { name: form.name, description: form.description }, {
      headers: {
        'Authorization': `Bearer ${localStorage.getItem('token')}`
      }
    })
    console.log(res);
    // const res = await fetch('https://lista-productos-playground.herokuapp.com/api/productos', {
    //   method: 'POST',
    //   headers: {
    //     'Authorization': `Bearer ${token}`
    //   },
    //   mode: "no-cors",
    //   body: { name: form.name, description: form.description }
    // })
    const toDo = res.data.respuesta; 

    return toDo;

  }

  return (
    <Flex minH="90vh" p="0.5rem" pt="5rem" alignItems="center" direction="column">
      <Heading as="h1" mb="5rem">Create To Do</Heading>
      <VStack w="20vw" spacing='64px'>
        <Input variant='flushed' placeholder='To Do' ref={name} />
        <Input variant='flushed' placeholder='Description (optional)' ref={quantity} />
        {/* <Input variant='flushed' placeholder='Token' ref={tokenInput} /> */}

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