import React from 'react'
import { Box, Heading, Flex, Text, Button } from '@chakra-ui/react';

const ToDo = (props) => {
  const { change, toDo } = props;
  const { name, done } = props.toDo
  return (
    <Flex w={{sm:"100%",lg:"48%" ,"2xl":"32%"}} h="10rem" border="2px" borderStyle="solid" borderRadius="xl" p="6" justifyContent="space-between">
      <Flex w="70%" direction="column">
        <Heading as="h2" alignSelf="flex-start" justifySelf="flex-start" size="1xl" textColor={done && "green"} borderBottom="2px" borderStyle="solid" borderColor="blackAlpha.700" mb="4" textDecoration={done && "line-through"}>
          {name}
        </Heading>

      </Flex>
      <Button alignSelf="flex-end" variant={done ? "solid" :'outline'} colorScheme={done ? "red" : "green"} onClick={()=>change(toDo)}> {done ? "To Do": "Done"} </Button>
    </Flex>
  )
}

export default ToDo