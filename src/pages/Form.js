import React, { useRef } from 'react'
import { Box, Input, Stack, Flex, Heading, Button, VStack } from '@chakra-ui/react';
import axios from 'axios';
const tokenXd = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyIkX18iOnsiYWN0aXZlUGF0aHMiOnsicGF0aHMiOnsicGFzc3dvcmQiOiJpbml0IiwidXNlck5hbWUiOiJpbml0IiwiX2lkIjoiaW5pdCIsIl9fdiI6ImluaXQifSwic3RhdGVzIjp7Imlnbm9yZSI6e30sImRlZmF1bHQiOnt9LCJpbml0Ijp7Il9pZCI6dHJ1ZSwidXNlck5hbWUiOnRydWUsInBhc3N3b3JkIjp0cnVlLCJfX3YiOnRydWV9LCJtb2RpZnkiOnt9LCJyZXF1aXJlIjp7fX0sInN0YXRlTmFtZXMiOlsicmVxdWlyZSIsIm1vZGlmeSIsImluaXQiLCJkZWZhdWx0IiwiaWdub3JlIl19LCJlbWl0dGVyIjp7Il9ldmVudHMiOnt9LCJfZXZlbnRzQ291bnQiOjAsIl9tYXhMaXN0ZW5lcnMiOjB9LCJzdHJpY3RNb2RlIjp0cnVlLCJzZWxlY3RlZCI6e30sIl9pZCI6IjYxZGYyNzJiNjM1MWU1ZDM5NzIwZTA0ZCJ9LCIkaXNOZXciOmZhbHNlLCJfZG9jIjp7Il9pZCI6IjYxZGYyNzJiNjM1MWU1ZDM5NzIwZTA0ZCIsInVzZXJOYW1lIjoiam9zZSIsInBhc3N3b3JkIjoiJDJhJDEwJDdoeE1UZmJ4ZHlDdWE5YW5sUlFZUHVEOS5HQjA4cDhiSHgxQnJYNWpUeEI0YVhXckhSUC8yIiwiX192IjowfSwiJGluaXQiOnRydWUsImlhdCI6MTY2ODQ2ODIzOH0.ixfOPXJSaDZTau35NG9D9k4-kVnwaVD3GKoejjF8MI8'
const Form = () => {

  const name = useRef()
  const quantity = useRef()
  const tokenInput = useRef()

  const createToDo = async () => {
    const form = {
      name: name.current.value,

      description: quantity.current.value
    }
    // const token = tokenInput.current.value
    console.log(form);
    const res = await axios.post('https://lista-productos-playground.herokuapp.com/api/productos', { name: form.name, description: form.description }, {
      headers: {
        'Authorization': `Bearer ${tokenXd}`
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
        <Input variant='flushed' placeholder='Token' ref={tokenInput} />

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