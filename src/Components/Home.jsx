import { Box, Image, Heading, Container, Stack, Text } from '@chakra-ui/react';
import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

import img1 from '../assets/itadori.jpg';
import img2 from '../assets/1081931.jpg';
import img3 from '../assets/1081933.jpg';
import img4 from '../assets/demon-slayer-4k-tanjiro-blue-2x7rpv9m081246un.jpg';
import img5 from '../assets/pngwing.com.png';



const HeadOptions = {
  pos: 'absolute',
  left: '50%',
  top: '50%',
  transform: "translate(-50%,-50%)",
  p:'4',
  size:'xl'
}


const Home = () => {
  return (
    <Box>
      <MyCarousel />

    <Container maxW={'container.xl'} minH={'100vh'} p='16'>
      <Heading textTransform={'uppercase'}
      py='2'
      borderBottom={'2px solid'}
      w={'fit-content'}
      m="auto"
      >
        Services
      </Heading>

      <Stack
      h='full'
      p={'4'}
      alignItems={'center'}
      direction={['column', 'row']}
      >
        <Image src={img5} h={['40', '400']} filter={'hue-rotate(-160deg)'} />
     

      <Text letterSpacing={'widest'} lineHeight={'180%'} p={['4','16']} textAlign={'center'}>
      Welcome to OnVid, the premier video website service designed to captivate, inspire, and entertain audiences worldwide. With our cutting-edge platform, we empower creators to share their vision through stunning videos, reaching millions of viewers across the globe.
      Immerse yourself in a diverse collection of high-quality videos that span a wide range of genres and topics. From gripping documentaries and thrilling short films to educational tutorials and heartwarming animations, Visionary Videos has it all. Our carefully curated library guarantees an unforgettable viewing experience for every taste and interest.
      At Visionary Videos, we believe in supporting and celebrating creative talent. We provide a dedicated platform for artists, filmmakers, educators, and storytellers to showcase their work to a global audience. Our robust suite of tools and features enables creators to upload, manage, and promote their videos efficiently, fostering an environment that encourages innovation and collaboration.

      </Text>
 </Stack>
    </Container>

    </Box>
  );
};

const MyCarousel = () => (
  <Carousel 
  autoPlay 
  infiniteLoop 
  interval={2000} 
  showStatus={false}
  showThumbs={false}
  showArrows={false}
  >

<Box w='full' h={'100vh'}>
<Image src={img1} w={'full'} h={'full'} objectFit={'cover'}/>
<Heading bgColor={'blackAlpha.300'} color={'white'} {...HeadOptions}>
  Watch Anime
</Heading>
</Box>

<Box w='full' h={'100vh'}>
<Image src={img2} w={'full'} h={'full'} objectFit={'cover'} />
<Heading bgColor={'whiteAlpha.600'} color={'black'} {...HeadOptions}>
  Watch Games
</Heading>
</Box>

<Box w='full' h={'100vh'}>
<Image src={img3} w={'full'} h={'full'} objectFit={'cover'} />

</Box>

<Box w='full' h={'100vh'}>
<Image src={img4} w={'full'} h={'full'} objectFit={'cover'} />

</Box>


  </Carousel>
  );

export default Home