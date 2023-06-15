import css from './MenuView.module.css'

const MenuView = () => {
  return (
    <div className={`${css.container}`}>
      <nav className={`${css.navbar}`}>
        <div className={`${css.navBarInner}`}>
          <div className={`${css.navBarItems}`}>
            <HambugerIcon/>
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

const HambugerIcon = ({size}) => {
  return (
    <svg 
      stroke="currentColor" 
      fill="currentColor" 
      stroke-width="0" 
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

export default MenuView