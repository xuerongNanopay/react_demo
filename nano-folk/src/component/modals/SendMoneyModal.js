import { useEffect, useState } from 'react'

import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import InputGroup from 'react-bootstrap/InputGroup'

const SendMoneyModal = ({show, handleClose}) => {
  return (
    <>
      <Modal 
        show={show} 
        onHide={handleClose} 
        centered
        backdrop='static'
        fullscreen='sm-down'
        size='lg'
      >
        <Modal.Header closeButton>
          <Modal.Title>Send Money</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h4 style={{textAlign: 'center'}}>Transfer Details</h4>
          <Form>
            <Form.Group className="mb-3" 
              controlId="sourceAccount"
            >
              <Form.Label>From</Form.Label>
              <Form.Select>
                <option>Open this select menu</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
              </Form.Select>
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="destinationAccount"
            >
              <Form.Label>Send to</Form.Label>
              <InputGroup>
                <Form.Select>
                  <option>Select Contact</option>
                  <option value="1">One</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
                </Form.Select>
                <Button variant="outline-primary">New Contact</Button>
              </InputGroup>
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="sendAmount"
            >
              <Form.Label>You Send</Form.Label>
              <InputGroup>
                <InputGroup.Text>CAD</InputGroup.Text>
                <Form.Control type="number"/>
              </InputGroup>
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="sendAmount"
            >
              <Form.Label>Recipient Receives</Form.Label>
              <InputGroup>
                <InputGroup.Text>PKR</InputGroup.Text>
                <Form.Control type="number" disabled value={44.4}/>
              </InputGroup>
            </Form.Group>
          </Form>
          <hr/>
          <div>
            <div style={{display: 'flex',justifyContent: 'space-between'}}>
              <span>Amount To Be Converted</span> 
              <span>$9.22 CAD</span>
            </div>
            <div style={{display: 'flex',justifyContent: 'space-between'}}>
              <span>Exchange Rate</span> 
              <span style={{color: '#1A6B54'}}>$1.00 CAD = 205.47 PKR</span>
            </div>
            <div style={{display: 'flex',justifyContent: 'space-between'}}>
              <span>Amount To Be Received</span> 
              <span>205.47 PKR</span>
            </div>
            <div style={{display: 'flex',justifyContent: 'space-between'}}>
              <span>Transaction Fee</span> 
              <span>$8.22 CAD</span>
            </div>
            <div style={{display: 'flex',justifyContent: 'space-between', fontWeight: '600'}}>
              <span>Amount To Be Debited</span> 
              <span>$9.22 CAD</span>
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

const useMultistepForm = (steps) => {
  const [ curIndex, setCurIndex ] = useState(0);
}

export default SendMoneyModal;