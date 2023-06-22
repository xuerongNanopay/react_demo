//TODO: thinking maybe using Class component is a better approach for modal?
import { useState, useReducer, useEffect } from 'react';

import { useNavigate } from 'react-router-dom';

import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import InputGroup from 'react-bootstrap/InputGroup'
import ProgressBar from 'react-bootstrap/ProgressBar';
import Card from 'react-bootstrap/Card';

import css from './SendMoneyModal.module.css'

const TransferDetails = ({state, dispatch}) => {
  const addNewAccount = e => {
    alert("TODO: addNewAccount");
  }
  const addNewContact = e => {
    alert("TODO: addNewAccount");
  }
  return (
    <>
      <h4 style={{textAlign: 'center'}}>Transfer Details</h4>
      <Form>
        <Form.Group className="mb-3" 
          controlId="sourceAccount"
        >
          <Form.Label>From</Form.Label>
          <InputGroup>
            <Form.Select 
              value={state.sourceAccount}
              onChange={e => dispatch({type: 'setSourceAccount', value: e.target.value})}
            >
              <option value="" disabled={state.sourceAccount !== ""}>Open this select menu</option>
              <option value="sa1">One dasfdffffffffff adsffffff adsffff ff ne dasfdffffffffff adsffffff adsffff ff ne dasfdffffffffff adsffffff adsffff ff</option>
              <option value="sa2">Two</option>
              <option value="sa3">Three</option>
            </Form.Select>
            <Button variant="outline-primary" type="button" onClick={addNewAccount}>New Account</Button>
          </InputGroup>
        </Form.Group>
        <Form.Group
          className="mb-3"
          controlId="destinationAccount"
        >
          <Form.Label>Send to</Form.Label>
          <InputGroup>
            <Form.Select
            value={state.destinationAccount}
            onChange={e => dispatch({type: 'setDestinationAccount', value: e.target.value})}
            >
              <option disabled={state.destinationAccount !== ""}>Select Contact</option>
              <option value="da1">One</option>
              <option value="da2">Two</option>
              <option value="da3">Three</option>
            </Form.Select>
            <Button variant="outline-primary" type="button" onClick={addNewContact}>New Contact</Button>
          </InputGroup>
        </Form.Group>
        <Form.Group
          className="mb-3"
          controlId="sendAmount"
        >
          <Form.Label>You Send</Form.Label>
          <InputGroup>
            <InputGroup.Text>CAD</InputGroup.Text>
            <Form.Control type="number" value={state.amount} onChange={e => dispatch({type: 'setAmount', value: e.target.value})}/>
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
          <span>$111119.22 CAD</span>
        </div>
      </div>
    </>
  )
}

const TransactionPurpose = ({state, dispatch}) => {
  return (
    <>
      <h4 style={{textAlign: 'center'}}>Transaction Purpose</h4>
      <Form>
        <Form.Group className="mb-3" 
          controlId="transactionPurpose"
        >
          <Form.Label>Purpose</Form.Label>
          <Form.Select
            value={state.transactionPurpose}
            onChange={e => dispatch({type: 'setTransactionPurpose', value: e.target.value})}
          >
            <option disabled={state.transactionPurpose !== ""}>Choose a transaction purpose</option>
            <option value="tp1">One</option>
            <option value="tp2">Two</option>
            <option value="tp3">Three</option>
          </Form.Select>
        </Form.Group>
      </Form>
    </>
  )
}

const SendMoneyReview = ({state, dispatch}) => {
  return (
    <>
      <h4 style={{textAlign: 'center'}}>Review Your Transfer</h4>
      <Card.Body className={`${css.sendMoneyReviewTransfer}`}>
        <div style={{display: 'flex',justifyContent: 'space-between'}}>
          <span>From</span> 
          <span>TODO: From Acc</span>
        </div>
        <div style={{display: 'flex',justifyContent: 'space-between'}}>
          <span>To</span> 
          <span >TODO: To acc</span>
        </div>
        <div style={{display: 'flex',justifyContent: 'space-between'}}>
          <span>Amount Debited</span> 
          <span style={{color: '#1A6B54'}}>$19.22 CAD</span>
        </div>
        <div style={{display: 'flex',justifyContent: 'space-between'}}>
          <span>Amount Recipient Receives</span> 
          <span style={{color: '#1A6B54'}}>2,260.17 PKR</span>
        </div>
      </Card.Body>
      <Card.Body className={`${css.sendMoneyReviewDetail}`}>
        <Card.Header><h6>Details</h6></Card.Header>
        <div style={{display: 'flex',justifyContent: 'space-between'}}>
          <span>Transaction Fee</span> 
          <span >$8.22 CAD</span>
        </div>
        <div style={{display: 'flex',justifyContent: 'space-between'}}>
          <span>Reference Number</span> 
          <span>NP001547298413</span>
        </div>
        <div style={{display: 'flex',justifyContent: 'space-between'}}>
          <span>FX Rate Applied</span> 
          <span>$1.00 CAD : 205.47 PKR</span>
        </div>
      </Card.Body>
    </>
  )
}

function sendMoneyReducer(state, action) {
  switch ( action.type ) {
    case 'setSourceAccount':
      return { ...state, sourceAccount: action.value };
    case 'setDestinationAccount':
      return { ...state, destinationAccount: action.value };
    case 'setAmount':
      return { ...state, amount: action.value };
    case 'setTransactionPurpose':
      return { ...state, transactionPurpose: action.value };
    case 'cleanState':
      return Initial_State;
    default:
      return state;
  }
}

const Initial_State = {
  sourceAccount: "",
  destinationAccount: "",
  amount: 0.0,
  currency: 'CAD',
  transactionPurpose: "",
  transactionQueryResponse: null
}

const SendMoneyModal = ({show, handleClose}) => {

  const [state, dispatch] = useReducer(sendMoneyReducer, {...Initial_State});

  const flows = [<TransferDetails state={state} dispatch={dispatch}/>, <TransactionPurpose state={state} dispatch={dispatch}/>, <SendMoneyReview />];

  const { step, steps, curIndex, goTo, isFirstStep, isLastStep, back, next } = useMultistepForm(flows);

  const navigate = useNavigate();


  useEffect(() => {
    if ( curIndex === 0 && show ) {
      console.log('SendMoneyModal Fetch accounts');
    }
  }, [curIndex, show])


  const handleSubmit = async _ => {
    //TODO: frozen button
    // do submit
    // spinning page
    // clean state and close modal
    closeModal();
  }

  //Clean state and reset form step to 0
  const closeModal = _ => {
    goTo(0);
    handleClose();
    dispatch({type: 'cleanState'});
    navigate('/mainMenu/transaction');
  }

  return (
    <>
      <Modal 
        show={show} 
        onHide={closeModal} 
        centered
        backdrop='static'
        fullscreen='sm-down'
        size='lg'
        className={`${css.sendMoneyModalContainer}`}
      >
        <Modal.Header closeButton>
          <Modal.Title>Send Money</Modal.Title>
        </Modal.Header>
        <ProgressBar className={`${css.progressBarRefactor}`} min={0} max={steps.length} now={curIndex+1} />
        <Modal.Body style={{minHeight: '60vh', overflowY: 'scroll'}}>
          {step}
        </Modal.Body>
        <Modal.Footer>
          { !isFirstStep && <Button variant="primary" onClick={back}>back</Button> }
          { !isLastStep && <Button variant="primary" onClick={next}>next</Button> }
          { isLastStep && <Button variant="primary" onClick={handleSubmit}>submit</Button> }
        </Modal.Footer>
      </Modal>
    </>
  );
}

const useMultistepForm = (steps) => {
  const [ curIndex, setCurIndex ] = useState(0);
  const next = () => {
    setCurIndex(i => {
      if ( i >= steps.length-1 ) return i;
      return i+1; 
    })
  }

  const back = () => {
    setCurIndex(i => {
      if ( i <= 0 ) return i;
      return i-1;
    })
  }

  const goTo = (index) => {
    if ( index >= 0 && index < steps.length) {
      setCurIndex(index);
      return;
    }
    else console.warn("useMultistepForm go to unreachable index: " + index);
  }

  return {
    curIndex,
    step: steps[curIndex],
    steps,
    isFirstStep: curIndex === 0,
    isLastStep: curIndex === steps.length - 1,
    next,
    back,
    goTo
  }
}

export default SendMoneyModal;
export const useSendMoneyModal = _ => {
  const [show, setShow] = useState(false);
  const handleClose = (e) => {
    setShow(false)
  };
  const handleShow = () => setShow(true);
  const Modal = <SendMoneyModal show={show} handleClose={handleClose}/>

  return [
    handleShow,
    Modal
  ]
}