import { useState, useEffect } from 'react'
import nbp_logo from '../image/nbp_foree_remittance_logo.svg'
import Form from 'react-bootstrap/Form';
import FormText from 'react-bootstrap/FormText'
import Button from 'react-bootstrap/Button'
import css from './VerifyEmail.module.scss'

import {
  Link
} from 'react-router-dom'

const VerifyEmail = _ => {
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
            <div
              className={`${css.verifyCode}`}
              style={{
                display: 'flex',
                justifyContent: 'center',
                gap: '1rem',
                // padding: '2rem'
              }}
            >
              <input type='text'/>
              <input type='text'/>
              <input type='text'/>
              <input type='text'/>
              <input type='text'/>
              <input type='text'/>
            </div>
            <Button 
              style={{margin: 'auto', display: 'block', width: '70%'}}
              className={`fw-bold mt-4`}
            // onClick={navigateToSignIn}
            >
              Submit
            </Button>
            <Button 
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