import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/Layout"
import SEO from "../components/Seo"

import Intro from "../components/TemplateComponents/HowItWorks/Intro"
import Steps from "../components/TemplateComponents/HowItWorks/Steps"
import BringOwn from "../components/TemplateComponents/HowItWorks/BringOwn"

const howItWorks = props => {
  const { howItWorksIntro, steps } = props.data
  const location = props.location
  return (
    <Layout>
      <SEO title="Home" />
      <Intro intro={howItWorksIntro} />
      <Steps steps={steps} />
      <BringOwn />
    </Layout>
  )
}

export const howItWorksQuery = graphql`
  query howItWorksPage($id: Int!) {
    howItWorksIntro: wordpressPage(wordpress_id: { eq: $id }) {
      acf {
        _afr_htw_intro_image_centre {
          alt_text
          localFile {
            childImageSharp {
              fluid(maxWidth: 1000) {
                ...GatsbyImageSharpFluid_withWebp
              }
            }
          }
        }
        _afr_htw_intro_image_right {
          alt_text
          localFile {
            childImageSharp {
              fluid(maxWidth: 1000) {
                ...GatsbyImageSharpFluid_withWebp
              }
            }
          }
        }
        _afr_htw_intro_content
      }
    }

    steps: wordpressPage(wordpress_id: { eq: $id }) {
      acf {
        _afr_htw_steps {
          title
          content
          icon {
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
  }
`

export default howItWorks
