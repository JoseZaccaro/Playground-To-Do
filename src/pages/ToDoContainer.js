import React, { useEffect, useState } from 'react'
import { Box, Wrap, Flex, Spacer, Heading } from '@chakra-ui/react';
import ToDo from './../components/ToDo';



const ToDoContainer = ({ toDos, title }) => {
// const ToDoContainer = ({ toDos, title, change, deleteToDo }) => {



    return (
        <Box minH="90vh" p="0.5rem" minW="48vw">
            <Heading as="h2" textAlign="center">{title}</Heading>
            <Wrap>
                {toDos.map(toDo => (
                    <ToDo key={toDo._id} toDo={toDo}/>
                    // <ToDo key={toDo._id} toDo={toDo} change={change} deleteToDo={deleteToDo}/>
                ))}
            </Wrap>
        </Box>
    )
}

export default ToDoContainer