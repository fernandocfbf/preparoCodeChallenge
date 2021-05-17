import styles from './styles.module.scss'
import { BiExit } from 'react-icons/bi'

export default function Submenu() {
  return (
    <div className={styles.submenu}>
      <a href="http://localhost:3000/dados">Dados básicos</a>
      <a>Currículo</a>
      <a href="http://localhost:3000/localizacao">Localização</a>
      <a>Identificação</a>
      <a>Formação</a>
      <a>Habilidades</a>
      <a>Testes</a>
      <a>Experiências</a>
      <a>Premiações</a>

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