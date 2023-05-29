// Layout center a container inside the other container
import css from './CenterSingleContainer.module.css'

const CenterSingleContainer = _ => {
  return (
    <div className={`${css.centerSingleContainer}`}>
      <div className={`${css.innerContainer}`}>
        <p>This is Inner container</p>
      </div>
    </div>
  )
}

export default CenterSingleContainer