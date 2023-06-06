import nbpHeadIcon from 'image/nbp-head-icon.svg'
import nbp_logo from 'image/nbp_foree_remittance_logo.svg'
import { GiHamburgerMenu } from "react-icons/gi";
import { useState } from 'react'
import { 
  NavLink 
} from "react-router-dom";
import css from './index.module.scss'

const UserApp = () => {
  const [ showNav, setShowNav ] = useState(true);
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
            <GiHamburgerMenu 
              size={35} 
              className={css.showMenu}
              onClick={toggleMenu}
            />
            <img src={nbpHeadIcon} alt="logo"/>
            {/* Placeholder for icon to spread evenly */}
            <GiHamburgerMenu size={35} style={{visibility: 'hidden'}}/>
          </div>
        </header>

        <section className="row">
          <nav 
            className={`col-md-3 col-xl-2 ${showNav ? css.showNav : css.hideNav}`}
            style = {{
              borderRight: '1px solid #DADDE2;'
            }}
          >
            {/* TODO: navigation menus: basing on the permission / NavLink */}
            <header
              className="d-flex justify-content-center py-4"
            >
              <img src={nbp_logo} alt="logo"/>
            </header>
            <ul>
              <li>##</li>
              <li>33</li>
              <li>33</li>
              <li>33</li>
              <li>33</li>
              <li>33</li>
              <li>33</li>

              <li>33</li>
              <li>33</li>
              <li>33</li>
              <li>33</li>
              <li>33</li>
              <li>33</li>
              <li>33</li>
              <li>33</li>
              <li>33</li>
              <li>33</li>
              <li>33</li>
            </ul>
            <footer>This is booter</footer>
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

export default UserApp