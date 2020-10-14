import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/Layout"
import SEO from "../components/Seo"
import Intro from "../components/TemplateComponents/Faqs/Intro"
import Faqs from "../components/TemplateComponents/Faqs/Faqs"

const faq = props => {
  const { seoInfo, intro, faqs } = props.data
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
      <Faqs faqs={faqs} />
    </Layout>
  )
}

export const faqsQuery = graphql`
  query faqsPage($id: Int!) {
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
