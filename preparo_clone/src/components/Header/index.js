import styles from './styles.module.scss'
import {AiTwotoneBell, AiOutlineUser} from 'react-icons/ai'
import { useState } from 'react'
import Submenu from '../Submenu'

export default function Header(){

  const [enable_menu, setEnableMenu] = useState(false)

  return(
    <div className={styles.header}>
      <button className={styles.logo}>
        <img src={'/logo192.png'} alt="Logo da empresa"></img>
      </button>
      <p>explorar</p>
      <p>inscrições</p>
      <span></span>
      <button className={styles.bell}>
        <AiTwotoneBell color="#c93b59" size="35px"></AiTwotoneBell>
      </button>
      <button className={styles.user} onClick={()=> setEnableMenu(!enable_menu)}>
        <AiOutlineUser color="#ffff" size="35px"></AiOutlineUser>
      </button>

      {enable_menu ? 
      (
        <Submenu></Submenu>
      ) :
      ""
      }
    </div>
  )

}