// Slide Menu with support of sub-menus
// This UI component needs NavLink. TODO: need to make it more general.
import css from './SlideMenu.module.scss'
import { 
  NavLink,
  Link
} from "react-router-dom";

import { BsBell } from "react-icons/bs";

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
    subMenus: undefined
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
  // {
  //   id: 'userProfile',
  //   name: 'User Name',
  //   to: undefined,
  //   subMenus: [

  //   ]
  // }
]

const SlideMenu = ({menus=MENU_DEMO}) => {
  return (
    <div className={`${css.slideMenu}`}>
      <div 
        style={{
          width: '250px',
          height: '100vh',
          backgroundColor: '#b5f5ec'
        }}
      >
        {
          menus.map(menu => {
            
          })
        }
      </div>
    </div>
  )
}


const Menu = ({parent, menus}) => {
  return (
    <>
      <p>This is menu</p>
    </>
  )
}

const MenuItem = ({menu}) => {
  return (
    <>
      <NavLink></NavLink>
    </>
  )
}

const MenuController = () => {
  return (
    <>
      <p>This is MenuController</p>
    </>
  )
}

export default SlideMenu