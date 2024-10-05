import {ReactNode} from 'react'
import style from './index.module.css';

function Container({children}:{children:ReactNode}) {
  return (
    <div className={style.flexContainer}>
      {children}
    </div>
  )
}

export default Container