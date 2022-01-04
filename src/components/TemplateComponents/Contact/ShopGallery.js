import React from "react"
import styled from "styled-components"
import Img from "gatsby-image"

const ShopGallery = ({ shopGallery }) => {
  console.log({ shopGallery })
  return (
    <SectionStyled>
      <div className="wrapper">
        {shopGallery.acf._acf_shop_gallery.map((image, index) => {
          return (
            <ImageItem key={index}>
              <Img
                fluid={image.image.localFile.childImageSharp.fluid}
                alt={image.image.alt_text}
              />
            </ImageItem>
          )
        })}
      </div>
    </SectionStyled>
  )
}

const SectionStyled = styled.div`
  margin-top: 4rem;
  margin-bottom: 1rem;

  .wrapper {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    width: 100%;
  }
`

const ImageItem = styled.div`
  width: calc(50%);
  margin: 1rem auto;

  @media (min-width: 768px) {
    width: calc(50% - 1rem);
    margin: 0.5rem;
  }

  @media (min-width: 1025px) {
    width: calc(33.33% - 1rem);
  }
`

export default ShopGallery
