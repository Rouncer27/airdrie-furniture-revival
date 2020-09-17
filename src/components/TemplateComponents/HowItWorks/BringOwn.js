import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import {
  standardWrapper,
  Btn1DarkGrey,
  colors,
  H1DarkGrey,
} from "../../../styles/helpers"

import GreenPaint from "../../ClosedCropped/GreenPaint"

const BringOwnSection = styled.section`
  margin-bottom: 2.5rem;
  padding: 7rem 0;
  background-color: ${colors.colorSecondary};

  .wrapper {
    ${standardWrapper};
  }

  .shopNow {
    position: relative;
    width: 100%;
    text-align: center;

    a {
      ${Btn1DarkGrey};
      position: relative;
      z-index: 10;
    }

    &__paint {
      position: absolute;
      top: 50%;
      left: 50%;
      width: 40.1rem;
      height: 8.8rem;
      transform: translate(-50%, -50%);
      z-index: 1;
    }
  }

  .shopTitle {
    width: 100%;
    margin: 5rem auto;
    text-align: center;

    h2 {
      ${H1DarkGrey};
    }
  }

  .shopLearn {
    width: 100%;
    text-align: center;

    a {
      ${Btn1DarkGrey};
    }
  }
`

const BringOwn = () => {
  return (
    <BringOwnSection>
      <div className="wrapper">
        <div className="shopNow">
          <a href="https://shop.airdriefurniturerevival.ca/">Shop Now</a>
          <div className="shopNow__paint">
            <GreenPaint />
          </div>
        </div>
        <div className="shopTitle">
          <h2>Want to bring your own furniture?</h2>
        </div>
        <div className="shopLearn">
          <Link to="/how-it-works/byo-furniture">Learn More</Link>
        </div>
      </div>
    </BringOwnSection>
  )
}

export default BringOwn
