import React, { useState, useEffect } from 'react'
import { Box, Flex } from '@chakra-ui/react';
import ToDoContainer from './ToDoContainer';

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


  return (
    <Flex bg="whatsapp.50">
      <ToDoContainer toDos={toDos.filter(todo => !todo.done)} title="To Do" change={filterDone}/>
      <ToDoContainer toDos={toDos.filter(todo => todo.done)} title="Done" change={filterDone}/>
    </Flex>
  )
}

export default Home