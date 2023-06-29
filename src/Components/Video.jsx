import { Stack, VStack, Heading, Text, Button } from '@chakra-ui/react'
import React from 'react'
import { useState } from "react";


const Video = () => {

  const videosArr = ['https://player.vimeo.com/progressive_redirect/playback/689949818/rendition/540p?loc=external&oauth2_token_id=1027659655&signature=cf602155bf49e4e74db6f2ec9d4ecf067fbab44c4295a8950d58ecdb88910882',
'https://player.vimeo.com/progressive_redirect/playback/697718184/rendition/360p?loc=external&oauth2_token_id=1027659655&signature=26d69c3df603d083fedd663acaab4d35a33444d11033a626864cf1e578e136cf',
'https://player.vimeo.com/external/510850877.hd.mp4? s=d5e9ed9ea40ba755e28512cce6c1ad00d92506f7&profile_id=174',
  
  'https://player.vimeo.com/external/577442929.hd.mp4?s=95231c8a7fe2066ffb640204591b01a6c326b97c&profile_id=174',
  
  'https://player.vimeo.com/progressive_redirect/playback/689925384/rendition/360p?loc=external&oauth2_token_id=1027659655& signature=5a819f11298d53ccled85837342f47ea61c8f95b9aeeb0c38edab72a80e6db78',]

const [videoSrc, setVideoSrc] = useState(videosArr[0]);



  return (
    <Stack direction={['column','row']} h={'100vh'}>

    <VStack w={'full'}>
    <video
    controls
    controlsList='nodownload'
    src={videoSrc}
    style={{
      width : '80%',
      borderRadius: '16px' ,
      border: '2px solid',
      margin:'16px'
      

    }} >
    </video>

    <VStack alignItems={'flex-start'} p={'8'} w={'full'} overflowY={'auto'}>
    <Heading>
      Sample video 1
    </Heading>
    <Text >
      This is sample video for testing
    </Text>
    </VStack>
    </VStack>


    <VStack w={['full', 'xl']} alignItems={'stretch'} p={'8'} spacing={'8'} overflowY={'auto'}>
  
{
  videosArr.map((item, index)=> (
    <Button variant={'ghost'} colorScheme='purple' onClick={()=> setVideoSrc(item)}>
    Lecture {index +1}
  </Button>
  ))
}


    </VStack>
    </Stack>
  )
}

export default Video