import { Box, Button, Container, FormControl, FormLabel, Heading, Input, Textarea } from '@chakra-ui/react'
import React from 'react'

const Index = () => {
  return (
    <Container maxW={'7xl'} p="12">
      <Heading as='h2' size='2xl'>Create a new Post...</Heading>
      <Box m={12}>
      <form>
        <FormControl m={10} isRequired>
          <FormLabel htmlFor='title'>Title</FormLabel>
          <Input id='title' placeholder='Title' />
        </FormControl>
        <FormControl m={10} isRequired>
          <FormLabel htmlFor='content'>Content</FormLabel>
          <Textarea id='content' placeholder='Content' />
        </FormControl>
        <FormControl m={10} isRequired>
          <FormLabel htmlFor='meta'>Meta</FormLabel>
          <Input id='meta' placeholder='Meta' />
        </FormControl>
        <FormControl m={10} isRequired>
          <FormLabel htmlFor='metaDesc'>Meta Description</FormLabel>
          <Input id='metaDesc' placeholder='Meta Description' />
        </FormControl>
        <FormControl m={10} isRequired>
          <FormLabel htmlFor='tags'>Tags</FormLabel>
          <Input id='tags' placeholder='Tags' />
        </FormControl>
        <FormControl m={10} isRequired>
          <FormLabel htmlFor='slug'>Slug</FormLabel>
          <Input id='slug' placeholder='Slug' />
        </FormControl>
        <FormControl m={10} isRequired>
          <FormLabel htmlFor='image'>Image</FormLabel>
          <Input id='image' placeholder='Image' />
        </FormControl>
        <Button>
          Create
        </Button>
      </form>
      </Box>
    </Container>
  )
}

export default Index