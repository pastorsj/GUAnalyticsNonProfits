/*
=========================================================
* Material Kit 2 React - v2.0.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-kit-react
* Copyright 2021 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/
import * as React from 'react';

// @mui material components

import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

// Material Kit 2 React components
import MKBox from 'components/creative-tim/MKBox';
import MKTypography from 'components/creative-tim/MKTypography';
import MKButton from 'components/creative-tim/MKButton';

// Material Kit 2 React examples
import DefaultNavbar from 'components/creative-tim/DefaultNavbar';

// About Us page sections
import Information from 'pages/sections/information';
import Team from 'pages/sections/team';
import Featuring from 'pages/sections/featuring';

// Images
import bgImage from 'assets/images/bg-about-us.jpg';
import theme from 'assets/theme';
import routes from 'components/routes';

function AboutUs() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <DefaultNavbar routes={routes} sticky />
      <MKBox
        minHeight="75vh"
        width="100%"
        sx={{
          backgroundImage: ({ functions: { linearGradient, rgba }, palette: { gradients } }) =>
            `${linearGradient(rgba(gradients.dark.main, 0.6), rgba(gradients.dark.state, 0.6))}, url(${bgImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          display: 'grid',
          placeItems: 'center'
        }}
      >
        <Container>
          <Grid
            container
            item
            xs={12}
            lg={8}
            justifyContent="center"
            alignItems="center"
            flexDirection="column"
            sx={{ mx: 'auto', textAlign: 'center' }}
          >
            <MKTypography
              variant="h1"
              color="white"
              sx={({ breakpoints, typography: { size } }) => ({
                [breakpoints.down('md')]: {
                  fontSize: size['3xl']
                }
              })}
            >
              Work with an amazing design
            </MKTypography>
            <MKTypography variant="body1" color="white" opacity={0.8} mt={1} mb={3}>
              We&apos;re constantly trying to express ourselves and actualize our dreams. If you have the opportunity to
              play this game
            </MKTypography>
            <MKButton color="default" sx={{ color: ({ palette: { dark } }) => dark.main }}>
              create account
            </MKButton>
            <MKTypography variant="h6" color="white" mt={8} mb={1}>
              Find us on
            </MKTypography>
            <MKBox display="flex" justifyContent="center" alignItems="center">
              <MKTypography component="a" variant="body1" color="white" href="#" mr={3}>
                <i className="fab fa-facebook" />
              </MKTypography>
              <MKTypography component="a" variant="body1" color="white" href="#" mr={3}>
                <i className="fab fa-instagram" />
              </MKTypography>
              <MKTypography component="a" variant="body1" color="white" href="#" mr={3}>
                <i className="fab fa-twitter" />
              </MKTypography>
              <MKTypography component="a" variant="body1" color="white" href="#">
                <i className="fab fa-google-plus" />
              </MKTypography>
            </MKBox>
          </Grid>
        </Container>
      </MKBox>
      <Card
        sx={{
          p: 2,
          mx: { xs: 2, lg: 3 },
          mt: -8,
          mb: 4,
          boxShadow: ({ boxShadows: { xxl } }) => xxl
        }}
      >
        <Information />
        <Team />
        <Featuring />
      </Card>
    </ThemeProvider>
  );
}

export default AboutUs;
