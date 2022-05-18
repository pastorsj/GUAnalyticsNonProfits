import * as React from 'react';
import { useEffect } from 'react';
import { graphql } from 'gatsby';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import { MDXProvider } from '@mdx-js/react';
import { Heading } from '@chakra-ui/react';

import DefaultMarkdownRendererOptions from '../components/markdown-renderer';

// From React Helment
// https://github.com/nfl/react-helmet/issues/146#issuecomment-271528282
function waitForGlobal(name, timeout = 300) {
  return new Promise((resolve, reject) => {
    let waited = 0;

    function wait(interval) {
      setTimeout(() => {
        waited += interval;
        // some logic to check if script is loaded
        // usually it something global in window object
        if (window[name] !== undefined) {
          return resolve();
        }
        if (waited >= timeout * 1000) {
          return reject({ message: 'Timeout' });
        }
        wait(interval * 2);
      }, interval);
    }

    wait(30);
  });
}

const MdxSection = ({ data, location }) => {
  useEffect(() => {
    waitForGlobal('MathJax').then(() => {
      window.MathJax.Hub.Config({
        tex2jax: {
          inlineMath: [
            ['$', '$'],
            ['\\(', '\\)']
          ],
          displayMath: [
            ['$$', '$$'],
            ['[', ']']
          ],
          processEscapes: true,
          processEnvironments: true,
          skipTags: ['script', 'noscript', 'style', 'textarea', 'pre'],
          TeX: {
            equationNumbers: { autoNumber: 'AMS' },
            extensions: ['AMSmath.js', 'AMSsymbols.js']
          }
        }
      });
    });
    if (window.MathJax != null) {
      window.MathJax.Hub.Queue(['Typeset', window.MathJax.Hub]);
    }
  });

  useEffect(() => {
    if (window.MathJax != null) {
      window.MathJax.Hub.Queue(['Typeset', window.MathJax.Hub]);
    }
  });

  return (
    <>
      <Heading>{data.mdx.frontmatter.title}</Heading>
      <br />
      <MDXProvider components={DefaultMarkdownRendererOptions()}>
        <MDXRenderer>{data.mdx.body}</MDXRenderer>
      </MDXProvider>
    </>
  );
};

export const query = graphql`
  query MdxSection($id: String) {
    mdx(id: { eq: $id }) {
      frontmatter {
        title
      }
      body
    }
  }
`;

export default MdxSection;
