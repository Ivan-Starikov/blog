import React from 'react';
import { graphql } from 'gatsby';

import { Title } from '../component/Title/Title';
import { Date } from '../component/Date/Date';

const Template = ({ data }) => {

  const { markdownRemark } = data 
  const { frontmatter, html } = markdownRemark

  return (
    <>
      <Title title={frontmatter?.title} />
      <Date date={frontmatter?.date} />
      <div
        dangerouslySetInnerHTML={{ __html: html }}
      />
    </>
  )
};

export const pageQuery = graphql`
  query($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        slug
        title
      }
    }
  }
`

export default Template;
