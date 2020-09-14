import React, { useState } from "react"
import styled from "styled-components"
import axios from "axios"
import { medWrapper, Btn1DarkGrey } from "../../../styles/helpers"

import FormInput from "../../Form/FormInput"
import FormTextarea from "../../Form/FormTextarea"

const ContactFormSection = styled.section`
  position: relative;
  margin-bottom: 5rem;

  .wrapper {
    ${medWrapper};
  }

  .form {
    width: 100%;

    @media (min-width: 768px) {
      width: calc(50%);
    }

    @media (min-width: 1025px) {
      width: calc(50%);
    }

    .formBtn {
      width: 100%;

      button {
        ${Btn1DarkGrey};
      }
    }
  }
`

const submitToWebServer = async (formID, data) => {
  const FORM_POST_URL = `http://airdriefurniturerevival.swbcreative.ca/wp-json/contact-form-7/v1/contact-forms/${formID}/feedback`
  const config = { headers: { "Content-Type": "multipart/form-data" } }
  const serverResponse = await axios.post(FORM_POST_URL, data, config)
  if (serverResponse.data.status === "mail_sent") {
    return { errors: false, errorMessages: [] }
  } else {
    return { errors: true, errorMessages: serverResponse.data.invalidFields }
  }
}

const Form = () => {
  const [formField, setFormFeilds] = useState({})
  const [formStatus, setFormStatus] = useState({
    submitting: false,
    errorWarnDisplay: false,
    success: false,
    errors: [],
  })

  const handleFieldChange = e => {
    setFormFeilds({ ...formField, [e.target.name]: e.target.value })
  }

  const handleFormSubmit = async e => {
    e.preventDefault()
    setFormStatus({
      ...formStatus,
      submitting: true,
    })
    const formDataArray = Object.entries(formField)
    const bodyFormData = new FormData()
    formDataArray.forEach(field => {
      bodyFormData.append(field[0], field[1])
    })
    const response = await submitToWebServer(273, bodyFormData)
    handleUpdateServerResponse(response)
  }

  const handleUpdateServerResponse = response => {
    if (!response.errors) {
      setFormStatus({
        ...formStatus,
        submitting: false,
        errorWarnDisplay: false,
        success: true,
        errors: [],
      })
    } else {
      setFormStatus({
        ...formStatus,
        submitting: false,
        errorWarnDisplay: true,
        success: false,
        errors: response.errorMessages,
      })
    }
  }

  const handleErrorModalClose = () => {
    setFormStatus({
      ...formStatus,
      submitting: false,
      errorWarnDisplay: false,
      success: false,
    })
  }

  const handleSuccessModalClose = () => {
    setFormStatus({
      ...formStatus,
      submitting: false,
      errorWarnDisplay: false,
      success: false,
      errors: [],
    })
    setFormFeilds({})
  }

  const errors = formStatus.errors
  return (
    <ContactFormSection>
      <div className="wrapper">
        <div className="form">
          <form onSubmit={e => handleFormSubmit(e)}>
            <FormInput
              label="Full Name"
              name="fullName"
              id="fullName"
              type="text"
              required={true}
              errors={errors}
              value={formField.fullName ? formField.fullName : ""}
              handleOnChange={handleFieldChange}
            />
            <FormInput
              label="Email"
              name="emailaddress"
              id="emailaddress"
              type="email"
              required={true}
              errors={errors}
              value={formField.emailaddress ? formField.emailaddress : ""}
              handleOnChange={handleFieldChange}
            />
            <FormInput
              label="Phone"
              name="phonenumber"
              id="phonenumber"
              type="text"
              required={true}
              errors={errors}
              value={formField.phonenumber ? formField.phonenumber : ""}
              handleOnChange={handleFieldChange}
            />
            <FormTextarea
              label="Comment"
              name="comment"
              id="comment"
              required={true}
              rows={12}
              errors={errors}
              value={formField.comment ? formField.comment : ""}
              handleOnChange={handleFieldChange}
            />
            <div className="formBtn">
              <button>Submit</button>
            </div>
          </form>
        </div>
      </div>
    </ContactFormSection>
  )
}

export default Form
