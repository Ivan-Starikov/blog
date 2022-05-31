import React from 'react';
import { graphql } from 'gatsby';

import Layout from '../component/Layout/Layout';
import Title from '../component/Title/Title';
import Date from '../component/Date/Date';

const Post = ({ data }) => {

  const { markdownRemark } = data;
  const { frontmatter, html} = markdownRemark;

  return (
    <Layout>
      <Title title={frontmatter.title}/>
      <Date date={frontmatter.date} />
      <div dangerouslySetInnerHTML={{ __html: html }}></div>
    </Layout>
  );
}

export const pageQuery = graphql`
  query BlogPostByPath($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        path
        title
      }
    }
  }
`

export default Post;