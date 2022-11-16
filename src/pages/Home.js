import React, { useState, useEffect } from 'react'
import { Box, Flex } from '@chakra-ui/react';
import ToDoContainer from './ToDoContainer';
import axios from 'axios';

const Home = () => {
  const [toDos, setToDos] = useState([])

  useEffect(() => {
    const fetchToDo = async function () {
      try {

        const pedido = await fetch("https://lista-productos-playground.herokuapp.com/api/productos")
        const data = await pedido.json()

        const todos = data.respuesta.map(todo => {
          todo.done = false;
          return todo;
        })

        setToDos(todos)

      } catch (error) {
        console.log(error);
      }
    }
    fetchToDo()
  }, [])

  const filterDone = (todo) => {
    const filteredToDos = toDos.filter(element => element._id !== todo._id)
    let modifiedTodo = todo
    console.log(modifiedTodo);
    modifiedTodo.done =  modifiedTodo.done ? false : true;
    console.log(modifiedTodo);
    filteredToDos.push(modifiedTodo)
    setToDos(filteredToDos)
  }

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
      setToDos(filtered)
    }catch(err){
      console.log(err);
    }
  }


  return (
    <Flex bg="whatsapp.50" pt="2.5rem" px="1vw">
      <ToDoContainer toDos={toDos.filter(todo => !todo.done)} title="To Do" change={filterDone} deleteToDo={deleteToDo}/>
      <ToDoContainer toDos={toDos.filter(todo => todo.done)} title="Done" change={filterDone} deleteToDo={deleteToDo}/>
    </Flex>
  )
}

export default Home