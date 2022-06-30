import { Box, Button, Container, FormControl, FormLabel, Heading, Input, Textarea } from '@chakra-ui/react'
import axios from 'axios'
import React, { useEffect } from 'react'
import { useRouter } from 'next/router'

const Index = () => {
  const [title, setTitle] = React.useState('')
  const [content, setContent] = React.useState('')
  const [error, setError] = React.useState(false)
  const [meta, setMeta] = React.useState('')
  const [metaDescription, setMetaDescription] = React.useState('')
  const [tags, setTags] = React.useState('')
  const [slug, setSlug] = React.useState('')
  const [pic, setPic] = React.useState('')
  const cloudName = 'dipanc1';
  const pictureUpload = `https://api.cloudinary.com/v1_1/${cloudName}/image/upload`;
  const router = useRouter()

  const postPicture = (pics) => {
    if (pics === undefined) {
      setPic('')
    }
    if (pics.type === 'image/jpeg' || pics.type === 'image/png') {
      const formData = new FormData();
      formData.append('upload_preset', 'morph-blog');
      formData.append('api_key', '835688546376544')
      formData.append('file', pics);
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

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = {
      title,
      content,
      meta,
      metadesc: metaDescription,
      tags,
      slug,
      image: pic
    }
    axios.post('/api/blogs', data)
      .then(res => {
        console.log(res)
        setTitle('')
        setContent('')
        setMeta('')
        setMetaDescription('')
        setTags('')
        setSlug('')
        setPic('')
      })
      .catch(err => {
        console.log(err)
      })
  }

  useEffect(() => {
    if (!localStorage.getItem('token')) {
      router.push('/admin/login')
    }
  }, [router])




  return (
    <Container maxW={'7xl'} p="12">
      <Heading as='h2' size='2xl'>Create a new Post...</Heading>
      <Box m={12}>
        <form onSubmit={handleSubmit}>
          <FormControl m={10} isRequired>
            <FormLabel htmlFor='title'>Title</FormLabel>
            <Input id='title' placeholder='Title' onChange={
              (e) => {
                setTitle(e.target.value)
              }
            } />
          </FormControl>
          <FormControl m={10} isRequired>
            <FormLabel htmlFor='content'>Content</FormLabel>
            <Textarea id='content' placeholder='Content' onChange={
              (e) => {
                setContent(e.target.value)
              }
            } />
          </FormControl>
          <FormControl m={10} isRequired>
            <FormLabel htmlFor='meta'>Meta</FormLabel>
            <Input id='meta' placeholder='Meta' onChange={
              (e) => {
                setMeta(e.target.value)
              }
            } />
          </FormControl>
          <FormControl m={10} isRequired>
            <FormLabel htmlFor='metaDesc'>Meta Description</FormLabel>
            <Input id='metaDesc' placeholder='Meta Description' onChange={
              (e) => {
                setMetaDescription(e.target.value)
              }
            } />
          </FormControl>
          <FormControl m={10} isRequired>
            <FormLabel htmlFor='tags'>Tags</FormLabel>
            <Input id='tags' placeholder='Tags' onChange={
              (e) => {
                setTags(e.target.value)
              }
            } />
          </FormControl>
          <FormControl m={10} isRequired>
            <FormLabel htmlFor='slug'>Slug</FormLabel>
            <Input id='slug' placeholder='Slug' onChange={
              (e) => {
                setSlug(e.target.value)
              }
            } />
          </FormControl>
          <FormControl m={10} isRequired>
            <FormLabel htmlFor='image'>Image</FormLabel>
            <Input onChange={
              (e) => {
                postPicture(e.target.files[0])
              }
            } id='image' accept='image/*' type={'file'} placeholder='Image' />
          </FormControl>
          <Button type='submit'>
            Create
          </Button>
        </form>
      </Box>
    </Container>
  )
}

export default Index