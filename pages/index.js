import Head from 'next/head'
// import Image from 'next/image'
import Link from 'next/link'
import {
  Box,
  Heading,
  Text,
  Image,
  useColorModeValue,
  Container,
  Stack,
  Button,
  Flex,
  HStack,
  Tag,
} from '@chakra-ui/react';
// import BlogTags from './components/BlogTags';
import axios from 'axios';
import { useState } from 'react';


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


export default function Home(props) {

  const [blogs, setBlogs] = useState(props.allBlogs);


  return (
    <Box>
      <Head>
        <title>morph</title>
        <meta name="description" content="morph" />
        <meta name="keywords" content="blog, blogs, morph blog, morph blogs" />
        <link rel="icon" href="/headerImg.jpg" />
      </Head>

      <Container maxW={'7xl'} p={12}>
        <Stack
          textAlign={'center'}
          align={'center'}
          spacing={{ base: 8, md: 10 }}
          pb={{ base: 20, md: 28 }}
        >
          <Heading
            fontWeight={600}
            fontSize={{ base: '3xl', sm: '4xl', md: '6xl' }}
            lineHeight={'110%'}>
            mor
            <Text as={'span'} color={'orange.400'}>
              ph
            </Text>
          </Heading>
          <Text color={'gray.500'} maxW={'3xl'}>
            I am Full Stack Developer with experience in building Web, Mobile and Desktop applications. I have worked on various projects that include building Web Apps, Mobile Apps, Desktop Apps, Chrome Extensions, Browser Extensions, Web Scrapers, Automation Bots, APIs, Web Servers, SPAs, PWAs, etc.
          </Text>
          <Stack spacing={6} direction={'row'}>
            <Link href={`/blogs`} passHref>
              <Button
                rounded={'full'}
                px={6}
                colorScheme={'orange'}
                bg={'orange.400'}
                _hover={{ bg: 'orange.500' }}>
                Read Blogs
              </Button>
            </Link>
            <Link href={`/contact`} passHref>
              <Button rounded={'full'} px={6}>
                Contact
              </Button>
            </Link>
          </Stack>
          <Flex w={'full'}>
            <Image
              src={'/blog.jpg'}
              alt={'morph logo'}
              rounded={'full'}
              height={[
                '100%',
                '100%',
                '100vh',
              ]}
              width={'100vw'}
              objectFit={'cover'}
              objectPosition={'center'}
              mx={'auto'}
              mb={6}

            />
          </Flex>
        </Stack>

        <Heading as="h1">Stories by morph</Heading>
        {blogs.map((blog) => (
          <>
            <Box
              key={blog._id}
              marginTop={{ base: '1', sm: '5' }}
              display="flex"
              flexDirection={{ base: 'column', sm: 'row' }}
              justifyContent="space-between">
              <Box
                display="flex"
                flex="1"
                marginRight="3"
                position="relative"
                alignItems="center">

                <Box
                  width={{ base: '100%', sm: '85%' }}
                  zIndex="2"
                  marginLeft={{ base: '0', sm: '5%' }}
                  marginTop="5%">
                  <Link href={`/blogpost/${blog.slug}`} passHref>
                    <Image
                      borderRadius="lg"
                      src={
                        blog.image
                      }
                      alt={blog.title}
                      objectFit="contain"
                    />
                  </Link>
                </Box>

                <Box zIndex="1" width="100%" position="absolute" height="100%">
                  <Box
                    // eslint-disable-next-line react-hooks/rules-of-hooks
                    bgGradient={useColorModeValue(
                      'radial(orange.600 1px, transparent 1px)',
                      'radial(orange.300 1px, transparent 1px)'
                    )}
                    backgroundSize="20px 20px"
                    opacity="0.4"
                    height="100%"
                  />
                </Box>
              </Box>
              <Box
                display="flex"
                flex="1"
                flexDirection="column"
                justifyContent="center"
                marginTop={{ base: '3', sm: '0' }}>
                <BlogTags tags={blog.tags.map(item => item)} />
                <Heading marginTop="1">
                  <Link href={`/blogpost/${blog.slug}`} passHref>
                    {blog.title.slice(0, 50)}
                  </Link>
                </Heading>
                <Text
                  as="p"
                  marginTop="2"
                  // eslint-disable-next-line react-hooks/rules-of-hooks
                  color={useColorModeValue('gray.700', 'gray.200')}
                  fontSize="lg">
                  {blog.content.slice(0, 100)}...
                </Text>
                <BlogAuthor name="morph" date={new Date(blog.createdAt)} />
              </Box>
            </Box>
          </>
        ))}

      </Container>
    </Box>
  )

}

export async function getServerSideProps(context) {

  const res = await axios.get(process.env.API_URL + '/blogs')
  const allBlogs = res.data?.slice(0, 3)

  return {
    props: { allBlogs }, // will be passed to the page component as props
  }
}