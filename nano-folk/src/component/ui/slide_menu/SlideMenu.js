// Slide Menu with support of sub-menus
// This UI component needs NavLink. TODO: need to make it more general.
import css from './SlideMenu.module.css'
import { 
  NavLink,
  Link
} from "react-router-dom";

import { BsBell, BsSend, BsBank, BsGrid1X2, BsPeople, BsCardText } from "react-icons/bs";

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
        name: 'AAAAAAA',
        to: '/signIn',
        icon: <BsBank/>
      }
    ]
  },
  {
    id: 'sendMoney',
    name: 'Send Money',
    to: '/signIn',
    icon: <BsBank/>,
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
]

const SideNav = ({menus=MENU_DEMO}) => {
  const [ test, setTest ] = useState(false);
  return (
    <>
    <div 
      style={{
        height: '100vh',
        width: '350px',
      }}
    >
      <div
        className={`${css.sideNav}`}
        style={{
          height: '100%',
          width: '100%',
          overflowY: 'scroll'
        }}
      >
        <Menu />
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

const Menu = () => {
  return (
    <nav className={`${css.menu}`}>
      <ul>
        <MenuItemController item={MENU_DEMO[0]} />
        <MenuItemController item={MENU_DEMO[1]} />
      </ul>
    </nav>
  )
}

const MenuItemController = ({item}) => {  
  return (
    <div
      style={{
        margin: '0.5rem 0 0.5rem'
      }}
    >
      { !! item.subMenus ?  <SubMenu subMenu={item} /> : <NavItem navItem={item} /> }
    </div>
  )
}

const NavItem = ({navItem}) => {
  const onNav = e => {
    e.stopPropagation();
    e.preventDefault();
  }
  return (
    <>
      <a
        href="/#"
        style={{
          display: 'flex',
          alignItems: 'center'
        }}
        className={`${css.selectableItem} ${css.animePaddingLeft} ${css.navItem}`}
        onClick={onNav}
      >
        {navItem.icon}
        <h5 style={{marginLeft: '0.5rem'}}>{navItem.name}</h5>
      </a>
    </>
  )
}

const SubMenu = ({subMenu}) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleSubmenu = e => {
    e.stopPropagation();
    setIsOpen(pre => !pre);
  }
  return (
    <div
      className={`${css.subMenuItemMain}`}
    >
      <div 
        className={`${css.subMenuItemHeader} ${css.selectableItem}  ${isOpen ? css.subMenuItemHeaderOpen : ''}`} 
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
          <li 
            className={`${css.selectableItem}`} 
            style={{paddingLeft: '1.2rem'}}>
              <SubMenuNavItem menu={subMenu.subMenus[0]}/>
          </li>

        </ul>
      </div>
    </div>
  )
}

const SubMenuNavItem = ({menu}) => {
  const onNav = e => {
    e.stopPropagation();
    e.preventDefault();
  }
  return (
    <>
      <a
        href="/#"
        style={{
          display: 'flex',
          alignItems: 'center'
        }}
        className={`${css.subMenuItem} ${css.selectableItem} ${css.animePaddingLeft}`}
        onClick={onNav}
      >
        {menu.icon}
        <span style={{marginLeft: '0.5rem'}}>{menu.name}</span>
      </a>
    </>
  )
}

//TODO: 
// 1. need to process menus, add parent - children relation ship
// 2. forward and back. try change elements now.

const IconArrowDown = (<i className={`${css.iconArrow} ${css.iconArrowDown}`}/>);
const IconArrowUp = (<i className={`${css.iconArrow} ${css.iconArrowUp}`}/>);
export default SideNav