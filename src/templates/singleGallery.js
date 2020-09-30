import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/Layout"
import SEO from "../components/Seo"

import Gallery from "../components/TemplateComponents/SingleGallery/Gallery"

const singleGallery = props => {
  const { gallery } = props.data
  const location = props.location
  return (
    <Layout location={location}>
      <SEO title="Single Gallery" />
      <Gallery gallery={gallery} />
    </Layout>
  )
}

export const singleGalleryQuery = graphql`
  query singleGalleryPage($id: Int!) {
    gallery: wordpressWpGallery(wordpress_id: { eq: $id }) {
      title
      acf {
        _afr_gall_single_gallery {
          alt_text
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
`

export default singleGallery
