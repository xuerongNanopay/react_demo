// Flexbox demo
import css from './Flexbox.module.css'

const FlexBox = _ => {

  return(
    <>
      <h1>Flexbox Example</h1>
      <div className={`${css.flexboxContainer}`}>
        <div className={`${css.flexboxItem} ${css.flexboxItem1}`}>
          Box1
        </div>
        <div className={`${css.flexboxItem} ${css.flexboxItem2}`}>
          Box2
        </div>
        <div className={`${css.flexboxItem} ${css.flexboxItem3}`}>
          Box3
        </div>
      </div>
    </>
  )
}

export default FlexBox