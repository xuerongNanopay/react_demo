import nbpHeadIcon from 'image/nbp-head-icon.svg'
import nbp_logo from 'image/nbp_foree_remittance_logo.svg'
import { GiHamburgerMenu } from "react-icons/gi"
import { TbMathGreater, TbMathLower } from "react-icons/tb"
import { BsBell, BsSend, BsBank, BsGrid1X2, BsPeople, BsCardText } from "react-icons/bs";
import { useState, useEffect, useRef } from 'react'
import { 
  NavLink,
  Link
} from "react-router-dom";
import css from './index.module.scss'

const UserApp = () => {
  const [ showNav, setShowNav ] = useState(true);
  const [ toggleNav, setToggleNav ] = useState(false);
  const navRef = useRef();
  const toggleRef = useRef();

  useEffect(() => {
    const hander = e => {
      if ( toggleRef.current.contains(e.target) ) return;
      if ( ! navRef.current.contains(e.target) ) {
        setShowNav(false)
      }
    }
    window.addEventListener("mouseup", hander)
    return _ => {
      window.removeEventListener("mouseup", hander)
    }
  }, [])

  const toggleMenu = _ => {
    setShowNav(!showNav)
  }

  return (
    <div className="container-fluid vh-100">
      <div className={`${css.flexContainer}`}>
        <header 
          className="row d-md-none"
        >
          <div className="w-100 py-3 d-flex justify-content-between">
            <div ref={toggleRef}>
            <GiHamburgerMenu 
              size={35} 
              className={css.showMenu}
              onClick={toggleMenu}
            /></div>
            <img src={nbpHeadIcon} alt="logo"/>
            {/* Placeholder for icon to spread evenly */}
            <GiHamburgerMenu size={35} style={{visibility: 'hidden'}}/>
          </div>
        </header>

        <section className="row">
          <nav 
            className={`gx-0 col-md-3 col-xl-2 ${showNav ? css.showNav : css.hideNav}`}
            style = {{
              borderRight: '1px solid #DADDE2'
            }}
            ref={navRef}
          >
            {
              toggleNav ? <UserNav/> : <UserProfileNav/>
            }
          </nav>
          <article className={`col-12 col-md-9 col-xl-8`}>
            {/* Routes */}
            <h1>88888888 ***************** *****************</h1>
            <h1> 111111 11111 11111  111111 11111 11111  111111 11111 11111  111111 11111 11111  111111 11111 11111 </h1>
            <h1> 111111 11111 11111  111111 11111 11111  111111 11111 11111  111111 11111 11111  111111 11111 11111 </h1>

            <h1> 111111 11111 11111  111111 11111 11111  111111 11111 11111  111111 11111 11111  111111 11111 11111 </h1>
            <h1> 111111 11111 11111  111111 11111 11111  111111 11111 11111  111111 11111 11111  111111 11111 11111 </h1>
            <h1> 111111 11111 11111  111111 11111 11111  111111 11111 11111  111111 11111 11111  111111 11111 11111 </h1>
            <h1> 111111 11111 11111  111111 11111 11111  111111 11111 11111  111111 11111 11111  111111 11111 11111 </h1>
            <h1> 111111 11111 11111  111111 11111 11111  111111 11111 11111  111111 11111 11111  111111 11111 11111 </h1>
            <h1> 111111 11111 11111  111111 11111 11111  111111 11111 11111  111111 11111 11111  111111 11111 11111 </h1>
            <h1> 111111 11111 11111  111111 11111 11111  111111 11111 11111  111111 11111 11111  111111 11111 11111 </h1>
            <h1> 111111 11111 11111  111111 11111 11111  111111 11111 11111  111111 11111 11111  111111 11111 11111 </h1>
            <h1> 111111 11111 11111  111111 11111 11111  111111 11111 11111  111111 11111 11111  111111 11111 11111 </h1>
            <h1> 111111 11111 11111  111111 11111 11111  111111 11111 11111  111111 11111 11111  111111 11111 11111 </h1>
            <h1> 111111 11111 11111  111111 11111 11111  111111 11111 11111  111111 11111 11111  111111 11111 11111 </h1>

          </article>
        </section>
      </div>
    </div>
  )
}

const UserNav = _ => {
  return (
    <div className={css.userNav}>
      {/* TODO: navigation menus: basing on the permission / NavLink */}
      <header
        className=" d-flex justify-content-center py-4"
      >
        <img src={nbp_logo} alt="logo"/>
      </header>
      <ul className="nav nav-pills flex-column mt-2">
        <li>
          <NavLink className="nav-link d-flex align-items-center" to="/signIn">
            <BsGrid1X2 />
            <span className="ms-1">Dashboard</span>
          </NavLink>             
        </li>
        <li>
          <NavLink className="nav-link d-flex align-items-center" to="/signIn">
            <BsSend />
            <span className="ms-1">Send Money</span>
          </NavLink>             
        </li>
        <li>
          <NavLink className="nav-link d-flex align-items-center" to="/signIn">
            <BsPeople />
            <span className="ms-1">Contacts</span>
          </NavLink>             
        </li>
        <li>
          <NavLink className="nav-link d-flex align-items-center" to="/signIn">
            <BsBank />
            <span className="ms-1">My Accounts</span>
          </NavLink>             
        </li>
        <li>
          <NavLink className="nav-link d-flex align-items-center" to="/signIn">
            <BsCardText />
            <span className="ms-1">Transactions</span>
          </NavLink>             
        </li>
      </ul>
      <footer className="p-2">
        <Link to="/signIn" className="d-flex py-2 align-items-center text-decoration-none"> 
          <BsBell className="me-1"/> <span>Notifications</span>
        </Link>
        <a href='/' onClick={ e => e.preventDefault() } className="d-flex align-items-center justify-content-between text-decoration-none">
          <span className="text-uppercase fw-bold text-truncate">XXXX WWWWW fdsafads fdasfasdf </span><TbMathGreater/>
        </a>
      </footer>
    </div>
  )
}

const UserProfileNav = _ => {
  return (
    <div className={`${css.userProfileNav}`}>
      {/* TODO: navigation menus: basing on the permission / NavLink */}
      <header
        className=" d-flex justify-content-center py-4"
      >
        <img src={nbp_logo} alt="logo"/>
      </header>
      <div>
        <a href='/' onClick={ e => e.preventDefault() } className="d-flex align-items-center justify-content-between text-decoration-none px-2 mt-3">
          <TbMathLower/> <span className="ms-2 text-uppercase fw-bold text-truncate">XXXX WWWWW fdsafads fdasfasdf </span>
        </a>       
      </div>
      <ul className="nav nav-pills flex-column mt-2">
        <li>
          <NavLink className="nav-link d-flex align-items-center" to="/signIn">
            <span className="ms-1">Change Password</span>
          </NavLink>             
        </li>
        <li>
          <NavLink className="nav-link d-flex align-items-center" to="/signIn">
            <span className="ms-1">Contact Support</span>
          </NavLink>             
        </li>
        <li>
          <NavLink onClick={e => e.preventDefault()} className="nav-link d-flex align-items-center justify-content-between" to="/signIn">
            <span className="ms-1">Legal</span><TbMathGreater/>
          </NavLink>             
        </li>
        <li>
          <NavLink onClick={e => e.preventDefault()} className="nav-link d-flex align-items-center justify-content-between" to="/signIn">
            <span className="ms-1">Legal</span><TbMathGreater/>
          </NavLink>             
        </li>
        <li>
          <NavLink onClick={e => e.preventDefault()} className="nav-link d-flex align-items-center justify-content-between" to="/signIn">
            <span className="ms-1">Terms and Conditions</span><TbMathGreater/>
          </NavLink>             
        </li>
        <li>
          <NavLink className="nav-link d-flex align-items-center" to="/signIn">
            <span className="ms-1">Privacy Policy</span>
          </NavLink>             
        </li>
      </ul>
    </div>
  )
}
export default UserApp