import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/Layout"
import SEO from "../components/Seo"
import Intro from "../components/TemplateComponents/Contact/Intro"
import Testimonials from "../components/TemplateComponents/Contact/Testimonials"
import AsSeenOn from "../components/TemplateComponents/Contact/AsSeenOn"
import ContactBlock from "../components/TemplateComponents/Contact/ContactBlock"
import ShopLocation from "../components/TemplateComponents/Contact/ShopLocation"
import ShopGallery from "../components/TemplateComponents/Contact/ShopGallery"

const contact = props => {
  const {
    seoInfo,
    contactIntro,
    testimonials,
    asSeenOn,
    aboutShopContent,
    shopLocation,
    shopGallery,
  } = props.data
  const location = props.location
  return (
    <Layout location={location}>
      <SEO
        title={seoInfo.acf._swb_theme_meta_title}
        description={seoInfo.acf._swb_theme_description}
        metaImg={seoInfo.acf._swb_theme_image.localFile.publicURL}
        location={location.pathname}
      />
      <Intro contactIntro={contactIntro} />
      <ContactBlock aboutShopContent={aboutShopContent} />
      <ShopLocation shopLocation={shopLocation} />
      <ShopGallery shopGallery={shopGallery} />
      <AsSeenOn asSeenOn={asSeenOn} />
      <Testimonials testimonials={testimonials} />
    </Layout>
  )
}

export const connectQuery = graphql`
  query connectPage($id: Int!) {
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

    aboutShopContent: wordpressPage(wordpress_id: { eq: $id }) {
      acf {
        _afr_shop_about_content
      }
    }

    shopLocation: wordpressPage(wordpress_id: { eq: $id }) {
      acf {
        _afr_shop_location_map {
          alt_text
          localFile {
            childImageSharp {
              fluid(maxWidth: 1500) {
                ...GatsbyImageSharpFluid_withWebp
              }
            }
          }
        }
        _afr_shop_location_link
        _acf_shop_hours
      }
    }

    shopGallery: wordpressPage(wordpress_id: { eq: $id }) {
      acf {
        _acf_shop_gallery {
          image {
            alt_text
            localFile {
              childImageSharp {
                fluid(maxWidth: 1500) {
                  ...GatsbyImageSharpFluid_withWebp
                }
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
