import React from 'react'
import { Flex, Link } from '@chakra-ui/react';
import { Link as RRLink } from 'react-router-dom'

const links = [
    { path: '/', title: 'Home' },
    { path: '/form', title: 'Create To Do' },
    { path: '/log', title: 'Log On' },

]

const Navigation = () => {

    return (
        <Flex mx="10" justifyContent="space-between" minW="20vw" rowGap="2rem">
        {
            links.map(link => (
                <Link key={link.path} as={RRLink} to={link.path}>
                    {link.title}
                </Link>

            ))
        }

    </Flex>
    )
}

export default Navigation