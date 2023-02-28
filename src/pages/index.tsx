import React from 'react';
import type { HeadFC, PageProps } from 'gatsby';
import { graphql, Link } from 'gatsby';
import Button from '@material-ui/core/Button';

const pageStyles = {
  color: '#232129',
  padding: 96,
  fontFamily: '-apple-system, Roboto, sans-serif, serif',
};
const headingStyles = {
  marginTop: 0,
  marginBottom: 64,
  maxWidth: 320,
};

const IndexPage: React.FC<PageProps<Queries.IndexPageQuery>> = ({ data }) => {
  return (
    <main style={pageStyles}>
      <h1 style={headingStyles}>Congratulations</h1>
      <Button variant="text">Text</Button>
      <Button variant="contained">Contained</Button>
      <Button variant="outlined">Outlined</Button>
      <ul>
        {data.allMicrocmsBlogs.edges.map(({ node }) => (
          <li key={node.blogsId}>
            <Link to={`/blog/${node.blogsId}`}>
              {node.blogsId} / {node.title}
            </Link>
            <span>📅: {node.publishedAt}</span>
            <span>✏️: {node.writer?.name}</span>
          </li>
        ))}
      </ul>
      <p>
        <Link to={`/blogs/`}>一覧</Link>
      </p>
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
