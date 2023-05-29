// CSS grid demo
import css from './Grid.module.css'

const Grid = _ => {

  return (
    <>
      <h4>This is CSS Grid demo</h4>
      <div className={`${css.gridContainer}`}>
        <div className={`${css.gridItem} ${css.gridItemOne}`}>Grid One</div>
        <div className={`${css.gridItem} ${css.gridItemTwo}`}>Grid Two</div>
        <div className={`${css.gridItem} ${css.gridItemThree}`}>Grid Three</div>
        <div className={`${css.gridItem} ${css.gridItemFour}`}>Grid Four</div>
        <div className={`${css.gridItem} ${css.gridItemFive}`}>Grid Five</div>
      </div>
    </>
  )
}

export default Grid;