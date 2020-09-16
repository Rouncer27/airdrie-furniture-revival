import React from "react"
import Img from "gatsby-image"
import styled from "styled-components"
import {
  medWrapper,
  H2DarkGrey,
  H1DarkGrey,
  B1DarkGrey,
  colors,
} from "../../../styles/helpers"

const StepsSection = styled.section`
  padding: 4rem 0;
  background-color: rgba(244, 212, 210, 0.4);

  .wrapper {
    ${medWrapper};
  }
`

const Step = styled.div`
  display: flex;
  align-items: flex-start;
  flex-wrap: wrap;
  justify-content: center;
  flex-direction: column-reverse;
  position: relative;
  width: 100%;
  padding-bottom: 5rem;

  @media (min-width: 768px) {
    flex-direction: ${props => (props.reversed ? "row-reverse" : "row")};
    padding-bottom: 15rem;
  }

  .stepContent {
    width: calc(100%);

    @media (min-width: 768px) {
      width: calc(40%);
    }

    h2 {
      ${H1DarkGrey};
      margin-top: 0;
    }

    p {
      ${B1DarkGrey};
    }
  }

  .stepCount {
    width: calc(100%);
    margin-top: 5rem;

    @media (min-width: 768px) {
      width: calc(20%);
      margin-top: 0;
      text-align: center;
    }

    p {
      ${H2DarkGrey};
      font-weight: bold;
      text-transform: uppercase;

      span {
        display: block;
      }
    }
  }

  .stepIcon {
    width: calc(100%);

    @media (min-width: 768px) {
      width: calc(40%);
    }

    &__inner {
      width: 20rem;
      margin: 0;

      @media (min-width: 768px) {
        width: 30rem;
        margin: auto;
      }
    }
  }

  .stepDots {
    display: ${props => (props.last ? "none" : "none")};
    position: absolute;
    left: 0;
    right: 0;
    bottom: 6rem;
    width: 0.1rem;
    height: 50%;
    margin: auto;
    border-right: dotted 0.5rem ${colors.colorTertiary};

    @media (min-width: 768px) {
      display: ${props => (props.last ? "none" : "block")};
    }
  }
`

const Steps = ({ steps }) => {
  return (
    <StepsSection>
      <div className="wrapper">
        {steps.acf._afr_htw_steps.map((step, index) => {
          const reversed = index % 2 === 0 ? false : true
          const last =
            index + 1 === steps.acf._afr_htw_steps.length ? true : false
          return (
            <Step key={index} reversed={reversed} last={last}>
              <div className="stepContent">
                <div>
                  <h2>{step.title}</h2>
                </div>
                <div dangerouslySetInnerHTML={{ __html: step.content }} />
              </div>
              <div className="stepCount">
                <p>
                  Step <span>0{index + 1}</span>
                </p>
              </div>
              <div className="stepIcon">
                <div className="stepIcon__inner">
                  <Img
                    fluid={step.icon.localFile.childImageSharp.fluid}
                    alt={`Step One`}
                  />
                </div>
              </div>
              <div className="stepDots" />
            </Step>
          )
        })}
      </div>
    </StepsSection>
  )
}

export default Steps
