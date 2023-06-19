// Slide Menu with support of sub-menus
// This UI component needs NavLink. TODO: need to make it more general.
import css from './SideNav.module.css'
import { 
  useNavigate
} from "react-router-dom";

import { BsBank } from "react-icons/bs";

import { useState } from 'react'

const MENU_DEMO = [
  {
    id: 'dashboard',
    name: 'Dashboard',
    to: '/signIn',
    icon: <BsBank/>,
    handler: () => {console.log("TODO: handler")},
    subMenus: [
      {
        id: 'rate',
        name: 'Rate',
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
    icon: <BsBank/>,
    subMenus: undefined
  },
  {
    id: 'myAccounts',
    name: 'My Accounts',
    to: '/signIn',
    icon: <BsBank/>,
    subMenus: undefined
  },
  {
    id: 'transactions',
    name: 'Transactions',
    to: '/signIn',
    icon: <BsBank/>,
    subMenus: undefined
  }
]

const SideNav = ({menus=MENU_DEMO, style}) => {
  return (
    <>
    <div 
      style={{
        height: style?.height ? style.height : '100vh',
        width: style?.width ? style.width : '350px',
      }}
    >
      <div
        className={`${css.sideNav}`}
        style={{
          height: '100%',
          width: '100%',
          overflowY: 'scroll'
        }}
        onScroll={e => e.stopPropagation()}
      >
        <Menu menus={MENU_DEMO}/>
      </div>
    </div>
    </>
  )
}

const Menu = ({menus}) => {
  return (
    <nav className={`${css.menu}`}>
      <ul>
        {
          menus.map(menu => {
            return <MenuItemController key={menu.id} item={menu} />
          })
        }
      </ul>
    </nav>
  )
}

const MenuItemController = ({item}) => {  
  return (
    <div>
      { !! item.subMenus ?  <SubMenu subMenu={item} /> : <NavItem navItem={item} /> }
    </div>
  )
}

const NavItem = ({navItem}) => {
  const navigate = useNavigate();

  const onNav = e => {
    e.stopPropagation();
    e.preventDefault();
    navigate(navItem.to);
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
        className={`
          ${css.subMenuItemHeader} 
          ${css.selectableItem}  
          ${!isOpen ? css.animePaddingLeft : ''}
          ${isOpen ? css.subMenuItemHeaderOpen : ''}
          `} 
        onClick={toggleSubmenu}
      >
        <h5
          style={{
            display: 'flex',
            alignItems: 'center'
          }}
        >
          {subMenu.icon}
          <span style={{marginLeft: !!subMenu.icon ? '0.5rem' : '0rem'}}>{subMenu.name}</span>
        </h5> 
        {isOpen ? IconArrowUp : IconArrowDown}
      </div>
      <div className={`${css.subMenuItemWrapper} ${isOpen ? css.subMenuItemWrapperInnerOpen : ''}`}>
        <ul 
          className={`${css.subMenuItemWrapperInner}`}
        >
          <li 
            className={`${css.selectableItem}`} 
            style={{paddingLeft: '1.2rem'}}>
              {
                subMenu.subMenus.map((subMenuItem) => <SubMenuNavItem key={subMenu.id + '.' + subMenuItem.id} parent={subMenu} subMenuItem={subMenuItem}/>)
              }
          </li>
        </ul>
      </div>
    </div>
  )
}

const SubMenuNavItem = ({subMenuItem}) => {
  const navigate = useNavigate();
  const onNav = e => {
    e.stopPropagation();
    e.preventDefault();
    navigate(subMenuItem.to);
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
        {subMenuItem.icon}
        <span style={{marginLeft: subMenuItem.icon ? '0.5rem' : '0rem'}}>{subMenuItem.name}</span>
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