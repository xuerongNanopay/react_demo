// Two Column Layout with reponsive
// Change to Two row Layout when window size is less than 767.98px
import css from './TwoColumn.module.css'

const TwoColumnLayout = _ => {

  return (
    <div className={`${css.twoColumnLayout}`}>
      <div className={`${css.left}`}>
        <h4>I am LEFT</h4>
      </div>
      <div className={`${css.right}`}>
        <h4>I am RIGHT</h4>
      </div>
    </div>
  )
}

export default TwoColumnLayout;