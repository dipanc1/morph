import React, { useRef } from 'react'
import Head from 'next/head'
import {
  Container,
  Flex,
  Box,
  Heading,
  Text,
  IconButton,
  Button,
  VStack,
  HStack,
  Wrap,
  WrapItem,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  InputLeftElement,
  Textarea,
} from '@chakra-ui/react';
import {
  MdPhone,
  MdEmail,
  MdLocationOn,
  MdOutlineEmail,
} from 'react-icons/md';
import { BsGithub, BsPerson, BsLinkedin } from 'react-icons/bs';
import emailjs from '@emailjs/browser'
import Link from 'next/link';


const Contact = () => {
  const [name, setName] = React.useState('')
  const [email, setEmail] = React.useState('')
  const [desc, setDesc] = React.useState('')
  const formRef = useRef();
  const linkedin = 'https://www.linkedin.com';
  const github = 'https://github.com';
  const map = 'https://www.google.com/maps/place/India/@20,20z';
  const phone = 'tel:100';
  const mail = 'mailto:morph@notworking.com';

  const handleSubmit = (e) => {
    e.preventDefault()

    if (name.length === 0 || email.length === 0 || desc.length === 0) {
      alert('Please enter something!')
      return
    } else {
      emailjs
        .sendForm(
          "service_ef2nk5k",
          "template_rchms2o",
          formRef.current,
          "user_V88xEHCgH913EFMNqxCRw"
        )
        .then(
          (result) => {
            console.log(result.text);
            setName('')
            setEmail('')
            setDesc('')
          },
          (error) => {
            console.log(error.text);
            alert('Something went wrong!')
          }
        );
    }
  }

  const handleChange = (e) => {
    if (e.target.name === 'name') {
      setName(e.target.value)
    } else if (e.target.name === 'email') {
      setEmail(e.target.value)
    } else if (e.target.name === 'desc') {
      setDesc(e.target.value)
    }
  }


  return (
    <Container maxW="full" mt={0} centerContent overflow="hidden">
      <Head>
        <title>morph - contact</title>
        <meta name="description" content="contact morph" />
        <meta name="keywords" content="blog, blogs, morph blog, morph blogs" />
        <link rel="icon" href="/headerImg.jpg" />
      </Head>
      <Flex>
        <Box
          bg="orange.900"
          color="white"
          borderRadius="lg"
          m={{ sm: 4, md: 16, lg: 10 }}
          p={{ sm: 5, md: 5, lg: 16 }}>
          <Box p={4}>
            <Wrap spacing={{ base: 20, sm: 3, md: 5, lg: 20 }}>
              <WrapItem>
                <Box>
                  <Heading>Contact</Heading>
                  <Text mt={{ sm: 3, md: 3, lg: 5 }} color="gray.500">
                    Fill up the form below to contact
                  </Text>
                  <Box py={{ base: 5, sm: 5, md: 8, lg: 10 }}>
                    <VStack pl={0} spacing={3} alignItems="flex-start">
                      <Link href={phone} passHref>
                        <Button
                          size="md"
                          height="48px"
                          width="300px"
                          variant="ghost"
                          color="#DCE2FF"
                          _hover={{ border: '2px solid #eb7d1c' }}
                          leftIcon={<MdPhone color="#f17a19" size="20px" />}>
                          100 🕵️
                        </Button>
                      </Link>
                      <Link href={mail} passHref>
                        <Button
                          size="md"
                          height="48px"
                          width="300px"
                          variant="ghost"
                          color="#DCE2FF"
                          _hover={{ border: '2px solid #eb7d1c' }}
                          leftIcon={<MdEmail color="#f17a19" size="20px" />}>
                          morph@notworking.com 📧
                        </Button>
                      </Link>
                      <Link href={map} passHref>
                        <Button
                          size="md"
                          height="48px"
                          width="300px"
                          variant="ghost"
                          color="#DCE2FF"
                          _hover={{ border: '2px solid #eb7d1c' }}
                          leftIcon={<MdLocationOn color="#f17a19" size="20px" />}>
                          India 🇮🇳
                        </Button>
                      </Link>
                    </VStack>
                  </Box>
                  <HStack
                    mt={{ lg: 10, md: 10 }}
                    spacing={5}
                    px={5}
                    alignItems="flex-start">
                    <Link href={linkedin} passHref>
                      <IconButton
                        aria-label="facebook"
                        variant="ghost"
                        size="lg"
                        isRound={true}
                        _hover={{ bg: 'orange.400' }}
                        icon={<BsLinkedin size="28px" />}
                      />
                    </Link>
                    <Link href={github} passHref>
                      <IconButton
                        aria-label="github"
                        variant="ghost"
                        size="lg"
                        isRound={true}
                        _hover={{ bg: 'orange.400' }}
                        icon={<BsGithub size="28px" />}
                      />
                    </Link>
                  </HStack>
                </Box>
              </WrapItem>
              <WrapItem>
                <Box bg="white" borderRadius="lg">
                  <Box m={8} color="orange.900">
                    <form ref={formRef} onSubmit={handleSubmit}>
                      <VStack spacing={'5'}>
                        <FormControl id="name">
                          <FormLabel>Your Name</FormLabel>
                          <InputGroup borderColor="#E0E1E7">
                            <InputLeftElement
                              pointerEvents="none"
                            >
                              <BsPerson color="gray.800" />
                            </InputLeftElement>
                            <Input type="text" size="md"
                              placeholder='john singh'
                              name="name"
                              value={name}
                              onChange={handleChange}
                            />
                          </InputGroup>
                        </FormControl>
                        <FormControl id="name">
                          <FormLabel>Email Address</FormLabel>
                          <InputGroup borderColor="#E0E1E7">
                            <InputLeftElement
                              pointerEvents="none"
                            >
                              <MdOutlineEmail color="gray.800" />
                            </InputLeftElement>
                            <Input type="text" size="md"
                              placeholder='youremail@email.com'
                              name="email"
                              value={email}
                              onChange={handleChange}
                            />
                          </InputGroup>
                        </FormControl>
                        <FormControl id="name">
                          <FormLabel>Message</FormLabel>
                          <Textarea
                            borderColor="gray.300"
                            _hover={{
                              borderRadius: 'gray.300',
                            }}
                            placeholder="write your message here"
                            name="desc"
                            value={desc}
                            onChange={handleChange}
                          />
                        </FormControl>
                        <FormControl id="name" float="right">
                          <Button
                            type="submit"
                            variant="solid"
                            bg="orange.400"
                            color="white"
                            _hover={{}}>
                            Send Message
                          </Button>
                        </FormControl>
                      </VStack>
                    </form>
                  </Box>
                </Box>
              </WrapItem>
            </Wrap>
          </Box>
        </Box>
      </Flex>
    </Container>
  )
}

export default Contact