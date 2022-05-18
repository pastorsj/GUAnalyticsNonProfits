import * as React from 'react';
import { Flex, Spacer, Heading, Center, ButtonGroup, Button } from '@chakra-ui/react';
import { navigate } from 'gatsby';
import SEO from './seo';

const Layout = ({ pageTitle, children }) => {
  return (
    <div>
      <SEO></SEO>
      <header>
        <Flex
          h="10vh"
          backgroundImage="https://davidbalyeat.com/wp-content/uploads/california-scripps-pier-la-jolla-panoramic-san-diego-black-and-white-high-defintion-hd-professional-landscape-photography.jpg"
          backgroundSize="100%"
        >
          <Center marginLeft="2rem">
            <a href="https://www.sampastoriza.com">
              <Heading textAlign="left" fontSize="2.25rem" fontWeight="normal" fontFamily="serif">
                Test 2
              </Heading>
            </a>
          </Center>
          <Spacer />
          <Center>Test</Center>
        </Flex>
      </header>
      <main>{children}</main>
    </div>
  );
};

export default Layout;
