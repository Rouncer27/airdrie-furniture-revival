import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/Layout"
import SEO from "../components/Seo"

import Intro from "../components/TemplateComponents/Gallery/Intro"
import GalleriesList from "../components/TemplateComponents/Gallery/GalleriesList"

const gallery = props => {
  const { intro, galleries } = props.data
  const location = props.location
  return (
    <Layout location={location}>
      <SEO title="Gallery Page" />
      <Intro intro={intro} />
      <GalleriesList galleries={galleries} />
    </Layout>
  )
}

export const galleryQuery = graphql`
  query galleryPage($id: Int!) {
    intro: wordpressPage(wordpress_id: { eq: $id }) {
      acf {
        _afr_gall_intro_title
        _afr_gall_intro_content
        _afr_gall_intro_image {
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

    galleries: allWordpressWpGallery {
      edges {
        node {
          slug
          title
          wordpress_id
          acf {
            _afr_gall_single_image {
              localFile {
                childImageSharp {
                  fluid {
                    ...GatsbyImageSharpFluid_withWebp
                  }
                }
              }
            }
          }
        }
      }
    }
  }
`

export default gallery
