import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import styles from '../../styles/BlogPost.module.css'
import * as fs from 'fs'
import { Box, Container, Heading, Text } from '@chakra-ui/react'

const Slug = (props) => {
  function createMarkup(c) {
    return { __html: c }
  }

  const [blog, setBlog] = useState(props.myBlog)

  return (
    <Container maxW={'7xl'} p="12">
      {/* title  */}
      <Heading as='h2' size='2xl'>
        {blog && blog.title}
      </Heading>
      {/* content */}
      <Box mt={12}>
        <Text fontSize={'2xl'}>
          {blog && blog.content}
        </Text>
        {/* Image  */}

        {/* more content  */}
      </Box>

      {/* tags */}

      {/* author */}

      {/* date */}

    </Container>
  )
}

export async function getStaticPaths() {
  return {
    paths: [
      { params: { slug: 'future' } },
      { params: { slug: 'how-i-started' } },
      { params: { slug: 'coding-and-me' } },
      { params: { slug: 'how-it-is-going' } },
      { params: { slug: 'it-is-difficult' } },
      { params: { slug: 'meeting-love-of-myl-ife' } },
      { params: { slug: 'changing-my-feild' } },
    ],
    fallback: true
  };
}

export async function getStaticProps(context) {
  const { slug } = context.params;

  let myBlog = await fs.promises.readFile(`blogdata/${slug}.json`, 'utf8')
  return {
    props: { myBlog: JSON.parse(myBlog) },
  }
}

export default Slug