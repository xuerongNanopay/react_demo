import { useEffect, useState, useRef } from 'react'
import css from './MenuView.module.css'

const MOBILE_SIZE = 997;
const MenuView = () => {
  const [ showNavSideBar, setShowNavSideBar ] = useState(false);
  const [ toggleNavSideBar, setToggleNavSiedBar] = useState(false);
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

  useEffect( _ => {
    const handleOutsideNavSidebarClick = (e) => {
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
            <a href='/#' className={`${css.navBarItem}`}>Demo1</a>
            <a href='/#' className={`${css.navBarItem}`}>Demo2</a>
          </div>
          <div className={`${css.navBarItems} ${css.navBarItemsRight}`}>
            <a href='/#' className={`${css.navBarItem}`}>Demo4</a>
            <a href='/#' className={`${css.navBarItem}`}><h1>Demo5</h1></a>
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
              <div className={`${css.navSideBarItems}`}>
                <div className={`${css.navSideBarItem} ${css.menu}`}>
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
                  <h1>bbbbb</h1>
                  <h1>bbbbb</h1>
                  <h1>bbbbb</h1>
                  <h1>bbbbb</h1>
                  <h1>bbbbb</h1>
                  <h1>bbbbb</h1>
                  <h1>bbbbb</h1>
                  <h1>bbbbb</h1>
                  <h1>bbbbb</h1>
                  <h1>bbbbb</h1>
                  <h1>bbbbb</h1>
                  <h1>bbbbb</h1>
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
                <ul>
                  <li><h1>GGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGG</h1></li>
                  <li><h1>AAAAAA</h1></li>
                  <li><h1>AAAAAA</h1></li>
                  <li><h1>AAAAAA</h1></li>
                  <li><h1>AAAAAA</h1></li>
                  <li><h1>AAAAAA</h1></li>
                  <li><h1>AAAAAA</h1></li>
                  <li><h1>AAAAAA</h1></li>
                  <li><h1>AAAAAA</h1></li>
                  <li><h1>AAAAAA</h1></li>
                  <li><h1>AAAAAA</h1></li>
                  <li><h1>AAAAAA</h1></li>
                  <li><h1>AAAAAA</h1></li>
                  <li><h1>AAAAAA</h1></li>
                  <li><h1>AAAAAA</h1></li>
                  <li><h1>AAAAAA</h1></li>
                  <li><h1>AAAAAA</h1></li>
                  <li><h1>AAAAAA</h1></li>
                  <li><h1>AAAAAA</h1></li>
                  <li><h1>AAAAAA</h1></li>
                  <li><h1>AAAAAA</h1></li>
                  <li><h1>AAAAAA</h1></li>
                  <li><h1>BBBBBB</h1></li>
                  <li><h1>BBBBBB</h1></li>
                  <li><h1>BBBBBB</h1></li>
                  <li><h1>BBBBBB</h1></li>
                  <li><h1>BBBBBB</h1></li>
                  <li><h1>BBBBBB</h1></li>
                  <li><h1>BBBBBB</h1></li>

                </ul>
              </nav>
            </div>
          </div>
        </aside>
        <main>
          <h1>#####</h1>
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

export default MenuView