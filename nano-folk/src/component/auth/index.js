import nbpHeadIcon from 'image/nbp-head-icon.svg'
import { GiHamburgerMenu } from "react-icons/gi";

import css from './index.module.scss'

const UserApp = () => {
  
  const toggleMenu = _ => {
    alert("TODO: show menu")
  }

  return (
    <div className="container-fluid vh-100">
      <div className={`${css.flexContainer}`}>
        <header 
          className="row"
          style={{borderBottom: '2px solid rgba(0, 0, 0, 0.06)'}}
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
          <nav className={`col-md-3 col-xl-2 bg-primary`}>
            {/* TODO: navigation menus: basing on the permission / NavLink */}
            <header>
              This is header
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
              <li>33</li>
              <li>33</li>
              <li>33</li>
              <li>33</li>
              <li>33</li>
              <li>33</li>
            </ul>
            <footer>This is booter</footer>
          </nav>
          <article className={`col-12 col-md-9 col-xl-8`} style={{overflow: 'scroll'}}>
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