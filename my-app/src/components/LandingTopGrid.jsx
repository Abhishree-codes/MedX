import { Box, SimpleGrid, Icon, Text, Stack, Flex } from '@chakra-ui/react';

import {BiFirstAid} from 'react-icons/bi'



export default function TopGrid() {
  return (
    <Box p={4} zIndex={25} mt={{
      "md":"-100px"
    }}>
      <SimpleGrid columns={{ base: 1, md: 3 }} spacing={10}>
      <Stack boxShadow="rgba(149, 157, 165, 0.2) 0px 8px 24px" height={"300px"} padding={5} bg={"white"} align="center" justify={'space-evenly'}>
      <BiFirstAid size={50} color= '#13d6a8' />
                <Text  fontSize='2xl' fontWeight={"semibold"}>Qualified Doctors</Text>
                <Text color={"#a1a7a9"}>Loren Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took. </Text>
                <Text color={'#13d6a8'} fontWeight={"bold"}>Read More</Text>
    </Stack>
    <Stack boxShadow="rgba(149, 157, 165, 0.2) 0px 8px 24px" height={"300px"} padding={5} bg={"white"} align="center" justify={'space-evenly'}>
      <BiFirstAid size={50} color= '#13d6a8' />
                <Text  fontSize='2xl' fontWeight={"semibold"}>24 Hours Services</Text>
                <Text color={"#a1a7a9"}>Loren Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took. </Text>
                <Text color={'#13d6a8'} fontWeight={"bold"}>Read More</Text>
    </Stack>
    <Stack boxShadow="rgba(149, 157, 165, 0.2) 0px 8px 24px" height={"300px"} padding={5} bg={"white"} align="center" justify={'space-evenly'}>
      <BiFirstAid size={50} color= '#13d6a8' />
                <Text  fontSize='2xl' fontWeight={"semibold"}>Better Treatment</Text>
                <Text color={"#a1a7a9"}>Loren Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took. </Text>
                <Text color={'#13d6a8'} fontWeight={"bold"}>Read More</Text>
    </Stack>
      </SimpleGrid>
    </Box>
  );
}