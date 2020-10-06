import React from "react"
import styled from "styled-components"
import { medWrapper } from "../../../styles/helpers"

import Step from "./Step"

const StepsSection = styled.section`
  padding: 4rem 0;
  background-color: rgba(244, 212, 210, 0.4);

  .wrapper {
    ${medWrapper};
  }
`

const Steps = ({ steps }) => {
  return (
    <StepsSection>
      <div className="wrapper">
        {steps.acf._afr_htw_steps.map((step, index) => {
          const reversed = index % 2 === 0 ? false : true
          const stepsLength = steps.acf._afr_htw_steps.length
          return (
            <Step
              key={index}
              reversed={reversed}
              stepsLength={stepsLength}
              index={index}
              step={step}
            />
          )
        })}
      </div>
    </StepsSection>
  )
}

export default Steps
