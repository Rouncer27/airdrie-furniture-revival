import React from "react"

import Layout from "../components/Layout"
import SEO from "../components/Seo"
import styled from "styled-components"

import {
  standardWrapper,
  H1DarkGrey,
  H2CoolGrey,
  H3DarkGrey,
  B1DarkGrey,
  B2DarkGrey,
  B2Pink,
  B3DarkGrey,
  Nav1CoolGrey,
} from "../styles/helpers"

const IndexSection = styled.div`
  ${standardWrapper};

  .headlines {
    &__one {
      ${H1DarkGrey};
    }

    &__two {
      ${H2CoolGrey};
    }

    &__three {
      ${H3DarkGrey};
    }
  }

  .paragraphs {
    &__one {
      ${B1DarkGrey};
    }

    &__two {
      ${B2DarkGrey};
    }

    &__twopink {
      ${B2Pink};
    }

    &__three {
      ${B3DarkGrey};
    }
  }

  .navigation {
    &__one {
      ${Nav1CoolGrey};
    }
  }
`

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <IndexSection>
      <div className="headlines">
        <h1 className="headlines__one">
          Headline 1 - Donec nec justo eget felis facilisis fermentum. Aliquam
          porttitor mauris sit amet orci. Aenean dignissim pellentesque felis.
        </h1>
        <h1 className="headlines__two">
          Headline 2 - Donec nec justo eget felis facilisis fermentum. Aliquam
          porttitor mauris sit amet orci. Aenean dignissim pellentesque felis.
        </h1>
        <h1 className="headlines__three">
          Headline 3 - Donec nec justo eget felis facilisis fermentum. Aliquam
          porttitor mauris sit amet orci. Aenean dignissim pellentesque felis.
        </h1>
      </div>
      <div className="paragraphs">
        <p className="paragraphs__one">
          Body 1 - Morbi interdum mollis sapien. Sed ac risus. Phasellus
          lacinia, magna a ullamcorper laoreet, lectus arcu pulvinar risus,
          vitae facilisis libero dolor a purus. Sed vel lacus. Mauris nibh
          felis, adipiscing varius, adipiscing in, lacinia vel, tellus.
          Suspendisse ac urna. Etiam pellentesque mauris ut lectus. Nunc tellus
          ante, mattis eget, gravida vitae, ultricies ac, leo. Integer leo pede,
          ornare a, lacinia eu, vulputate vel, nisl.
        </p>
        <p className="paragraphs__two">
          Body 2 - Morbi interdum mollis sapien. Sed ac risus. Phasellus
          lacinia, magna a ullamcorper laoreet, lectus arcu pulvinar risus,
          vitae facilisis libero dolor a purus. Sed vel lacus. Mauris nibh
          felis, adipiscing varius, adipiscing in, lacinia vel, tellus.
          Suspendisse ac urna. Etiam pellentesque mauris ut lectus. Nunc tellus
          ante, mattis eget, gravida vitae, ultricies ac, leo. Integer leo pede,
          ornare a, lacinia eu, vulputate vel, nisl.
        </p>
        <p className="paragraphs__twopink">
          Body 2 Pink - Morbi interdum mollis sapien. Sed ac risus. Phasellus
          lacinia, magna a ullamcorper laoreet, lectus arcu pulvinar risus,
          vitae facilisis libero dolor a purus. Sed vel lacus. Mauris nibh
          felis, adipiscing varius, adipiscing in, lacinia vel, tellus.
          Suspendisse ac urna. Etiam pellentesque mauris ut lectus. Nunc tellus
          ante, mattis eget, gravida vitae, ultricies ac, leo. Integer leo pede,
          ornare a, lacinia eu, vulputate vel, nisl.
        </p>
        <p className="paragraphs__three">
          Body 3 - Morbi interdum mollis sapien. Sed ac risus. Phasellus
          lacinia, magna a ullamcorper laoreet, lectus arcu pulvinar risus,
          vitae facilisis libero dolor a purus. Sed vel lacus. Mauris nibh
          felis, adipiscing varius, adipiscing in, lacinia vel, tellus.
          Suspendisse ac urna. Etiam pellentesque mauris ut lectus. Nunc tellus
          ante, mattis eget, gravida vitae, ultricies ac, leo. Integer leo pede,
          ornare a, lacinia eu, vulputate vel, nisl.
        </p>
      </div>
      <div className="navigation">
        <p className="navigation__one">
          Nav 1 - Morbi interdum mollis sapien. Sed ac risus. Phasellus lacinia,
          magna a ullamcorper laoreet, lectus arcu pulvinar risus, vitae
          facilisis libero dolor a purus. Sed vel lacus. Mauris nibh felis,
          adipiscing varius, adipiscing in, lacinia vel, tellus. Suspendisse ac
          urna. Etiam pellentesque mauris ut lectus. Nunc tellus ante, mattis
          eget, gravida vitae, ultricies ac, leo. Integer leo pede, ornare a,
          lacinia eu, vulputate vel, nisl.
        </p>
      </div>
    </IndexSection>
  </Layout>
)

export default IndexPage
