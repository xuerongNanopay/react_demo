import { useState, useEffect } from 'react'
import nbp_logo from '../image/nbp_foree_remittance_logo.svg'
import Form from 'react-bootstrap/Form';
import FormText from 'react-bootstrap/FormText'
import Button from 'react-bootstrap/Button'
import css from './ForgetPassword.module.scss'

import {
  useNavigate
} from 'react-router-dom'

const ForgetPassword = _ => {
  const [ email, setEmail ] = useState('')
  const [ canSubmit, setCanSubmit ] = useState(false)
  const navigate = useNavigate()

  useEffect(() => {
    //TODO: more precise validation
    if ( email !== "" ) {
      setCanSubmit(true)
    } else {
      setCanSubmit(false)
    }
  }, [email])

  const navigateToSignIn = _ => {
    navigate('/signIn', {replace: true})
  }

  const forgetPassowrdSubmit = e => {
    e.preventDefault()
    e.stopPropagation()
    alert('TODO: forgetPassowrdSubmit');
    //TODO: redirect to signIn
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
      <div 
        className="container-fluid"
      >
        <h5 className="text-center mt-5">Forgot Password?</h5>
        <p className="text-center mt-3">Enter the email you used to create your account in order to reset your password.</p>
        {/* <p>account in order to reset your password.</p> */}
        <div className={css.formWidth} style={{margin: 'auto'}}>
          <Form onSubmit={forgetPassowrdSubmit}>
            <Form.Group className="mb-1" controlId="email">
              <Form.Label>Email</Form.Label>
              <Form.Control
                className='border-2'
                value={email} 
                onChange={e => setEmail(e.target.value)} 
                type="email"
              />
              <FormText id="passwordHelpBlock" muted>Required</FormText>
            </Form.Group>
            <div className="d-grid gap-auto mb-3 mt-3">
              <Button type="submit" className="fw-bold" disabled={!canSubmit}>Submit</Button>
            </div>
          </Form>
          <Button 
            variant="outline-primary"
            className={`${css.buttonHoverColor}`}
            style={{margin: 'auto', display: 'block'}}
            onClick={navigateToSignIn}
          >
            Back to Sign In
          </Button>
        </div>
      </div>
    </>
  )
}

export default ForgetPassword