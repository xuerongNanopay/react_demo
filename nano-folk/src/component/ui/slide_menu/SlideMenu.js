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
        subMenus: undefined
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
          backgroundColor: '#b5f5ec',
          overflow: 'hidden'
        }}
      >
        {/* { test ? <Slide style={{backgroundColor: 'blue'}} /> : <Slide style={{backgroundColor: 'red'}} />} */}
        <Slide 
          style={{backgroundColor: '#b37feb'}} 
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
      style={{
        ...style
      }}
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
    <>
      <SubMenuItem />
    </>
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
      style={{listStyle: 'none'}}
      className={`${css.subMenuItem}`}
    >
      <div className={`${css.subMenuItemHeader}`} onClick={toggleSubmenu}><h5>AAA</h5> {isOpen ? CloseIcon : DownArrowIcon}</div>
      <div className={`${css.subMenuItemWrapper} ${isOpen ? css.subMenuItemWrapperInnerOpen : ''}`}>
        <ul 
          className={`${css.subMenuItemWrapperInner}`}
          style={{
            paddingLeft: '1rem'
          }}
        >
          {/* <div className={`${css.subMenuItemWrapperInner}`}>Expandable content</div> */}
          <li><p>222</p></li>
          <li><p>222</p></li>
          <li><p>222</p></li>
          <li><p>222</p></li>
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

const DownArrowIcon = (<svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 448 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M207.029 381.476L12.686 187.132c-9.373-9.373-9.373-24.569 0-33.941l22.667-22.667c9.357-9.357 24.522-9.375 33.901-.04L224 284.505l154.745-154.021c9.379-9.335 24.544-9.317 33.901.04l22.667 22.667c9.373 9.373 9.373 24.569 0 33.941L240.971 381.476c-9.373 9.372-24.569 9.372-33.942 0z"></path></svg>);
const CloseIcon =(<svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" height="22" width="22" xmlns="http://www.w3.org/2000/svg"><path fill="none" d="M0 0h24v24H0z"></path><path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"></path></svg>);
export default SlideNav