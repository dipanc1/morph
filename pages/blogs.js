import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import styles from '../styles/Blog.module.css'
import * as fs from 'fs'
import { Text, Box, Container, Button } from '@chakra-ui/react'
import InfiniteScroll from 'react-infinite-scroll-component'

const Blogs = (props) => {
  // console.log(props)
  const [blogs, setBlogs] = useState(props.allBlogs);
  const [count, setCount] = useState(2);

  const fetchMoreData = async () => {
    let d = await fetch(`/api/blogs?count=${count + 2}`)
    setCount(count + 2)
    let data = await d.json()
    setBlogs(data)
  };

  return (
    <Box display={'flex'} justifyContent={'flex-start'} alignItems={'center'} flexDirection={'column'} p={'0 2rem'}>
      <Text fontSize='5xl'>Latest Blogs</Text>
      <Container minH={'80vh'} m={'10px 0px'}>
        <Button>
          Post a New Blog
        </Button>
        <InfiniteScroll
          dataLength={blogs.length}
          next={fetchMoreData}
          hasMore={props.allCont !== blogs.length}
          loader={<h4>Loading...</h4>}
          endMessage={
            <p style={{ textAlign: 'center' }}>
              <b>Yay! You have seen it all</b>
            </p>
          }
        >
          {blogs.map((blog) => (
            <Container mb={10} key={blog.slug}>
              <Link href={`/blogpost/${blog.slug}`} passHref>
                <Text fontSize='2xl'>{blog.title}</Text>
              </Link>
              <Text fontSize='xl'>{blog.metadesc}...</Text>
              <Link href={`/blogpost/${blog.slug}`} passHref>
                <Button>
                  Read More
                </Button>
              </Link>
            </Container>
          ))}
        </InfiniteScroll>
      </Container>
    </Box>
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