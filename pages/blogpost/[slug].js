import React, { useEffect, useState } from 'react'
import Head from 'next/head'
import { useRouter } from 'next/router'
import { Box, Container, Heading, Text, Image } from '@chakra-ui/react'
import axios from 'axios'

const Slug = (props) => {
  // console.log(props)
  const [blog, setBlog] = useState(props.myBlog)

  return (
    <Container maxW={'7xl'} p="12">
      <Head>
        <title>morph - {blog.title}</title>
        <meta name="keywords" content={blog.tags} />
        <link rel="icon" href="/headerImg.jpg" />
      </Head>
      {/* title  */}
      <Heading as='h2' size='2xl'>
        {blog.title}
      </Heading>
      {/* content */}
      <Box mt={12}>
        <Text fontSize={'2xl'}>
          {blog.content}
        </Text>
        {/* Image  */}
        <Box mt={12}>
          <Image src={blog.image} alt={blog.title} />
        </Box>
        {/* more content  */}
      </Box>

      {/* tags */}
      <Box mt={12}>
        <Text fontSize={'2xl'}>
          {blog.tags}
        </Text>
      </Box>

      {/* author */}
      <Box mt={12}>
        <Text fontSize={'2xl'}>
          morph
        </Text>
      </Box>

      {/* date */}
      <Box mt={12}>
        <Text fontSize={'2xl'}>
          {new Date(blog.createdAt).toLocaleDateString()}
        </Text>
      </Box>
    </Container>
  )
}


export async function getServerSideProps(context) {
  const res = await axios.get(process.env.API_URL + `/blogs/${context.query.slug}`)
  const myBlog = res.data
  // console.log("MYBLOG<<<<<<<<<<<<<",myBlog)

  return {
    props: { myBlog }, // will be passed to the page component as props
  }
}

export default Slug