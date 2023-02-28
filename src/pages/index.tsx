import React from 'react';
import type { HeadFC, PageProps } from 'gatsby';
import { graphql, Link } from 'gatsby';
import Container from '@material-ui/core/Container';
import GlobalNav from '../components/globalNav';
import Card from '../components/blog/card';

const pageStyles = {
  color: '#232129',
  padding: 96,
  fontFamily: '-apple-system, Roboto, sans-serif, serif',
};
const liStyles = {
  marginTop: 32,
  marginBottom: 64,
  listStyleType: 'none',
};

const IndexPage: React.FC<PageProps<Queries.IndexPageQuery>> = ({ data }) => {
  return (
    <main style={pageStyles}>
      <GlobalNav window={() => window} />
      <Container>
        <ul>
          {data.allMicrocmsBlogs.edges.map(({ node }) => (
            <li key={node.blogsId} style={liStyles}>
              <Card {...node} />
            </li>
          ))}
        </ul>
      </Container>
    </main>
  );
};

export default IndexPage;

export const query = graphql`
  query IndexPage {
    allMicrocmsBlogs(sort: { createdAt: DESC }) {
      edges {
        node {
          blogsId
          title
          content
          publishedAt
          createdAt
          writer {
            name
          }
        }
      }
    }
  }
`;

export const Head: HeadFC = () => <title>Home Page</title>;
