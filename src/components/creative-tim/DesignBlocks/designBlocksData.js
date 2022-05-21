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

import fpLogo from 'images/foreign-policy-logo.png';
import hriLogo from 'images/hri-logo.png';
import wwfLogo from 'images/wwf-logo.png';
import negotiationLogo from 'images/negotiation-logo.png';
import smithsonianLogo from 'images/smithsonian-logo.png';

const designBlock = [
  {
    title: 'Success Stories',
    description: 'A sample of nonprofits we have worked with since the beginning.',
    items: [
      {
        image: smithsonianLogo,
        title: 'Effects of Oil Drilling on Amazon Biodiversity',
        description:
          'Worked closely with Smithsonian Institution scientists to analyze what effects oil drilling in the Amazon Rainforest has upon local amphibians',
        route: '/projects/smithsonian-amazon'
      },
      {
        image: hriLogo,
        title: 'Mesoamerican Coral: Health & Resilience',
        description:
          'Collaborated with Healthy Reefs for Healthy People and The National Museum of Natural History to gain new insight into the health of different coral species',
        route: '/projects/hri-coral'
      },
      {
        image: negotiationLogo,
        title: 'Measuring the Impact of Skill-Building',
        description:
          'Embedded several students in Negotiation Works’ Data Analytics team, who helped them measure the impact of hosting classes to empower women to use negotiation skills to resolve disputes',
        route: '/projects/negotiation-skill'
      },
      {
        image: wwfLogo,
        title: 'Project with the WWF',
        description: 'Insert short description here',
        route: '/projects/wwf'
      },
      {
        image: fpLogo,
        title: 'Project with the FP',
        description: 'Insert short description here',
        route: '/projects/fp'
      }
    ]
  }
];

export default designBlock;
