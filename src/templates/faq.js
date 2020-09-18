import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/Layout"
import SEO from "../components/Seo"
import Intro from "../components/TemplateComponents/Faqs/Intro"
import Faqs from "../components/TemplateComponents/Faqs/Faqs"

const faq = props => {
  const { intro, faqs } = props.data
  const location = props.location
  return (
    <Layout location={location}>
      <SEO title="Bring you own furniture" />
      <Intro intro={intro} />
      <Faqs faqs={faqs} />
    </Layout>
  )
}

export const faqsQuery = graphql`
  query faqsPage($id: Int!) {
    intro: wordpressPage(wordpress_id: { eq: $id }) {
      acf {
        _afr_faqs_intro_title
        _afr_faqs_intro_content
        _afr_faqs_intro_image {
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

    faqs: wordpressPage(wordpress_id: { eq: $id }) {
      acf {
        _afr_faqs_info_points {
          question
          answer
        }
        _afr_faqs_info_side_image {
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

export default faq
