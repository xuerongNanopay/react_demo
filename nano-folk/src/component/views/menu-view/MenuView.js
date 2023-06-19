import { useEffect, useState, useRef } from 'react'
import css from './MenuView.module.css'

import { BsBell } from "react-icons/bs";

import SideNav from 'component/ui/side_nav/SideNav';
import nbp_logo from 'image/nbp_foree_remittance_logo.svg'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import InputGroup from 'react-bootstrap/InputGroup'

const MOBILE_SIZE = 997;
const MenuView = () => {
  const [ showNavSideBar, setShowNavSideBar ] = useState(false);
  const [ toggleNavSideBar, setToggleNavSiedBar] = useState(false);
  const [ nextNavSideBarMenu, setNextNavSideBarMenu ] = useState(false);

  const navSideBarRef = useRef();
  const navSideBarToggleButtonRef = useRef();

  useEffect( _ => {
    const handleResize = _ => {
      if ( window.innerWidth < MOBILE_SIZE ) {
        setShowNavSideBar(true);
      } else {
        setShowNavSideBar(false)
      }
    }
    handleResize();
    window.addEventListener('resize', handleResize)
    return _ => window.removeEventListener('resize', handleResize)
  })

  //TODO: component sideNavBar, this effect should only attach when sideNavBar is available
  useEffect( _ => {
    const handleOutsideNavSidebarClick = (e) => {
      if ( ! showNavSideBar ) return;
      if ( ! toggleNavSideBar ) return;
      if ( navSideBarToggleButtonRef.current.contains(e.target) ) return;
      if ( navSideBarRef.current.contains(e.target) ) return;
      if ( toggleNavSideBar ) setToggleNavSiedBar(false);
    }
    window.addEventListener('click', handleOutsideNavSidebarClick);
    return _ => window.removeEventListener('click', handleOutsideNavSidebarClick);
  })

  useEffect( _ => {
    if ( showNavSideBar && toggleNavSideBar ) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'visible';
    }

    return () => {
      document.body.style.overflow = 'visible'
    }
  }, [showNavSideBar, toggleNavSideBar])

  const sendMoney = e => {
    e.preventDefault();
    
    console.log('Send Money');
  }


  return (
    <div className={`${css.container}`}>
      <nav className={`${css.navbar} ${css.navbarFixedTop}`}>
        <div className={`${css.navBarInner}`}>
          <div className={`${css.navBarItems}`}>
            {
              showNavSideBar ? 
                <button 
                  onClick ={_ => setToggleNavSiedBar((cur) => !cur)}
                  ref={navSideBarToggleButtonRef}
                >
                  <HambugerIcon/>
                </button> : <></>
            }
            <img src={nbp_logo} alt="logo"/>
          </div>
          <div className={`${css.navBarItems} ${css.navBarItemsRight}`}>
            <a href='/#' className={`${css.navBarItem}`}><BsBell size={22} /></a>
            <a href='/#' className={`${css.navBarItem}`}>Drop Down</a>
          </div>
        </div>
        <div className={`${css.navSideBarBackDrop} ${toggleNavSideBar ? css.navSideBarBackDropShow : ''}`}></div>
        {
          showNavSideBar ? 
          (
            <div ref={navSideBarRef} className={`${css.navSideBar} ${toggleNavSideBar? css.navSideBarShow : ''}`}>
              <div className={`${css.navSideBarBrand}`}>
                <h4>NBP</h4>
                <button onClick ={_ => setToggleNavSiedBar((cur) => !cur)}>
                  <CloseIcon/>
                </button>
              </div>
              <div className={`${css.navSideBarItems} ${ nextNavSideBarMenu ? css.navSideBarItemSecond : ''}`}>
                <div className={`${css.navSideBarItem} ${css.menu}`}>
                  <button 
                    type='button'
                    onClick={_ => setNextNavSideBarMenu(true)}
                  >Go next -----</button>
                  <h1>111bbbbbbbbbbbbbbbbbbbbbbbbbbbbbb</h1>
                  <h1>bbbbb</h1>
                  <h1>bbbbb</h1>
                  <h1>bbbbb</h1>
                  <h1>bbbbb</h1>
                  <h1>bbbbb</h1>
                  <h1>bbbbb</h1>
                  <h1>bbbbb</h1>
                  <h1>bbbbb</h1>
                  <h1>bbbbb</h1>
                </div>
                <div className={`${css.navSideBarItem} ${css.menu}`}>
                  <button 
                    type='button'
                    onClick={_ => setNextNavSideBarMenu(false)}
                  >Go Pre -----</button>
                  <h1>111ZZZZZZ</h1>
                  <h1>ZZZZZZ</h1>
                  <h1>ZZZZZZ</h1>
                  <h1>ZZZZZZ</h1>
                  <h1>ZZZZZZ</h1>
                  <h1>ZZZZZZ</h1>
                  <h1>ZZZZZZ</h1>
                  <h1>ZZZZZZ</h1>
                  <h1>ZZZZZZ</h1>
                  <h1>ZZZZZZ</h1>
                </div>
              </div>
            </div>
          )
          :<></>
        }
      </nav>
      <div
        className={`${css.docWrapper}`}
      >
        <aside className={`${css.sidebarContainer}`}>
          <div className={`${css.sidebarViewpoint}`}>
            <div className={`${css.sidebarViewpointAdjustment}`}>
              <nav className={`${css.menu}`}>
                <SideNav style={{width: '100%'}}/>
              </nav>
            </div>
          </div>
        </aside>
        <main>
          <h1>#####</h1>
          <SendMoneyModalButton></SendMoneyModalButton>
          <h1>AAAA</h1>
          <h1>AAAA</h1>
          <h1>AAAA</h1>
          <h1>AAAA</h1>
          <h1>AAAA</h1>
          <h1>AAAA</h1>
          <h1>AAAA</h1>
          <h1>AAAA</h1>
          <h1>AAAA</h1>
          <h1>AAAA</h1>
          <h1>AAAA</h1>
          <h1>AAAA</h1>
          <h1>AAAA</h1>
          <h1>AAAA</h1>
          <h1>AAAA</h1>
          <h1>AAAA</h1>
          <h1>AAAA</h1>
          <h1>AAAA</h1>
          <h1>AAAA</h1>
          <h1>AAAA</h1>
          <h1>AAAA</h1>
          <h1>AAAA</h1>
          <h1>AAAA</h1>
          <h1>AAAA</h1>
          <h1>AAAA</h1>
          <h1>AAAA</h1>
          <h1>AAAA</h1>
          <h1>AAAA</h1>
        </main>
      </div>
    </div>
  )
}

const NavSideBar = () => {
  return (
    <div className={`${css.navSideBar}`}>
      <h1>TTTDDDDD</h1>
      <h1>TTTDDDDD</h1>
      <p>TTTDDDDD</p>
      <h1>TTTDDDDD</h1>
      <h1>TTTDDDDD</h1>
    </div>
  )
}

const HambugerIcon = ({size}) => {
  return (
    <svg 
      stroke="currentColor" 
      fill="currentColor" 
      strokeWidth="0" 
      viewBox="0 0 512 512" 
      height={!!size ? size: "2rem"}
      width={!!size ? size: "2rem"}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M32 96v64h448V96H32zm0 128v64h448v-64H32zm0 128v64h448v-64H32z">
      </path>
    </svg>
  )
}

const CloseIcon = () => {
  return (
    <svg 
      viewBox="0 0 15 15" 
      width="21" 
      height="21"
    >
      <g 
        stroke="#8d949e" 
        strokeWidth="1.2"
      >
        <path d="M.75.75l13.5 13.5M14.25.75L.75 14.25"></path>
      </g>
    </svg>
  )
}

const SendMoneyModalButton = _ => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Send Money
      </Button>
      <SendMoneyModal show={show} handleClose={handleClose}/>
    </>
  )
}
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

// const BellIcon = () => {
//   return (<svg width="100%" viewBox="0 0 16 20" fill="/*%FILL%*/ #FFFFFF" xmlns="http://www.w3.org/2000/svg">
//   <path d="M8 20C9.1 20 10 19.1 10 18H6C6 19.1 6.9 20 8 20ZM14 14V9C14 5.93 12.37 3.36 9.5 2.68V2C9.5 1.17 8.83 0.5 8 0.5C7.17 0.5 6.5 1.17 6.5 2V2.68C3.64 3.36 2 5.92 2 9V14L0 16V17H16V16L14 14ZM12 15H4V9C4 6.52 5.51 4.5 8 4.5C10.49 4.5 12 6.52 12 9V15Z"></path>
//   </svg>)
// }

export default MenuView