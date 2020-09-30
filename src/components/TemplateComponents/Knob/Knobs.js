import React from "react"
import Img from "gatsby-image"
import styled from "styled-components"
import { standardWrapper, B1DarkGrey } from "../../../styles/helpers"

const KnobsSection = styled.section`
  .wrapper {
    ${standardWrapper};
    justify-content: flex-start;
  }
`

const Knob = styled.div`
  width: calc(50% - 4rem);
  margin: 2rem;

  @media (min-width: 768px) {
    width: calc(33.33% - 4rem);
  }
  @media (min-width: 1025px) {
    width: calc(33.33% - 4rem);
  }

  h3 {
    ${B1DarkGrey};
    .knobName {
    }
  }
`

const Knobs = ({ knobs }) => {
  return (
    <KnobsSection>
      <div className="wrapper">
        {knobs.acf._afr_knob_knobs.map((knob, index) => {
          return (
            <Knob key={index}>
              <div>
                <h3>
                  <span className="knobName">{knob.name}</span> -{" "}
                  <span>{knob.price}</span>
                </h3>
              </div>
              <div>
                <Img
                  fluid={knob.image.localFile.childImageSharp.fluid}
                  alt={knob.name}
                />
              </div>
            </Knob>
          )
        })}
      </div>
    </KnobsSection>
  )
}

export default Knobs
