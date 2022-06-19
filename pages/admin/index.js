import { Box, Button, Container, FormControl, FormLabel, Heading, Input, Textarea } from '@chakra-ui/react'
import axios from 'axios'
import React from 'react'

const Index = () => {
  const [pic, setPic] = React.useState('')
  const cloudName = 'dipanc1';
  const pictureUpload = `https://api.cloudinary.com/v1_1/${cloudName}/image/upload`;


  const postPicture = (pics) => {
    if (pics === undefined) {
      setPic('')
    }
    if (pics.type === 'image/jpeg' || pics.type === 'image/png') {
      const formData = new FormData();
      formData.append('api_key', '835688546376544')
      formData.append('file', pics);
      formData.append('upload_preset', 'morph-blog');
      axios.post(pictureUpload, formData)
        .then(res => {
          console.log(res);
          setPic(res.data.url.toString());
        })
        .catch(err => {
          console.log(err)
        })
    } else {
      console.log('Please upload a valid image')
    }
  }



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
            <Input onChange={
              (e) => {
                postPicture(e.target.files[0])
              }
            } id='image' accept='image/*' type={'file'} placeholder='Image' />
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