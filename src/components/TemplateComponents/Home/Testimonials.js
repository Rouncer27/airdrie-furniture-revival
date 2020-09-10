import React from "react"
import styled from "styled-components"
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import {
  standardWrapper,
  B1DarkGrey,
  H1DarkGrey,
  colors,
} from "../../../styles/helpers"
import Brushes from "../../ClosedCropped/Brushes"

const settings = {
  fade: true,
  draggable: true,
  infinite: true,
  speed: 250,
  autoplay: true,
  autoplaySpeed: 10000,
  centerMode: true,
  centerPadding: "0px",
  arrows: false,
  dots: true,
}

const TestSection = styled.section`
  position: relative;
  padding: 5rem 0;

  .wrapper {
    ${standardWrapper};
  }

  .testTitle {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    text-align: right;

    @media (min-width: 768px) {
      width: calc(50% - 7.5rem);
      margin-right: 7.5rem;
      padding-right: 10rem;
    }

    h2 {
      ${H1DarkGrey};
      width: 100%;
    }
  }

  .slider {
    width: 100%;

    @media (min-width: 768px) {
      width: calc(50%);
    }

    p {
      ${B1DarkGrey};
    }

    .slick-dots {
      right: 0;
      bottom: 0;
      left: 0;
      width: auto;

      @media (min-width: 768px) {
        right: auto;
        bottom: -1rem;
        left: 1rem;
      }

      li {
        button {
          &::before {
            font-size: 1rem;
          }
        }
      }

      li.slick-active {
        button {
          &::before {
            color: ${colors.colorPrimary};
          }
        }
      }
    }
  }

  .closeBrushes {
    position: absolute;
    bottom: 0;
    left: 5rem;
    width: 20rem;
    z-index: -1;
  }
`

const Testimonials = ({ testimonials }) => {
  return (
    <TestSection>
      <div className="wrapper">
        <div className="testTitle">
          <h2>Happy Clients</h2>
        </div>
        <Slider {...settings} className="slider">
          {testimonials.edges.map((test, index) => (
            <div key={index}>
              <div
                dangerouslySetInnerHTML={{
                  __html: test.node.acf._afr_testimonial_content,
                }}
              />
            </div>
          ))}
        </Slider>
      </div>
      <div className="closeBrushes">
        <Brushes />
      </div>
    </TestSection>
  )
}

export default Testimonials
