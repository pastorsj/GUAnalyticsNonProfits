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
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faMedium } from '@fortawesome/free-brands-svg-icons';
import { faGlobe } from '@fortawesome/free-solid-svg-icons';

// Material Kit 2 React examples
import DefaultNavbar from 'components/creative-tim/DefaultNavbar';

// About Us page sections
import Team from 'pages/sections/team';
import Featuring from 'pages/sections/featuring';

// Images
import bgImage from 'images/bg-about-us.jpg';
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
              Work with us
            </MKTypography>
            <MKTypography variant="body1" color="white" opacity={0.8} mt={1} mb={3}>
              We are a student-run group that partners with innovative nonprofits that are changing the world, offering
              deep analytical expertise and consulting experience to help them make the world a better place.
            </MKTypography>
            <MKTypography variant="h6" color="white" mt={8} mb={1}>
              Find us on
            </MKTypography>
            <MKBox display="flex" justifyContent="center" alignItems="center">
              <MKTypography
                component="a"
                variant="body1"
                color="white"
                mr={3}
                href="https://www.linkedin.com/company/gu-analytics-for-nonprofits/"
                target="_blank"
              >
                <FontAwesomeIcon icon={faLinkedin} />
              </MKTypography>
              <MKTypography
                component="a"
                variant="body1"
                color="white"
                mr={3}
                href="https://medium.com"
                target="_blank"
              >
                <FontAwesomeIcon icon={faMedium} />
              </MKTypography>
              <MKTypography
                component="a"
                variant="body1"
                color="white"
                mr={3}
                href="https://analytics.georgetown.edu/nonprofits/"
                target="_blank"
              >
                <FontAwesomeIcon icon={faGlobe} />
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
        <Featuring />
        <Team />
      </Card>
    </ThemeProvider>
  );
}

export default AboutUs;
