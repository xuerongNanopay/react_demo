import css from './MenuView.module.css'

import { GiHamburgerMenu } from "react-icons/gi"

const MenuView = () => {
  return (
    <div className={`${css.container}`}>
      <nav className={`${css.navbar}`}>
        <div className={`${css.navBarInner}`}>
          <div className={`${css.navBarItems}`}>
            <GiHamburgerMenu/>
            <a href='/#' className={`${css.navBarItem}`}>Demo1</a>
            <a href='/#' className={`${css.navBarItem}`}>Demo2</a>
          </div>
          <div className={`${css.navBarItems} ${css.navBarItemsRight}`}>
            <a href='/#' className={`${css.navBarItem}`}>Demo4</a>
            <a href='/#' className={`${css.navBarItem}`}><h1>Demo5</h1></a>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default MenuView