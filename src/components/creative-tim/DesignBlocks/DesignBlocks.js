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
import MKBadge from 'components/creative-tim/MKBadge';
import MKTypography from 'components/creative-tim/MKTypography';

// Presentation page components
import CenteredBlogCard from 'components/creative-tim/Cards/BlogCards/CenteredBlogCard';

// Data
import data from './designBlocksData';

function DesignBlocks() {
  const renderData = data.map(({ title, description, items }) => (
    <Grid container spacing={3} sx={{ mb: 10 }} key={title}>
      <Grid item xs={12} lg={3}>
        <MKBox position="sticky" top="100px" pb={{ xs: 2, lg: 6 }}>
          <MKTypography variant="h3" fontWeight="bold" mb={1}>
            {title}
          </MKTypography>
          <MKTypography variant="body2" fontWeight="regular" color="secondary" mb={1} pr={2}>
            {description}
          </MKTypography>
        </MKBox>
      </Grid>
      <Grid item xs={12} lg={9}>
        <Grid container spacing={3}>
          {items.map(({ image, title, description, route }) => (
            <Grid item xs={12} md={4} sx={{ mb: 2 }} key={title}>
              <CenteredBlogCard
                image={image}
                title={title}
                description={description}
                action={{
                  type: 'internal',
                  route: route,
                  color: 'info',
                  label: 'Learn More'
                }}
              />
            </Grid>
          ))}
        </Grid>
      </Grid>
    </Grid>
  ));

  return (
    <MKBox component="section" my={6} py={6}>
      <Container>
        <Grid
          container
          item
          xs={12}
          lg={6}
          flexDirection="column"
          alignItems="center"
          sx={{ textAlign: 'center', my: 6, mx: 'auto', px: 0.75 }}
        >
          <MKBadge variant="contained" color="info" badgeContent="Infinite combinations" container sx={{ mb: 2 }} />
          <MKTypography variant="h2" fontWeight="bold">
            Success S
          </MKTypography>
          <MKTypography variant="body1" color="text">
            We have created multiple options for you to put together and customise into pixel perfect pages.
          </MKTypography>
        </Grid>
      </Container>
      <Container sx={{ mt: 6 }}>{renderData}</Container>
    </MKBox>
  );
}

export default DesignBlocks;
