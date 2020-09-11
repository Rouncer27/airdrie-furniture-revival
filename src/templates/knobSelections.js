import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/Layout"
import SEO from "../components/Seo"

import Intro from "../components/TemplateComponents/Knob/Intro"
import Knobs from "../components/TemplateComponents/Knob/Knobs"

const knobSelections = props => {
  const { intro, knobs } = props.data
  const location = props.location
  return (
    <Layout>
      <SEO title="Knob Selections" />
      <Intro intro={intro} />
      <Knobs knobs={knobs} />
    </Layout>
  )
}

export const knobQuery = graphql`
  query knobPage($id: Int!) {
    intro: wordpressPage(wordpress_id: { eq: $id }) {
      acf {
        _afr_knob_intro_title
        _afr_knob_intro_content
        _afr_knob_intro_image {
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

    knobs: wordpressPage(wordpress_id: { eq: $id }) {
      acf {
        _afr_knob_knobs {
          name
          image {
            alt_text
            localFile {
              childImageSharp {
                fluid(maxWidth: 600) {
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

export default knobSelections
