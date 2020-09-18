import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/Layout"
import SEO from "../components/Seo"

import Intro from "../components/TemplateComponents/About/Intro"
import AboutDetails from "../components/TemplateComponents/About/AboutDetails"
import Testimonials from "../components/TemplateComponents/About/Testimonials"
import AsSeenOn from "../components/TemplateComponents/About/AsSeenOn"
import NewsArticles from "../components/TemplateComponents/About/NewsArticles"
import Showcase from "../components/TemplateComponents/About/Showcase"

const about = props => {
  const {
    aboutIntro,
    aboutDetails,
    testimonials,
    asSeenOn,
    newsArticles,
    showcase,
  } = props.data
  const location = props.location
  return (
    <Layout location={location}>
      <SEO title="About" />
      <Intro aboutIntro={aboutIntro} />
      <AboutDetails aboutDetails={aboutDetails} />
      <Testimonials testimonials={testimonials} />
      <AsSeenOn asSeenOn={asSeenOn} />
      <NewsArticles newsArticles={newsArticles} />
      <Showcase showcase={showcase} />
    </Layout>
  )
}

export const aboutQuery = graphql`
  query aboutPage($id: Int!) {
    aboutIntro: wordpressPage(wordpress_id: { eq: $id }) {
      acf {
        _afr_apit_image_left {
          alt_text
          localFile {
            childImageSharp {
              fluid(maxWidth: 1000) {
                ...GatsbyImageSharpFluid_withWebp
              }
            }
          }
        }
        _afr_apit_image_right {
          alt_text
          localFile {
            childImageSharp {
              fluid(maxWidth: 1000) {
                ...GatsbyImageSharpFluid_withWebp
              }
            }
          }
        }
        _afr_apit_title
        _afr_apit_content
        _afr_apib_image_left {
          alt_text
          localFile {
            childImageSharp {
              fluid(maxWidth: 1000) {
                ...GatsbyImageSharpFluid_withWebp
              }
            }
          }
        }
        _afr_apib_image_right {
          alt_text
          localFile {
            childImageSharp {
              fluid(maxWidth: 1000) {
                ...GatsbyImageSharpFluid_withWebp
              }
            }
          }
        }
        _afr_api_logo {
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

    aboutDetails: wordpressPage(wordpress_id: { eq: $id }) {
      acf {
        _afr_about_bio_quote
        _afr_about_bio_content
        _afr_about_bio_image_left {
          alt_text
          localFile {
            childImageSharp {
              fluid(maxWidth: 1000) {
                ...GatsbyImageSharpFluid_withWebp
              }
            }
          }
        }
        _afr_about_bio_image_centre {
          alt_text
          localFile {
            childImageSharp {
              fluid(maxWidth: 1000) {
                ...GatsbyImageSharpFluid_withWebp
              }
            }
          }
        }
        _afr_about_bio_image_right {
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

    newsArticles: wordpressPage(wordpress_id: { eq: $id }) {
      acf {
        _afr_news_articles {
          content
          link_text
          url
        }
      }
    }

    showcase: wordpressPage(wordpress_id: { eq: $id }) {
      acf {
        _afc_about_showcase_images {
          image {
            alt_text
            localFile {
              childImageSharp {
                fluid(maxWidth: 750) {
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

export default about
