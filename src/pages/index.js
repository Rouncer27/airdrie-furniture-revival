import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/Layout"
import SEO from "../components/Seo"

import Intro from "../components/TemplateComponents/Home/Intro"
import ClosedCrop from "../components/TemplateComponents/Home/ClosedCrop"
import MailChimpList from "../components/TemplateComponents/Home/MailChimpList"
import ShopNow from "../components/TemplateComponents/Home/ShopNow"
import HowItWorks from "../components/TemplateComponents/Home/HowItWorks"
import AsSeenOn from "../components/TemplateComponents/Home/AsSeenOn"
import Testimonials from "../components/TemplateComponents/Home/Testimonials"
import Showcase from "../components/TemplateComponents/Home/Showcase"
import GalleryLink from "../components/TemplateComponents/Home/GalleryLink"
import BringOwnFurniture from "../components/TemplateComponents/Home/BringOwnFurniture"

const IndexPage = props => {
  const {
    seoInfo,
    homeIntro,
    closedCrop,
    mailChimp,
    shopNow,
    howItWorks,
    asSeenOn,
    testimonials,
    showcase,
    links,
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
      <Intro homeIntro={homeIntro} />
      <ClosedCrop closedCrop={closedCrop} />
      <MailChimpList mailChimp={mailChimp} />
      <ShopNow shopNow={shopNow} />
      <GalleryLink links={links} />
      <BringOwnFurniture />
      {/* <HowItWorks howItWorks={howItWorks} /> */}
      {/* <AsSeenOn asSeenOn={asSeenOn} /> */}
      {/* <Testimonials testimonials={testimonials} />
      <Showcase showcase={showcase} /> */}
    </Layout>
  )
}

export const homeQuery = graphql`
  {
    seoInfo: wordpressPage(slug: { eq: "home" }) {
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

    homeIntro: wordpressPage(slug: { eq: "home" }) {
      acf {
        _afr_hpit_image_left {
          alt_text
          localFile {
            childImageSharp {
              fluid(maxWidth: 1000) {
                ...GatsbyImageSharpFluid_withWebp
              }
            }
          }
        }
        _afr_hpit_image_right {
          alt_text
          localFile {
            childImageSharp {
              fluid(maxWidth: 1000) {
                ...GatsbyImageSharpFluid_withWebp
              }
            }
          }
        }
        _afr_hpit_title
        _afr_hpit_content
        _afr_hpib_image {
          alt_text
          localFile {
            childImageSharp {
              fluid(maxWidth: 1000) {
                ...GatsbyImageSharpFluid_withWebp
              }
            }
          }
        }
        _afr_hpib_title
        _afr_hpib_content
        _afr_hpi_logo {
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

    closedCrop: wordpressPage(slug: { eq: "home" }) {
      acf {
        _afr_close_crop_content
      }
    }
    mailChimp: wordpressPage(slug: { eq: "home" }) {
      acf {
        _acf_mailchimp_list
        _afr_mailchimp_list_content
      }
    }
    shopNow: wordpressPage(slug: { eq: "home" }) {
      acf {
        _afr_hosns_title
        _afr_hosns_content
        _afr_hosns_link_url
        _afr_hosns_image_top {
          alt_text
          localFile {
            childImageSharp {
              fluid(maxWidth: 1000) {
                ...GatsbyImageSharpFluid_withWebp
              }
            }
          }
        }
        _afr_hosns_image_bottom {
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

    links: wordpressPage(slug: { eq: "home" }) {
      acf {
        _afr_links {
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
          title
          url
        }
      }
    }

    howItWorks: wordpressPage(slug: { eq: "home" }) {
      acf {
        _afr_hoitwor_step_one
        _afr_hoitwor_step_two
        _afr_hoitwor_step_three
      }
    }
    asSeenOn: wordpressPage(slug: { eq: "home" }) {
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

    testimonials: allWordpressWpTestimonials {
      edges {
        node {
          acf {
            _afr_testimonial_content
          }
        }
      }
    }

    showcase: wordpressPage(slug: { eq: "home" }) {
      acf {
        _afc_home_showcase_images {
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

export default IndexPage
