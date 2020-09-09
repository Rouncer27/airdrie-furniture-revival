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
    text-align: center;

    p {
      ${B2DarkGrey};
    }
  }

  .closedPlant {
    position: absolute;
    bottom: 0;
    left: 5rem;
    width: calc(36.8rem / 1);
    height: calc(25.9rem / 1);
    z-index: -1;
  }

  .closedGlobe {
    position: absolute;
    bottom: 0;
    right: -5rem;
    width: calc(23.7rem / 1);
    height: calc(29.2rem / 1);
    z-index: -1;
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
