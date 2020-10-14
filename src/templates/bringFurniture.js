import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/Layout"
import SEO from "../components/Seo"

import Intro from "../components/TemplateComponents/BYOF/Intro"
import Points from "../components/TemplateComponents/BYOF/Points"

const bringFurniture = props => {
  const { seoInfo, intro, points } = props.data
  const location = props.location
  return (
    <Layout location={location}>
      <SEO
        title={seoInfo.acf._swb_theme_meta_title}
        description={seoInfo.acf._swb_theme_description}
        metaImg={seoInfo.acf._swb_theme_image.localFile.publicURL}
        location={location.pathname}
      />
      <Intro intro={intro} />
      <Points points={points} />
    </Layout>
  )
}

export const byofQuery = graphql`
  query byofPage($id: Int!) {
    seoInfo: wordpressPage(wordpress_id: { eq: $id }) {
      acf {
        _swb_theme_meta_title
        _swb_theme_description
        _swb_theme_image {
          localFile {
            publicURL
          }
        }
      }
    }
    intro: wordpressPage(wordpress_id: { eq: $id }) {
      acf {
        _afr_byof_intro_title
        _afr_byof_intro_content
        _afr_byof_intro_image {
          alt_text
          localFile {
            childImageSharp {
              fluid(maxWidth: 1000) {
                ...GatsbyImageSharpFluid_withWebp
              }
            }
          }
        }
      }
    }

    points: wordpressPage(wordpress_id: { eq: $id }) {
      acf {
        _afr_byof_info_points {
          title
          content
        }
        _afr_byof_info_side_image {
          alt_text
          localFile {
            childImageSharp {
              fluid(maxWidth: 1000) {
                ...GatsbyImageSharpFluid_withWebp
              }
            }
          }
        }
      }
    }
  }
`

export default bringFurniture
