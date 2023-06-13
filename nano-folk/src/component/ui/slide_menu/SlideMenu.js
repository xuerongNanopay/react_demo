// Slide Menu with support of sub-menus
// This UI component needs NavLink. TODO: need to make it more general.
import css from './SlideMenu.module.scss'
import { 
  NavLink,
  Link
} from "react-router-dom";

import { BsBell } from "react-icons/bs";
import { FaChevronDown } from "react-icons/fa"
import { MdClose } from 'react-icons/md'

import { useState } from 'react'

//menus is a list

// [
//   {name: 'transaction', element, to: 'to', submenus: []}
//   {name: 'login', to: '/'}
// ]
// redirection should only trigger when

const MENU_DEMO = [
  {
    id: 'dashboard',
    name: 'Dashboard',
    to: '/signIn',
    handler: () => {console.log("TODO: handler")},
    subMenus: [
      {
        id: 'contacts',
        name: 'Contacts',
        to: '/signIn',
      }
    ]
  },
  {
    id: 'sendMoney',
    name: 'Send Money',
    to: '/signIn',
    subMenus: undefined
  },
  {
    id: 'contacts',
    name: 'Contacts',
    to: '/signIn',
    subMenus: undefined
  },
  {
    id: 'myAccounts',
    name: 'My Accounts',
    to: '/signIn',
    subMenus: undefined
  },
  {
    id: 'userProfile',
    name: 'User Name',
    to: undefined,
    next: [
      {
        id: 'changePassword',
        name: 'Change Password',
        to: '/changePassword',
        subMenus: undefined
      }
    ]
  }
]

const SlideNav = ({menus=MENU_DEMO}) => {
  const [ test, setTest ] = useState(false);
  return (
    <>
    <div 
      className={`${css.slideMenu}`}
      style={{
        height: '100vh'
      }}
    >
      <div 
        style={{
          position: 'relative',
          width: '300px',
          height: '100%',
          backgroundColor: '#b37feb',
          overflowY: 'scroll'
        }}
      >
        {/* { test ? <Slide style={{backgroundColor: 'blue'}} /> : <Slide style={{backgroundColor: 'red'}} />} */}
        <Slide 
          // className={test? css.show : ""}
        >
        </Slide>
        {/* <Slide 
          style={{backgroundColor: 'red'}} 
          className={test? css.show : ""}
        >
          red
        </Slide> */}
      </div>
    </div>
      <button 
        type="button"
        style={{
          position: 'fixed',
          right: '50px',
          top: '50px'
        }}
        onClick={() => setTest(!test)}
      >
        Testaa
      </button>
    </>
  )
}


const Slide = ({style, className, children}) => {
  return (
    <div
      // style={{
      //   ...style
      // }}
      className={`${className} ${css.slide}`}
    >
      <Menu></Menu>
    </div>
  )
}

const Menu = () => {
  return (
    <nav className={`${css.menu}`}>
      <ul>
        <MenuItem item={MENU_DEMO[0]} >1</MenuItem>
        <MenuItem>2</MenuItem>
        <MenuItem>3</MenuItem>
      </ul>
    </nav>
  )
}

const MenuItem = ({children, item}) => {
  let navItem = (<li><h5>AAAA</h5></li>)
  
  return (
    <div
      style={{
        margin: '0.5rem 0 0.5rem'
      }}
    >
      <SubMenuItem />
    </div>
  )
}

const SubMenuItem = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleSubmenu = e => {
    console.log(e)
    e.stopPropagation();
    setIsOpen(!isOpen);
  }
  return (
    <div
      className={`${css.subMenuItemMain}`}
    >
      <div 
        className={`${css.subMenuItemHeader} ${css.selectableItem} ${isOpen ? css.subMenuItemHeaderOpen : ''}`} 
        onClick={toggleSubmenu}
      >
        <h5>AAA</h5> 
        {isOpen ? IconArrowUp : IconArrowDown}
      </div>
      <div className={`${css.subMenuItemWrapper} ${isOpen ? css.subMenuItemWrapperInnerOpen : ''}`}>
        <ul 
          className={`${css.subMenuItemWrapperInner}`}
          // style={{
          //   paddingLeft: '1rem'
          // }}
        >
          {/* <div className={`${css.subMenuItemWrapperInner}`}>Expandable content</div> */}
          <li className={`${css.selectableItem}`} style={{paddingLeft: '1.2rem', marginTop: '0.3rem'}}><p>222</p></li>
          <li className={`${css.selectableItem}`} style={{paddingLeft: '1.2rem', marginTop: '0.3rem'}}><p>222</p></li>
          <li className={`${css.selectableItem}`} style={{paddingLeft: '1.2rem', marginTop: '0.3rem'}}><p>222</p></li>
          <li className={`${css.selectableItem}`} style={{paddingLeft: '1.2rem', marginTop: '0.3rem'}}><p>222</p></li>
        </ul>
      </div>
    </div>
  )
}

const slideItem = ({menu}) => {
  console.log(menu)
  return (
    <>
      <NavLink></NavLink>
    </>
  )
}

// Menu control is responsible for decision on which menu should be should up.
const SlideController = ({menus}) => {
  return (
    <>
      <p>This is MenuController</p>
    </>
  )
}

//TODO: 
// 1. need to process menus, add parent - children relation ship
// 2. forward and back. try change elements now.

const IconArrowDown = (<i className={`${css.iconArrow} ${css.iconArrowDown}`}/>);
const IconArrowUp = (<i className={`${css.iconArrow} ${css.iconArrowUp}`}/>);
export default SlideNav