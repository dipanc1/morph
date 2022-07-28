import Link from 'next/link'
import Head from 'next/head'
import React, { useEffect, useState } from 'react'
// import * as fs from 'fs'
import { Text, Box, Container, Button, Heading, Divider, Wrap, WrapItem, Image, HStack, Tag } from '@chakra-ui/react'
import InfiniteScroll from 'react-infinite-scroll-component'
import axios from 'axios'

const BlogTags = (props) => {
  return (
    <HStack spacing={2} marginTop={props.marginTop}>
      {props.tags.map((tag) => {
        return (
          <Tag size={'md'} variant="solid" colorScheme="orange" key={tag}>
            {tag}
          </Tag>
        );
      })}
    </HStack>
  )
}

const BlogAuthor = (props) => {
  return (
    <HStack marginTop="2" spacing="2" display="flex" alignItems="center">
      <Image
        borderRadius="full"
        boxSize="40px"
        src="https://yt3.ggpht.com/ytc/AKedOLTuyp30-n5Js2Z-lWtFoHwF9buqc-Qb78wRWZJ07g=s176-c-k-c0x00ffffff-no-rj"
        alt={`Avatar of ${props.name}`}
      />
      <Text fontWeight="medium">{props.name}</Text>
      <Text>—</Text>
      <Text>{props.date.toLocaleDateString()}</Text>
    </HStack>
  )
}

const Blogs = (props) => {
  // console.log(props.allBlogs)
  const [blogs, setBlogs] = useState(props.allBlogs);
  const [count, setCount] = useState(2);

  return (
    <Container maxW={'7xl'} p="12">
      <Head>
        <title>morph - blogs</title>
        <meta name="description" content="blogs on morph" />
        <meta name="keywords" content="blog, blogs, morph blog, morph blogs" />
        <link rel="icon" href="/headerImg.jpg" />
      </Head>
      <Heading as="h2" marginTop="5">
        Latest articles
      </Heading>
      <Divider marginTop="5" />
      <Wrap spacing="30px" marginTop="5">
        {blogs.map((blog) => (
          <WrapItem width={{ base: '100%', sm: '45%', md: '45%', lg: '30%' }} key={blog.slug}>
            <Box w="100%">
              <Box borderRadius="lg" overflow="hidden">
                <Link href={`/blogpost/${blog.slug}`} passHref>
                  <Image
                    transform="scale(1.0)"
                    src={
                      blog.image
                    }
                    alt="some text"
                    objectFit="contain"
                    width="100%"
                    transition="0.3s ease-in-out"
                    _hover={{
                      transform: 'scale(1.05)',
                    }}
                  />
                </Link>
              </Box>
              <BlogTags tags={blog.tags.map(item => item)} marginTop="3" />
              <Heading fontSize="xl" marginTop="2">
                <Link href={`/blogpost/${blog.slug}`} passHref>
                  {blog.title}
                </Link>
              </Heading>
              <Text as="p" fontSize="md" marginTop="2">
                {blog.content}
              </Text>
              <BlogAuthor
                name="morph"
                date={new Date(blog.createdAt)}
              />
            </Box>
          </WrapItem>
        ))}
      </Wrap>
    </Container>
  )
}

export async function getServerSideProps(context) {

  const res = await axios.get(process.env.API_URL + '/blogs')
  const allBlogs = res.data

  return {
    props: { allBlogs }, // will be passed to the page component as props
  }
}

export default Blogs