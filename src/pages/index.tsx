import React from 'react';
import type { HeadFC, PageProps } from 'gatsby';
import { graphql, Link } from 'gatsby';
import Container from '@material-ui/core/Container';
import GlobalNav from '../components/globalNav';

const pageStyles = {
  color: '#232129',
  padding: 96,
  fontFamily: '-apple-system, Roboto, sans-serif, serif',
};
const liStyles = {
  marginTop: 32,
  marginBottom: 164,
};

const IndexPage: React.FC<PageProps<Queries.IndexPageQuery>> = ({ data }) => {
  return (
    <main style={pageStyles}>
      <GlobalNav window={() => window} />
      <Container>
        <ul>
          {data.allMicrocmsBlogs.edges.map(({ node }) => (
            <li key={node.blogsId} style={liStyles}>
              <Link to={`/blog/${node.blogsId}`}>
                {node.blogsId} / {node.title}
              </Link>
              <span>📅: {node.publishedAt}</span>
              <span>✏️: {node.writer?.name}</span>
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
