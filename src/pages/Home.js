import React, { useState, useEffect } from 'react'
import { Box, Flex } from '@chakra-ui/react';
import ToDoContainer from './ToDoContainer';
import { useDispatch, useSelector } from 'react-redux'
import toDoActions from '../redux/actions/toDoActions';
import axios from 'axios';

const Home = () => {
  // const [toDos, setToDos] = useState([])

  const dispatch = useDispatch()

  const { getToDos } = toDoActions;
  const { toDos } = useSelector((state) => state.toDo);

  useEffect(() => {

    // fetchToDo()
    if (toDos.length === 0) {
      dispatch(getToDos())
    }
  }, [])


  const deleteToDo = async (todoId) => {
    try{

      const res = await axios.delete("https://lista-productos-playground.herokuapp.com/api/productos/"+todoId,{
        headers:{
          "Authorization": "Bearer " + localStorage.getItem('token')
        }
      })
      console.log(todoId);
      const filtered = toDos.filter(element => element._id !== todoId)
      console.log(filtered);
      console.log(res);
      // setToDos(filtered)
    }catch(err){
      console.log(err);
    }
  }


  console.log(toDos)
  return (
    <Flex>
      <ToDoContainer toDos={toDos.filter(todo => !todo.done)} title="To Do" />
      <ToDoContainer toDos={toDos.filter(todo => todo.done)} title="Done" />
    {/* <Flex bg="whatsapp.50" pt="2.5rem" px="1vw">
      <ToDoContainer toDos={toDos.filter(todo => !todo.done)} title="To Do" change={filterDone} deleteToDo={deleteToDo}/>
      <ToDoContainer toDos={toDos.filter(todo => todo.done)} title="Done" change={filterDone} deleteToDo={deleteToDo}/> */}
    </Flex>
  )
}

export default Home