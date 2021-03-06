import React, { useState } from "react"
import styled from "styled-components"
import { colors, B1White, B1DarkGrey, fontSizer } from "../../styles/helpers"

const TextareaStyled = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  position: relative;
  width: 100%;
  margin-bottom: 2.5rem;

  .errorMessage {
    position: absolute;
    top: 1.5rem;
    right: 0;
    width: 100%;
    text-align: right;

    p {
      ${B1White};
      margin: 0;
      padding: 0;
      color: red;
    }
  }

  .fieldRequired {
    position: absolute;
    top: -2rem;
    left: 0;
    width: 100%;

    p {
      ${B1White};
      ${fontSizer(1, 1, 76.8, 150, 1.2)};
      margin: 0;
      padding: 0;
    }
  }

  label {
    ${B1White};
    ${fontSizer(1.2, 1.4, 76.8, 150, 1.2)};
    width: calc(25%);
    margin: 0;
    padding: 1rem 0.75rem 1rem;
    transition: all 0.3s ease-in;
    background: ${props =>
      props.isFocused ? colors.colorSecondary : colors.colorPrimary};
    color: ${props =>
      props.isFocused ? colors.colorPrimary : colors.greyBrown};
    text-align: center;
  }

  textarea {
    ${B1DarkGrey};
    width: calc(100%);
    margin: 0;
    padding: 1.25rem;
    border-color: rgba(210, 210, 210, 1);
    transition: all 0.3s ease-in;

    &:focus {
      outline-color: ${colors.colorPrimary};
      outline-style: solid;
      outline-width: 0.25rem;
    }
  }
`

const FormTextarea = ({
  label,
  name,
  id,
  rows,
  value,
  handleOnChange,
  errors = [],
  required,
}) => {
  const [isFocused, setIsFocused] = useState(false)
  const handleOnFocus = () => {
    setIsFocused(!isFocused)
  }
  const errorMess = errors.find(err => err.idref === id)
  const errMessDisplay =
    errorMess !== undefined ? (
      <div className="errorMessage">
        <p>{errorMess.message}</p>
      </div>
    ) : null
  return (
    <TextareaStyled isFocused={isFocused}>
      <label htmlFor={name}>{label}</label>
      {errMessDisplay}
      {required && (
        <div className="fieldRequired">
          <p>&#42; Required field</p>
        </div>
      )}
      <textarea
        id={id}
        name={name}
        rows={rows}
        value={value}
        required={required}
        onChange={e => handleOnChange(e)}
        onFocus={handleOnFocus}
        onBlur={handleOnFocus}
      ></textarea>
    </TextareaStyled>
  )
}

export default FormTextarea
