import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import styles from '../styles/Blog.module.css'
import * as fs from 'fs'
import { Text, Box, Container, Button, Heading, Divider, Wrap, WrapItem, Image } from '@chakra-ui/react'
import InfiniteScroll from 'react-infinite-scroll-component'
import BlogTags from './components/BlogTags'
import BlogAuthor from './components/BlogAuthor'

const Blogs = (props) => {
  // console.log(props)
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
                        'https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=800&q=80'
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
                <BlogTags tags={['Engineering', 'Product']} marginTop="3" />
                <Heading fontSize="xl" marginTop="2">
                  <Link href={`/blogpost/${blog.slug}`} passHref>
                    {blog.title}
                  </Link>
                </Heading>
                <Text as="p" fontSize="md" marginTop="2">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Provident in quasi soluta dolorem delectus quisquam nam, aspernatur optio nemo nisi fugit enim, inventore eaque?
                </Text>
                <BlogAuthor
                  name="John Doe"
                  date={new Date('2021-04-06T19:01:27Z')}
                />
              </Box>
            </WrapItem>
          ))}
      </Wrap>
    </Container>
  )
}

export async function getStaticProps(context) {
  let data = await fs.promises.readdir(`blogdata`);
  let allCont = data.length
  let myFile;
  let allBlogs = [];
  for (let index = 0; index < 2; index++) {
    const item = data[index];
    // console.log(item)
    myFile = await fs.promises.readFile(('blogdata/' + item), 'utf-8')
    // console.log(myFile);
    allBlogs.push(JSON.parse(myFile));
  }

  return {
    props: { allBlogs, allCont },
  }
}

export default Blogs