import React, { useEffect } from 'react'
import {
    Box,
    Text,
    HStack,
    Button
} from '@chakra-ui/react'
import Link from 'next/link'

const Navbar = () => {
    const [auth, setAuth] = React.useState(false)

    useEffect(() => {
        if (localStorage.getItem('token')) {
            setAuth(true)
        }
    }, [])


    return (
        <Box
            display={'flex'}
            justifyContent={'space-between'}
            alignItems={'center'}
            flexDirection={'column'}
            p={'2rem'}>
            <HStack spacing={[
                '1.5rem',
                '2rem',
                '6rem',
            ]}>
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
                {/* <Link href={auth ? 'admin' : '/admin/login'} passHref>
                    <Button>
                        {auth ? 'Create Post' : 'Login'}
                    </Button>
                </Link> */}
            </HStack>
        </Box>
    )
}

export default Navbar