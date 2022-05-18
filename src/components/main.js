import * as React from 'react';
import { Box, Flex, Heading, Center } from '@chakra-ui/react';

const Main = ({ data }) => {
  return (
    <Flex flexDirection="column" h="90vh" backgroundColor="white">
      <Center>
        <Heading marginTop="1rem" marginBottom="3rem">
          Welcome!
        </Heading>
      </Center>
      <div>Insert information on the non profits group</div>
      <div>Insert information on past success stories</div>
      <div>Insert informatin on how to contact us!</div>
      <div>Insert information on how to join</div>
    </Flex>
  );
};

export default Main;
