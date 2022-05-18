import { extendTheme } from '@chakra-ui/react';

const Theme = extendTheme({
  styles: {
    global: {
      body: {
        bg: '#FFFFFF',
        fontFamily: 'serif'
      }
    }
  }
});

export default Theme;
