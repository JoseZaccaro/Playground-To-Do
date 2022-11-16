import React from 'react'
import { Box, Heading, Flex, Text, Button } from '@chakra-ui/react';
import { useDispatch } from 'react-redux'
import toDoActions from './../redux/actions/toDoActions';
const ToDo = (props) => {
  const { toDo } = props;
  const { name, done } = props.toDo
  const dispatch = useDispatch()

  const { doneToDo } = toDoActions;

  const change = () => {
    dispatch(doneToDo(toDo))
  }
  const deleteToDo = (exd) =>{
    console.log(exd)
  }
  return (
    <Flex w={{ sm: "100%", lg: "48%", "2xl": "32%" }} h="10rem" border="2px" borderStyle="solid" borderRadius="xl" p="6" justifyContent="space-between">
      <Flex w="70%" direction="column">
        <Heading as="h2" alignSelf="flex-start" justifySelf="flex-start" size="1xl" textColor={done && "green"} borderBottom="2px" borderStyle="solid" borderColor="blackAlpha.700" mb="4" textDecoration={done && "line-through"}>
          {name}
        </Heading>
        <Text alignSelf="flex-start" wordBreak="break-word" maxH="2xs" overflowY="auto" pr="2">
         {toDo?.description}
        </Text>
      </Flex>

      <Button alignSelf="flex-end" variant='outline' colorScheme="green" onClick={change}> {toDo.done ? "To Do" : "Done"} </Button>
      <Button alignSelf="flex-end" variant="solid" colorScheme="red" onClick={()=>deleteToDo(toDo._id)}> Delete To Do </Button>
    </Flex>
  )
}

export default ToDo