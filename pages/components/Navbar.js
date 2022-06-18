import React from 'react'
import styles from '../../styles/Home.module.css'
import {
    Box,
    Text,
    HStack
} from '@chakra-ui/react'
import Link from 'next/link'

const Navbar = () => {
    return (
        <Box display={'flex'} justifyContent={'flex-start'} alignItems={'center'} flexDirection={'column'} p={'2rem'}>
            <HStack spacing={20}>
                <Link href='/' passHref>
                    <Text _hover={{
                        as: 'mark'
                    }} cursor={'pointer'} fontSize='lg' fontWeight='bold'>
                        Home
                    </Text>
                </Link>
                <Link href='/about' passHref>
                    <Text cursor={'pointer'} fontSize='lg' fontWeight='bold'>
                        About
                    </Text>
                </Link>
                <Link href='/blogs' passHref>
                    <Text cursor={'pointer'} fontSize='lg' fontWeight='bold'>
                        Blogs
                    </Text>
                </Link>
                <Link href='/contact' passHref>
                    <Text cursor={'pointer'} fontSize='lg' fontWeight='bold'>
                        Contact
                    </Text>
                </Link>
            </HStack>
        </Box>
    )
}

export default Navbar