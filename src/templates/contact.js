import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/Layout"
import SEO from "../components/Seo"
import Intro from "../components/TemplateComponents/Contact/Intro"
import Testimonials from "../components/TemplateComponents/Contact/Testimonials"
import AsSeenOn from "../components/TemplateComponents/Contact/AsSeenOn"
import Form from "../components/TemplateComponents/Contact/Form"

const contact = props => {
  const { contactIntro, testimonials, asSeenOn } = props.data
  const location = props.location
  return (
    <Layout location={location}>
      <SEO title="content" />
      <Intro contactIntro={contactIntro} />
      <Form />
      <AsSeenOn asSeenOn={asSeenOn} />
      <Testimonials testimonials={testimonials} />
    </Layout>
  )
}

export const connectQuery = graphql`
  query connectPage($id: Int!) {
    contactIntro: wordpressPage(wordpress_id: { eq: $id }) {
      acf {
        _afr_cpit_image_left {
          alt_text
          localFile {
            childImageSharp {
              fluid(maxWidth: 1000) {
                ...GatsbyImageSharpFluid_withWebp
              }
            }
          }
        }
        _afr_cpit_image_right {
          alt_text
          localFile {
            childImageSharp {
              fluid(maxWidth: 1000) {
                ...GatsbyImageSharpFluid_withWebp
              }
            }
          }
        }
        _afr_cpit_title
        _afr_cpit_content
        _afr_cpi_logo {
          alt_text
          localFile {
            childImageSharp {
              fluid(maxWidth: 500) {
                ...GatsbyImageSharpFluid_withWebp
              }
            }
          }
        }
      }
    }

    testimonials: allWordpressWpTestimonials {
      edges {
        node {
          acf {
            _afr_testimonial_content
          }
        }
      }
    }

    asSeenOn: wordpressPage(wordpress_id: { eq: $id }) {
      acf {
        _afr_hoasnn_logos {
          logo {
            alt_text
            localFile {
              childImageSharp {
                fluid(maxWidth: 400) {
                  ...GatsbyImageSharpFluid_withWebp
                }
              }
            }
          }
        }
      }
    }
  }
`
export default contact
