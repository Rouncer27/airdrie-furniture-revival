import React from "react"
import styled from "styled-components"
import { standardWrapper, B2DarkGrey } from "../../../styles/helpers"

import GreenPlant from "../../ClosedCropped/GreenPlant"
import Globe from "../../ClosedCropped/Globe"

const ClosedCropSection = styled.section`
  position: relative;

  .wrapper {
    ${standardWrapper};
  }

  .closeContent {
    width: 100%;
    max-width: 57rem;
    margin: 5rem auto;
    padding-bottom: calc(25rem / 1);
    text-align: center;

    @media (min-width: 768px) {
      padding-bottom: 0;
    }

    p {
      ${B2DarkGrey};
    }
  }

  .closedPlant {
    display: none;
    position: absolute;
    bottom: 0;
    left: 5rem;
    width: calc(36.8rem / 1);
    height: calc(25.9rem / 1);
    z-index: -1;

    @media (min-width: 768px) {
      display: block;
      bottom: 2rem;
      left: -10%;
      width: calc(36.8rem / 1.75);
      height: calc(25.9rem / 1.75);
    }
    @media (min-width: 1025px) {
      bottom: 0;
      left: 0;
      width: calc(36.8rem / 1.5);
      height: calc(25.9rem / 1.5);
    }

    @media (min-width: 1200px) {
      left: 2rem;
      width: calc(36.8rem / 1.25);
      height: calc(25.9rem / 1.25);
    }
    @media (min-width: 1500px) {
      left: 5rem;
      width: calc(36.8rem / 1);
      height: calc(25.9rem / 1);
    }
  }

  .closedGlobe {
    position: absolute;
    bottom: 2rem;
    right: auto;
    left: calc(50% - (23.7rem / 2));
    width: calc(23.7rem / 1);
    height: calc(29.2rem / 1);
    z-index: -1;

    @media (min-width: 768px) {
      bottom: 0;
      right: -5rem;
      left: auto;
      width: calc(23.7rem / 1.5);
      height: calc(29.2rem / 1.5);
    }

    @media (min-width: 1025px) {
      width: calc(23.7rem / 1);
      height: calc(29.2rem / 1);
    }
  }
`

const ClosedCrop = ({ closedCrop }) => {
  return (
    <ClosedCropSection>
      <div className="wrapper">
        <div
          className="closeContent"
          dangerouslySetInnerHTML={{
            __html: closedCrop.acf._afr_close_crop_content,
          }}
        />
      </div>
      <div className="closedPlant">
        <GreenPlant />
      </div>
      <div className="closedGlobe">
        <Globe />
      </div>
    </ClosedCropSection>
  )
}

export default ClosedCrop
