import { graphql, Link, navigate, PageProps } from 'gatsby';
import React from 'react';
import { formatDate } from '../utils/date';

type PageContext = {
  limit: number;
  offset: number;
  totalCount: number;
  currentPageNum: number;
  totalPagesCount: number;
};

const BlogsPage: React.FC<PageProps<Queries.BlogsPageQuery, PageContext>> = ({
  data,
  pageContext: { limit, offset, totalCount, currentPageNum, totalPagesCount },
  location,
}) => {
  const { allMicrocmsBlogs } = data;
  return (
    <main>
      <h1>ブログ一覧</h1>
      <p>
        {totalCount} 件中 {offset + 1} 件目から {limit} 件表示
      </p>
      <ul>
        {allMicrocmsBlogs.nodes.map(node => (
          <li key={node.blogsId}>
            <Link to={`/blog/${node.blogsId}/`}>
              {node.title}【公開日：{formatDate(node.publishedAt!)}】
            </Link>
          </li>
        ))}
      </ul>

      <select
        onChange={e => {
          navigate(
            e.target.value === '1'
              ? '/blogs/'
              : `/blogs/page/${e.target.value}/`
          );
        }}
      >
        {new Array(totalPagesCount).fill('').map((_, i) => {
          const pageNum = i + 1;
          return (
            <option
              value={pageNum}
              key={i}
              selected={pageNum === currentPageNum}
            >
              {pageNum} ページ目
            </option>
          );
        })}
      </select>
    </main>
  );
};

export default BlogsPage;

export const query = graphql`
  query BlogsPage($limit: Int!, $offset: Int!) {
    allMicrocmsBlogs(
      limit: $limit
      skip: $offset
      sort: { publishedAt: DESC }
    ) {
      nodes {
        blogsId
        title
        publishedAt
        revisedAt
      }
    }
  }
`;
