import * as React from 'react';
import {
  Text,
  Code,
  Divider,
  Link,
  ListItem,
  Heading,
  Image,
  OrderedList,
  UnorderedList,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td
} from '@chakra-ui/react';
import deepmerge from 'deepmerge';

function getCoreProps(props) {
  return props['data-sourcepos'] ? { 'data-sourcepos': props['data-sourcepos'] } : {};
}

export const defaults = {
  p: (props) => {
    const { children } = props;
    return <Text mb={2}>{children}</Text>;
  },
  em: (props) => {
    const { children } = props;
    return <Text as="em">{children}</Text>;
  },
  blockquote: (props) => {
    const { children } = props;
    return (
      <Code as="blockquote" p={2}>
        {children}
      </Code>
    );
  },
  code: (props) => {
    const { children, className } = props;

    return (
      <pre className={className}>
        <code className={className} d="block" w="full" p={2}>
          {children}
        </code>
      </pre>
    );
  },
  del: (props) => {
    const { children } = props;
    return <Text as="del">{children}</Text>;
  },
  hr: (props) => {
    return <Divider />;
  },
  a: Link,
  img: Image,
  text: (props) => {
    const { children } = props;
    return <Text as="span">{children}</Text>;
  },
  ul: (props) => {
    const { children } = props;
    const attrs = getCoreProps(props);
    const Element = UnorderedList;
    return (
      <Element spacing={2} as={'ul'} pl={4} {...attrs}>
        {children}
      </Element>
    );
  },
  ol: (props) => {
    const { children } = props;
    const attrs = getCoreProps(props);
    const Element = OrderedList;
    return (
      <Element spacing={2} as={'ol'} pl={4} {...attrs}>
        {children}
      </Element>
    );
  },
  li: (props) => {
    const { children } = props;
    return <ListItem {...getCoreProps(props)}>{children}</ListItem>;
  },
  heading: function (props) {
    const { children } = props;
    const sizes = ['2xl', 'xl', 'lg', 'md', 'sm', 'xs'];
    return (
      <Heading my={4} as={`h${this.level}`} size={sizes[`${this.level - 1}`]} {...getCoreProps(props)}>
        {children}
      </Heading>
    );
  },
  pre: (props) => {
    const { children } = props;
    return <div className="gatsby-highlight">{children}</div>;
  },
  table: Table,
  thead: Thead,
  tbody: Tbody,
  tr: Tr,
  td: Td,
  th: Th
};

function DefaultMarkdownRendererOptions(theme, merge = true) {
  const elements = {
    p: defaults.p,
    em: defaults.em,
    blockquote: defaults.blockquote,
    code: defaults.code,
    del: defaults.del,
    hr: defaults.hr,
    a: defaults.a,
    img: defaults.img,
    text: defaults.text,
    ul: defaults.ul,
    ol: defaults.ol,
    li: defaults.li,
    h1: defaults.heading.bind({ level: 1 }),
    h2: defaults.heading.bind({ level: 2 }),
    h3: defaults.heading.bind({ level: 3 }),
    h4: defaults.heading.bind({ level: 4 }),
    h5: defaults.heading.bind({ level: 5 }),
    h6: defaults.heading.bind({ level: 6 }),
    pre: defaults.pre,
    table: defaults.table,
    thead: defaults.thead,
    tbody: defaults.tbody,
    tr: defaults.tr,
    td: defaults.td,
    th: defaults.th
  };

  if (theme && merge) {
    return deepmerge(elements, theme);
  }

  return elements;
}

export default DefaultMarkdownRendererOptions;
