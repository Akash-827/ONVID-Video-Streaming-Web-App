import { Box, Stack, VStack, HStack, Input, Heading, Button, Text} from '@chakra-ui/react'
import React from 'react'
import {AiOutlineSend }from 'react-icons/ai'

const Footer = () => {
  return (
    <Box bgColor={'blackAlpha.900'} minH={'40'} p={'16'} color={'white'}>

<Stack direction={['column', 'row']}>

<VStack alignItems={'stretch'} w={'full'}>
<Heading size={'md'} textTransform={'uppercase'} textAlign={['center','left']}>
  Subscribe for more update
</Heading>
<HStack borderBottom={'2px solid'} py={'2'}>
  <Input type="email" placeholder='Enter Email' border={'none'} borderRadius={'none'} outline={'none'} focusBorderColor='none' />
  <Button p={'0'} colorScheme={'purple'} variant={'ghost'} borderRadius={'0 20px 20px 0'} >
    <AiOutlineSend />
  </Button>
</HStack>
</VStack>


<VStack w={'full'}
borderLeft={['none', '1px solid white']}
borderRight={['none', '1px solid white']}>

<Heading textTransform={'uppercase'} alignItems={'center'}>
  onvid
</Heading>
<Text>All rights reserved </Text>
</VStack>

<VStack w={'full'}>
 <Heading textTransform={'uppercase'} size={'md'}>
  social media
 </Heading>
<Button variant={'link'} colorScheme='white'>
  <a target='blank' href="https://youtube.com/">Youtube</a>
</Button>

<Button variant={'link'} colorScheme='white'>
  <a target='blank' href="https://instagram.com/">Instagram</a>
</Button>

<Button variant={'link'} colorScheme='white'>
  <a target='blank' href="https://twitter.com/">Twitter</a>
</Button>
</VStack>
</Stack>

    </Box>
  )
}

export default Footer