import { HStack, Image, Text } from '@chakra-ui/react'
import React from 'react'

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

export default BlogAuthor