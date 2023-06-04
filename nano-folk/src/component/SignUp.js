import { useState, useEffect } from 'react'
import nbp_background_url from '../image/nbp-backgroud.svg'
import nbp_logo from '../image/nbp_foree_remittance_logo.svg'
import Form from 'react-bootstrap/Form';
import FormText from 'react-bootstrap/FormText'
import Button from 'react-bootstrap/Button';
import InputGroup from 'react-bootstrap/InputGroup'
import { FaEye, FaEyeSlash } from "react-icons/fa"

import css from './SignUp.module.scss'

import {
  useNavigate
} from 'react-router-dom'

const SignIn = ({children}) => {
  const [ email, setEmail ] = useState('');
  const [ username, setUsername ] = useState('')
  const [ password, setPassword ] = useState('')
  const [ showPassword, setShowPassword ] = useState(false)
  const [ canSubmit, setCanSubmit ] = useState(false)
  const navigate = useNavigate()

  useEffect(() => {
    //TODO: more precise validation
    if ( email !== "" && username !== "" && password !== "" ) {
      setCanSubmit(true)
    } else {
      setCanSubmit(false)
    }
  }, [email, username, password])

  const onBoardSubmit = (e) => {
    e.preventDefault()
    e.stopPropagation()
    alert("TODO: onFormSubmit")
  }
  const toggleShowPassword = e => {
    e.stopPropagation()
    setShowPassword(!showPassword)
  }

  const navigateToSignIn = _ => {
    navigate('/signIn', {replace: true})
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
            <div className={css.formWidth}>
              <h3 style={{textAlign: "center"}}>Welcome Back</h3>
              <Form onSubmit={onBoardSubmit}>
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
                <Form.Group className="mb-1" controlId="usename">
                  <Form.Label>Username</Form.Label>
                  <Form.Control
                    className='border-2'
                    value={username} 
                    onChange={e => setUsername(e.target.value)} 
                    type="text"
                  />
                  <FormText id="passwordHelpBlock" muted>Required</FormText>
                </Form.Group>
                <Form.Group className="mb-1" controlId="password">
                  <Form.Label>Password</Form.Label>
                  <InputGroup>
                    <Form.Control
                      className='border-2'
                      value={password} 
                      onChange={e => setPassword(e.target.value)} 
                      type={ showPassword ? "text" : "password" }
                    />
                    <InputGroup.Text onClick={toggleShowPassword} style={{cursor: 'pointer'}}>{showPassword?<FaEye/>:<FaEyeSlash/>}</InputGroup.Text>
                  </InputGroup>
                  <FormText id="passwordHelpBlock" muted>Password should be at least 10 characters</FormText>
                </Form.Group>
                <div className="d-grid gap-auto mb-3 mt-2">
                  <Button type="submit" className="fw-bold" disabled={!canSubmit}>Get Start</Button>
                </div>
              </Form>
              <p style={{textAlign: "center"}}>
                Already have an Account?
                <Button 
                  variant="outline-primary" 
                  className={`ms-1 ${css.buttonHoverColor}`}
                  onClick={navigateToSignIn}
                >
                  Sign In
                </Button>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    
  )
}

export default SignIn