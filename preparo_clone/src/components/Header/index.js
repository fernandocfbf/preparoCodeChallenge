import styles from './styles.module.scss'
import {AiTwotoneBell, AiOutlineUser} from 'react-icons/ai'

export default function Header(){

  return(
    <div className={styles.header}>
      <button className={styles.logo}>
        <img src={'/logo192.png'}></img>
      </button>
      <p>explorar</p>
      <p>inscrições</p>
      <span></span>
      <button className={styles.bell}>
        <AiTwotoneBell color="#c93b59" size="50%"></AiTwotoneBell>
      </button>
      <button className={styles.user}>
        <AiOutlineUser color="#ffff" size="70%"></AiOutlineUser>
      </button>
    </div>
  )

}