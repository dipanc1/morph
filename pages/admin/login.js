import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  Checkbox,
  Stack,
  Link,
  Button,
  Heading,
  Text,
  useColorModeValue,
} from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router'
import axios from 'axios';

export default function Login() {
  const [username, setUsername] = useState(null);
  const [password, setPassword] = useState(null);
  const [error, setError] = useState(false);
  const router = useRouter();

  const handleClick = async () => {
    try {
      await axios.post('http://localhost:3000/api/login', {
        username,
        password
      })
      .then(res => {
        localStorage.setItem('token', res.data.token);
      })
      router.push('/admin');
    } catch (error) {
      console.log(error);
      setError(error);
    }
  }

  useEffect(() => {
    if (localStorage.getItem('token')) {
      router.push('/admin');
    }
  }, [router])


  return (
    <Flex
      minH={'100vh'}
      align={'center'}
      justify={'center'}
    >
      <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
        <Stack align={'center'}>
          <Heading fontSize={'4xl'}>Sign in to your account</Heading>
          <Text fontSize={'lg'} color={'gray.600'}>
            if you are<Link color={'orange.400'}> morph.</Link> ✌️
          </Text>
        </Stack>
        <Box
          rounded={'lg'}
          bg={useColorModeValue('white', 'gray.700')}
          boxShadow={'lg'}
          p={8}>
          <Stack spacing={4}>
            <FormControl id="email">
              <FormLabel>Username</FormLabel>
              <Input type="text"
                onChange={
                  (e) => setUsername(e.target.value)
                }
              />
            </FormControl>
            <FormControl id="password">
              <FormLabel>Password</FormLabel>
              <Input type="password"
                onChange={
                  (e) => setPassword(e.target.value)
                }
              />
            </FormControl>
            <Stack spacing={10}>
              <Stack
                direction={{ base: 'column', sm: 'row' }}
                align={'start'}
                justify={'space-between'}>
                <Checkbox>Remember me</Checkbox>
              </Stack>
              <Button
                bg={'orange.400'}
                color={'white'}
                _hover={{
                  bg: 'orange.500',
                }}
                onClick={handleClick}
              >
                Sign in
              </Button>
            </Stack>
            <Text fontSize='lg'>
              {error && 'Invalid username or password'}
            </Text>
          </Stack>
        </Box>
      </Stack>
    </Flex>
  );
}