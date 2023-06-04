import { useState, useEffect } from 'react'
import nbp_logo from '../image/nbp_foree_remittance_logo.svg'
import Form from 'react-bootstrap/Form';
import FormText from 'react-bootstrap/FormText'
import Button from 'react-bootstrap/Button'
import css from './VerifyEmail.module.scss'

import {
  useNavigate
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
            <p>Verification Code</p>
            <div
              className={`${css.verifyCode}`}
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(6, 1fr)'
              }}
            >
              <input type='text'/>
              <input type='text'/>
              <input type='text'/>
              <input type='text'/>
              <input type='text'/>
              <input type='text'/>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default VerifyEmail