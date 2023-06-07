import { useState } from 'react'
import css from './DigitalInputField.module.scss'

const DigitalInputField = ({submit=undefined, digits=6, supportAlpha=false}) => {
  const [codeArr, setCodeArr] = useState(Array(digits).fill(""))
  const refs = Array(digits).fill(null)

  const codeChange = (idx) => {
    return (e) => {
      e.preventDefault();
      e.stopPropagation();
      let keyCode = e.keyCode
      //Handle delete key event.
      if ( keyCode === 8 ) {
        if ( idx === 0 && codeArr[idx] === "" ) return; 
        if ( codeArr[idx] !== "" ) codeArr[idx] = "";
        else if ( idx - 1 >= 0 && codeArr[idx-1] !== "" ) {
          codeArr[idx-1] = "";
          refs[idx-1].select() 
        }
      } else {
        if (
          ! (
            (keyCode >= 48 && keyCode <= 57) ||  
            (supportAlpha &&
              (
                (keyCode >= 65 && keyCode <= 90) || 
                (keyCode>=97 && keyCode<=122)
              )
            )
          )
        ) return
        codeArr[idx] = e.key
        if ( idx + 1 < digits) refs[idx+1].select() 
      }
      setCodeArr([...codeArr])
      if ( submit !== undefined ) submit(codeArr.join(''))
    }
  }

  return (
    <div
      className={`${css.digitalInputField}`}
      style={{
        display: 'flex',
        justifyContent: 'center',
        gap: '1rem',
        // padding: '2rem'
      }}
    > 
      {
        codeArr.map((val, idx) => {
          return <input ref={(e) => refs[idx] = e} key={idx} value={val} onChange={_ => {}} onKeyUp={codeChange(idx)} type='text'/>
        })
      }
    </div>
  )

}

export default DigitalInputField