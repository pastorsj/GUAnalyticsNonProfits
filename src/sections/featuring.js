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

// Material Kit 2 React examples
import DefaultCounterCard from 'components/creative-tim/Cards/CounterCards/DefaultCounterCard';

function Featuring() {
  return (
    <MKBox component="section" pt={3} pb={8}>
      <Container>
        <Grid container justifyContent="center" sx={{ textAlign: 'center' }}>
          <Grid item xs={12} md={3}>
            <DefaultCounterCard
              count={8}
              separator=","
              title="Projects"
              description="Successfully completed over the past 2 years"
            />
          </Grid>
          <Grid item xs={12} md={3}>
            <DefaultCounterCard
              count={50}
              separator=","
              suffix="+"
              title="Members"
              description="Students that are currently enrolled"
            />
          </Grid>
          <Grid item xs={12} md={3}>
            <DefaultCounterCard
              count={24}
              suffix="/7"
              title="Support"
              description="Actively engage team members that finishes on time"
            />
          </Grid>
        </Grid>
      </Container>
    </MKBox>
  );
}

export default Featuring;
