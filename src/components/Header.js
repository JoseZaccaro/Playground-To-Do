import React from 'react'
import { Heading, Flex, Box, Link, Spacer } from '@chakra-ui/react'
import Navigation from './Navigation';



const Header = () => {
    return (
        <Flex align="center" height="10vh" p="15" borderBottom={1} borderBottomColor="gray.300" borderBottomStyle="solid">
            <Heading as="h1" size="2xl"> To Do App </Heading>
            <Spacer />
            <Navigation />
        </Flex>
    )
}

export default Header