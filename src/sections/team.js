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

// Material Kit 2 React components
import MKBox from 'components/creative-tim/MKBox';
import MKTypography from 'components/creative-tim/MKTypography';

// Material Kit 2 React examples
import HorizontalTeamCard from 'components/creative-tim/Cards/TeamCards/HorizontalTeamCard';

// Images
import president from 'images/president-picture.jpg';
import vicePresident from 'images/vp-picture.jpg';
import facultyAdvisor from 'images/faculty-picture.jpg';
import designer from 'images/designer-picture.jpg';

function Team() {
  return (
    <MKBox
      component="section"
      variant="gradient"
      bgColor="dark"
      position="relative"
      py={6}
      px={{ xs: 2, lg: 0 }}
      mx={-2}
    >
      <Container>
        <Grid container>
          <Grid item xs={12} md={8} sx={{ mb: 6 }}>
            <MKTypography variant="h3" color="white">
              The Leadership Team
            </MKTypography>
            <MKTypography variant="body2" color="white" opacity={0.8}>
              Insert something about the leadership team here.
            </MKTypography>
          </Grid>
        </Grid>
        <Grid container spacing={3}>
          <Grid item xs={12} lg={6}>
            <MKBox mb={1}>
              <HorizontalTeamCard
                image={president}
                name="Daniel Cisek"
                position={{ color: 'info', label: 'President' }}
                description="Insert information about Dan"
              />
            </MKBox>
          </Grid>
          <Grid item xs={12} lg={6}>
            <MKBox mb={1}>
              <HorizontalTeamCard
                image={vicePresident}
                name="Jacob McIntosh"
                position={{ color: 'info', label: 'Vice President' }}
                description="Insert information about Mac"
              />
            </MKBox>
          </Grid>
          <Grid item xs={12} lg={6}>
            <MKBox mb={{ xs: 1, lg: 0 }}>
              <HorizontalTeamCard
                image={facultyAdvisor}
                name="Nakul Padalkar, PhD"
                position={{ color: 'info', label: 'Faculty Advisor' }}
                description="Insert information about Nakul"
              />
            </MKBox>
          </Grid>
          <Grid item xs={12} lg={6}>
            <MKBox mb={{ xs: 1, lg: 0 }}>
              <HorizontalTeamCard
                image={designer}
                name="Sam Pastoriza"
                position={{ color: 'info', label: 'Designer' }}
                description="Insert information about Sam"
              />
            </MKBox>
          </Grid>
        </Grid>
      </Container>
    </MKBox>
  );
}

export default Team;
