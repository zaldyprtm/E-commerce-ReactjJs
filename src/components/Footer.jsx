import React from 'react';
import { Box, Container, Stack, Text, Link, Divider, IconButton, useColorModeValue } from "@chakra-ui/react";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <>
    <div className='mt-96  rounded-xl bottom-0'>
        
    <Box
      bg={useColorModeValue('gray.100', 'gray.900')}
      color={useColorModeValue('gray.700', 'gray.200')}
      >
      <Container
        as={Stack}
        maxW={'6xl'}
        py={4}
        direction={{ base: 'column', md: 'row' }}
        spacing={4}
        justify={{ base: 'center', md: 'space-between' }}
        align={{ base: 'center', md: 'center' }}
        >
        <Text>© 2024 Your Company. All rights reserved</Text>
        <Stack direction={'row'} spacing={6}>
          <Link href={'#'}>Home</Link>
          <Link href={'#'}>About</Link>
          <Link href={'#'}>Contact</Link>
        </Stack>
        <Stack direction={'row'} spacing={6}>
          <IconButton
            as={Link}
            href="https://github.com"
            aria-label="GitHub"
            icon={<FaGithub />}
            size="lg"
            isRound
            />
          <IconButton
            as={Link}
            href="https://linkedin.com"
            aria-label="LinkedIn"
            icon={<FaLinkedin />}
            size="lg"
            isRound
            />
          <IconButton
            as={Link}
            href="https://twitter.com"
            aria-label="Twitter"
            icon={<FaTwitter />}
            size="lg"
            isRound
            />
        </Stack>
      </Container>
      <Divider />
      <Container
        as={Stack}
        maxW={'6xl'}
        py={4}
        direction={{ base: 'column', md: 'row' }}
        spacing={4}
        justify={{ base: 'center', md: 'space-between' }}
        align={{ base: 'center', md: 'center' }}
        >
        <Text>Privacy Policy</Text>
        <Text>Terms of Service</Text>
      </Container>
    </Box>
            </div>
          </>
  );
};

export default Footer;
