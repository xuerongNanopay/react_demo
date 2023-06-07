import { useState, useEffect } from 'react'
import nbp_logo from 'image/nbp_foree_remittance_logo.svg'
import Button from 'react-bootstrap/Button'
import DigitalInputField from 'component/ui/digital_input_field/DigitalInputField'
import css from './VerifyEmail.module.scss'

import {
  Link
} from 'react-router-dom'

const VERIFY_DIGIT_SIZE = 6

const VerifyEmail = _ => {
  const [canSubmit, setCanSubmit] = useState(false)
  const [code, setCode] = useState("")

  useEffect(() => {
    if ( code.length === VERIFY_DIGIT_SIZE ) setCanSubmit(true)
    else setCanSubmit(false)
  }, [code])

  const submitVerifyCode = _ => {
    alert("TODO: Submit Code: " + code)
  }

  const resendCode = _ => {
    alert("TODO: Recend Code")
  }

  return (
    <>
      <div 
        className="container-fluid"
        style={{
          textAlign: 'center',
          padding: '12px',
          borderBottom: 'solid /*$1px grey300;; #DADDE2; */'
        }}
      >
        <img src={nbp_logo} alt="logo"/>
      </div>
      <div className="container-fluid">
        <h4 className="text-center mt-5">Let's Verify Your Email Address</h4>
        <div className={`${css.formWidth}`} style={{margin: 'auto'}}>
          <p className="text-center">We have sent a verification code to your email. Please enter the code below to confirm that this account belongs to you.</p>
          <div>
            <p style={{textAlign:'center'}}>Verification Code</p>
            <DigitalInputField 
              submit={val => setCode(val)}
              digits={VERIFY_DIGIT_SIZE}
            />
            <Button
              onClick={submitVerifyCode}
              style={{margin: 'auto', display: 'block', width: '70%'}}
              className={`fw-bold mt-4`}
              disabled={!canSubmit}
            // onClick={navigateToSignIn}
            >
              Submit
            </Button>
            <Button 
              onClick={resendCode}
              variant="outline-primary"
              className={`${css.buttonHoverColor} fw-bold mt-3`}
              style={{margin: 'auto', display: 'block', width: '70%'}}
              // onClick={navigateToSignIn}
            >
              Resend Code
            </Button>
          </div>
          <Link className="mt-4" style={{margin: 'auto', display: 'block', textAlign:'center'}} to={'/signIn'} replace={true}>Back to Sign In</Link>
        </div>
      </div>
    </>
  )
}

export default VerifyEmail