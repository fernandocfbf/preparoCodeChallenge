import styles from './styles.module.scss'
import { BiExit } from 'react-icons/bi'

export default function Submenu() {
  return (
    <div className={styles.submenu}>
      <a href="http://localhost:3000/dados">Dados básicos</a>
      <a href="#/">Currículo</a>
      <a href="http://localhost:3000/localizacao">Localização</a>
      <a href="#/">Identificação</a>
      <a href="#/">Formação</a>
      <a href="#/">Habilidades</a>
      <a href="#/">Testes</a>
      <a href="#/">Experiências</a>
      <a href="#/">Premiações</a>

      <span></span>

      <div className={styles.icon}>
        <BiExit></BiExit>
        <a href="http://localhost:3000/login">Sair</a>
      </div>

      <div className={styles.icon}>
        <BiExit></BiExit>
        <a href="#/">Sobre nós</a>
      </div>

    </div>
  )
}