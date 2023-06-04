import { useState } from 'react'
import nbp_background_url from '../image/nbp-backgroud.svg'
import nbp_logo from '../image/nbp_foree_remittance_logo.svg'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { FaBeer } from "react-icons/fa";

// import {
//   userNavigate
// } from 'react-router-dom'

import css from './SignIn.module.scss'

const SignIn = ({children}) => {
  const [ usernameOrEmail, setUsernameOrEmail ] = useState('');
  const [ password, setPassword ] = useState('');
  const onFormSubmit = (e) => {
    e.preventDefault();
    e.stopPropagation();
    console.log(e)
  }
  return (
    <div className='container-fluid'>
      <div className="row">
        <div 
          className={`col-md-5 col-lg-6 col-xl-7 col-xxl-8 ${css.left}`} 
          style={{ backgroundImage: `url(${nbp_background_url})` }}>
          <div className="container-fluid h-100 d-flex justify-content-center align-items-center">
            <img className={`${css.logoHeight}`} src={nbp_logo} alt="logo"/>
          </div>
        </div>
        <div className={`col-md-7 col-lg-6 col-xl-5 col-xxl-4 ${css.right}`}>
          <div className="container-fluid h-100 d-flex justify-content-center align-items-md-center mt-5 mt-md-0">
            <div className={css.signinFormWidth}>
              <h3 style={{textAlign: "center"}}>Welcome Back</h3>
              <Form onSubmit={onFormSubmit}>
                <Form.Group className="mb-2" controlId="usernameOrEmail">
                  <Form.Label>Email or Username</Form.Label>
                  <Form.Control
                    className='border-2'
                    value={usernameOrEmail} 
                    onChange={e => setUsernameOrEmail(e.target.value)} 
                    type="email"
                  />
                </Form.Group>
                <Form.Group className="mb-2" controlId="password">
                  <Form.Label>Password</Form.Label>
                  <Form.Control
                    className='border-2'
                    value={password} 
                    onChange={e => setPassword(e.target.value)} 
                    type="password" 
                  />
                </Form.Group>
                <a className="d-block mb-3 link-underline-opacity-100-hover" style={{textAlign: 'end', cursor: 'pointer'}}>Forgot Password?</a>
                <Button type="submit">Sign In</Button>
              </Form>
            </div>
          </div>
        </div>
      </div>
    </div>
    
  )
}

export default SignIn