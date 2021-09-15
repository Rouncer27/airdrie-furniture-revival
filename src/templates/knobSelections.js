import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/Layout"
// import SEO from "../components/Seo"

// import Intro from "../components/TemplateComponents/Knob/Intro"
// import Knobs from "../components/TemplateComponents/Knob/Knobs"

const knobSelections = props => {
  // const { seoInfo, intro, knobs } = props.data
  // const location = props.location
  return (
    <Layout location={location}>
      {/* <SEO
        title={seoInfo.acf._swb_theme_meta_title}
        description={seoInfo.acf._swb_theme_description}
        metaImg={seoInfo.acf._swb_theme_image.localFile.publicURL}
        location={location.pathname}
      />
      <Intro intro={intro} />
      <Knobs knobs={knobs} /> */}
    </Layout>
  )
}

// export const knobQuery = graphql`
//   query knobPage($id: Int!) {
//     seoInfo: wordpressPage(wordpress_id: { eq: $id }) {
//       acf {
//         _swb_theme_meta_title
//         _swb_theme_description
//         _swb_theme_image {
//           localFile {
//             publicURL
//           }
//         }
//       }
//     }
//     intro: wordpressPage(wordpress_id: { eq: $id }) {
//       acf {
//         _afr_knob_intro_title
//         _afr_knob_intro_content
//         _afr_knob_intro_image {
//           alt_text
//           localFile {
//             childImageSharp {
//               fluid(maxWidth: 1000) {
//                 ...GatsbyImageSharpFluid_withWebp
//               }
//             }
//           }
//         }
//       }
//     }

//     knobs: wordpressPage(wordpress_id: { eq: $id }) {
//       acf {
//         _afr_knob_knobs {
//           name
//           price
//           image {
//             alt_text
//             localFile {
//               childImageSharp {
//                 fluid(maxWidth: 600) {
//                   ...GatsbyImageSharpFluid_withWebp
//                 }
//               }
//             }
//           }
//         }
//       }
//     }
//   }
// `

export default knobSelections
