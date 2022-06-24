import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import styles from '../styles/Blog.module.css'
// import * as fs from 'fs'
import { Text, Box, Container, Button, Heading, Divider, Wrap, WrapItem, Image } from '@chakra-ui/react'
import InfiniteScroll from 'react-infinite-scroll-component'
import BlogTags from './components/BlogTags'
import BlogAuthor from './components/BlogAuthor'
import axios from 'axios'

const Blogs = (props) => {
  // console.log(props.allBlogs)
  const [blogs, setBlogs] = useState(props.allBlogs);
  const [count, setCount] = useState(2);

  return (
    <Container maxW={'7xl'} p="12">
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

  const res = await axios.get('http://localhost:3000/api/blogs')
  const allBlogs = res.data

  return {
    props: { allBlogs }, // will be passed to the page component as props
  }
}

export default Blogs