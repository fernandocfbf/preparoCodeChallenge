import styles from './styles.module.scss'
import { BiExit } from 'react-icons/bi'

export default function Submenu() {
  return (
    <div className={styles.submenu}>
      <p>Dados básicos</p>
      <p>Currículo</p>
      <p>Localização</p>
      <p>Identificação</p>
      <p>Formação</p>
      <p>Habilidades</p>
      <p>Testes</p>
      <p>Experiências</p>
      <p>Premiações</p>

      <span></span>

      <div className={styles.icon}>
        <BiExit></BiExit>
        <p>Sair</p>
      </div>

      <div className={styles.icon}>
        <BiExit></BiExit>
        <p>Sobre nós</p>
      </div>

    </div>
  )
}