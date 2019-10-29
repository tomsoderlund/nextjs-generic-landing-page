import React, { useState } from 'react'
import fetch from 'isomorphic-unfetch'

import { config } from '../config/config'

import Block from './Block'
import ContainerFlex from './ContainerFlex'

export default (props) => {
  const [personInfo, setPersonInfo] = useState({ email: '' })
  const setPersonInfoField = (field, value) => setPersonInfo({ ...personInfo, [field]: value })

  const [inProgress, setInProgress] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [hasErrors, setHasErrors] = useState(false)

  const handleSubmit = async (event) => {
    event.preventDefault()
    setInProgress(true)
    try {
      const result = await fetch(`${config.loginService}/lead`, {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(personInfo)
      })
      if (result.status === 200) { setIsSubmitted(true) } else {
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
    <Block padding='1em' {...props}>
      <form onSubmit={handleSubmit}>
        {!isSubmitted ? (
          <ContainerFlex>
            <input
              id='email'
              type='email'
              value={personInfo.email}
              required
              placeholder='Your email'
              onChange={event => setPersonInfoField('email', event.target.value)}
              className='weld-input'
              disabled={inProgress}
            />
            <button
              type='submit'
              className='weld-button-animated always-on'
              disabled={inProgress}
            >
              {props.buttonText || 'Sign up'}
            </button>
            {hasErrors ? <p className='color-error-fg'>{hasErrors}</p> : null}
          </ContainerFlex>
        ) : (
          <h3 className='thankyou'>{props.thankyouText || 'Thank you!'}</h3>
        )}
        <style jsx>{`
          .thankyou {
            margin: 2em 0;
          }
        `}
        </style>
      </form>
    </Block>
  )
}
