import * as React from 'react';

// @mui material components

import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faMedium } from '@fortawesome/free-brands-svg-icons';
import { faGlobe } from '@fortawesome/free-solid-svg-icons';

// Material Kit 2 React components
import MKBox from 'components/creative-tim/MKBox';
import MKTypography from 'components/creative-tim/MKTypography';

// Material Kit 2 React examples
import DefaultNavbar from 'components/creative-tim/DefaultNavbar';
import DesignBlocks from 'components/creative-tim/DesignBlocks/DesignBlocks';

// Images
import bgImage from 'assets/images/bg-main.jpg';
import theme from 'assets/theme';
import routes from 'components/routes';

const IndexPage = () => {
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
              GU Analytics for Nonprofits
            </MKTypography>
            <MKTypography variant="body1" color="white" opacity={0.8} mt={1} mb={3}>
              We provide pro-bono analytics consulting services to nonprofit organizations through semester-long or
              year-long projects.
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
        <MKTypography variant="h3" m={2}>
          Who we are
        </MKTypography>
        <MKTypography variant="body2" m={2}>
          GU Analytics for Nonprofits is a Georgetown University student group founded by MS Data Science and Analytics
          students, and open to all Georgetown graduate students. GU Analytics for Nonprofits provides pro-bono
          analytics consulting services to nonprofit organizations through semester-long or year-long projects. The
          group helps students gain real-world experience with data analysis, improve their hard and soft skills, and
          build their professional network.
        </MKTypography>

        <MKTypography variant="body2" m={2}>
          Our organization has around 50 active members. Every semester, we collaborate with various non-governmental
          organizations (NGO) such as Smithsonian Institution, WWF and Foreign Policy for America and engage more than
          20 students in real-world projects. We also hold workshops to help students to prepare for their careers.
          Students come from diverse academic backgrounds including Data Science and Analytics, Public Policy, Economics
          etc. GU Analytics for Nonprofits has received plenty of positive feedback from the NGOs we have collaborated
          with.
        </MKTypography>
        <DesignBlocks />
      </Card>
    </ThemeProvider>
  );
};

export default IndexPage;
