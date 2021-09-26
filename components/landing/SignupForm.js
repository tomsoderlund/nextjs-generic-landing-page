import React, { useState } from 'react'

import { googleEvent } from '../page/GoogleAnalytics'

// leadService: `https://login-as-a-service.vercel.app/api/${appSlug}/lead`
const SignupForm = ({ leadService, googleEventName = 'sign_up', buttonText = 'Sign up', thankyouText = 'Thank you!' }) => {
  const [personInfo, setPersonInfo] = useState({ email: '' })
  const setPersonInfoField = (field, value) => setPersonInfo({ ...personInfo, [field]: value })

  const [inProgress, setInProgress] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [hasErrors, setHasErrors] = useState(false)

  const handleSubmit = async (event) => {
    event.preventDefault()
    setInProgress(true)
    try {
      const result = await fetch(leadService, { // eslint-disable-line no-undef
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(personInfo)
      })
      if (result.status === 200) {
        setIsSubmitted(true)
        if (googleEventName) {
          googleEvent(googleEventName)
        }
      } else {
        const json = await result.json()
        setHasErrors(json.message)
      }
    } catch (err) {
      console.warn(`Warning: ${err.message || err}`)
      setHasErrors(err.message)
    } finally {
      setInProgress(false)
    }
  }

  return (
    <form className='signup-form' onSubmit={handleSubmit}>
      {!isSubmitted ? (
        <>
          <input
            name='email'
            type='email'
            value={personInfo.email}
            required
            placeholder='Your email'
            onChange={event => setPersonInfoField('email', event.target.value)}
            disabled={inProgress}
          />
          <button
            type='submit'
            className={'primary progress-animation' + (inProgress ? ' in-progress' : '')}
            disabled={inProgress}
          >
            {buttonText}
          </button>
          {hasErrors ? <p className='error color-error-fg'>{hasErrors}</p> : null}
        </>
      ) : (
        <h3 className='thankyou'>{thankyouText}</h3>
      )}
    </form>
  )
}

export default SignupForm
