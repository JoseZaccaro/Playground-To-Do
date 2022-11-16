import React, { useState, useEffect } from 'react'
import { Box, Flex } from '@chakra-ui/react';
import ToDoContainer from './ToDoContainer';
import { useDispatch, useSelector } from 'react-redux'
import toDoActions from '../redux/actions/toDoActions';

const Home = () => {
  // const [toDos, setToDos] = useState([])

  const dispatch = useDispatch()
  
  const { getToDos } = toDoActions;
  const { toDos } = useSelector((state) => state.toDo);

  useEffect(() => {

    // fetchToDo()

    dispatch(getToDos())

  }, [])



  console.log(toDos)
  return (
    <Flex>
      <ToDoContainer toDos={toDos.filter(todo => !todo.done)} title="To Do" />
      <ToDoContainer toDos={toDos.filter(todo => todo.done)} title="Done" />
    </Flex>
  )
}

export default Home