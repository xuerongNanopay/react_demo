import { useEffect, useState, useRef } from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import css from './MainMenu.module.css'

import { BsBell } from "react-icons/bs";

import SideNav from 'component/ui/side_nav/SideNav';
import nbp_logo from 'image/nbp_foree_remittance_logo.svg'
import TransactionMenu from '../transaction-menu/TransactionMenu';
import ContactMenu from '../contact-menu/ContactMenu';
import NotificationMenu from '../notification-menu/NotificationMenu';
import DashboardMenu from '../dashboard-menu/DashboardMenu';
import AccountMenu from '../account-menu/AccountMenu';

const MOBILE_SIZE = 997;
const MainMenu = () => {
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
              <nav className={`${css.menu}`} style={{height: '100%'}}>
                <SideNav style={{width: '100%', height: '100%'}}/>
              </nav>
            </div>
          </div>
        </aside>
        <main>
          <Routes>
            <Route index element={<Navigate to="transaction"/>}/>
            <Route path="transaction" element={<TransactionMenu />}/>
            <Route path="contact" element={<ContactMenu />}/>
            <Route path="notification" element={<NotificationMenu />}/>
            <Route path="dashboard" element={<DashboardMenu/>}/>
            <Route path="account" element={<AccountMenu/>}/>
          </Routes>
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


export default MainMenu