import React, { useRef } from 'react'
import { Box, Input, Stack, Flex, Heading, Button, VStack } from '@chakra-ui/react';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import toDoActions from './../redux/actions/toDoActions';
import alertActions from './../redux/actions/alertActions';

const Form = () => {

  const name = useRef()
  const description = useRef()
  // const tokenInput = useRef()
  const dispatch = useDispatch()

  const { addToDo } = toDoActions;
  const { alerta } = alertActions;
  const alerta2 = useSelector(state => state.toDo.alerta)

  const createToDo = async () => {
    const form = {
      name: name.current.value,
      description: description.current.value
    }
    name.current.value = ''
    description.current.value = ''
    dispatch(addToDo(form))
    dispatch(alerta("To Do nuevo cargado!"))

  }
  console.log(alerta2);
  // if (alertaReducer.show) {
  //   alert(alertaReducer.show)
  // }

  return (
    <Flex minH="90vh" p="0.5rem" pt="5rem" alignItems="center" direction="column">
      <Heading as="h1" mb="5rem">Create To Do</Heading>
      <VStack w="20vw" spacing='64px'>
        <Input variant='flushed' placeholder='To Do' ref={name} />
        <Input variant='flushed' placeholder='Description (optional)' ref={description} />
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