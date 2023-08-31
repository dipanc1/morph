import React from 'react'
import Head from 'next/head'
import { Heading, Text, VStack, Container } from '@chakra-ui/react'

const About = () => {
  return (
    <Container maxW={'7xl'} p="12">
      <Head>
        <title>morph - about</title>
        <meta name="description" content="about page of morph" />
        <meta name="keywords" content="blog, blogs, morph blog, morph blogs" />
        <link rel="icon" href="/headerImg.jpg" />
      </Head>
      <VStack paddingTop="40px" spacing="4" alignItems="flex-start">
        <Heading as="h2">What we write about</Heading>
        <Text as="p" fontSize="lg">
          I am Full Stack Developer with experience in building Web, Mobile and Desktop applications. I have worked on various projects that include building Web Apps, Mobile Apps, Desktop Apps, Chrome Extensions, Browser Extensions, Web Scrapers, Automation Bots, APIs, Web Servers, SPAs, PWAs, etc.
        </Text>
        <Text as="p" fontSize="lg">
          I will be writing about my experiences and learnings in this blog. I will also be writing about the projects that I have worked on and the projects that I am currently working on. I will also be writing about the technologies that I am currently learning and the technologies that I am planning to learn in the future.
        </Text>
        <Text as="p" fontSize="lg">
          Please feel free to contact me if you have any questions or suggestions. (if you can)
        </Text>
      </VStack>
    </Container>
  )
}

export default About