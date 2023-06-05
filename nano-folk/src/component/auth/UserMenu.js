import nbpHeadIcon from 'image/nbp-head-icon.svg'
import { GiHamburgerMenu } from "react-icons/gi";

import css from './UserMenu.module.scss'

const UserMenu = () => {
  
  const toggleMenu = _ => {
    alert("TODO: show menu")
  }

  return (
    <div className="container-fluid vh-100">
      <div className={`${css.flexContainer}`}>
        <header 
          className="row d-md-none"
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
          <div className={`col bg-primary`}>
            111
          </div>
          <div className={`col`}>
            111
          </div>
        </section>
      </div>
    </div>
  )
}

export default UserMenu