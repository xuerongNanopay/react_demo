// Slide Menu with support of submenu
import css from './SlideMenu.module.scss'

//menus is a list

// [
//   {name: 'transaction', to: 'to', submenus: []}
//   {name: 'login', to: '/'}
// ]
// redirection should only trigger when 
const SlideMenu = ({menus}) => {
  return (
    <div className={`${css.slideMenu}`}>
      <></>
    </div>
  )
}

export default SlideMenu