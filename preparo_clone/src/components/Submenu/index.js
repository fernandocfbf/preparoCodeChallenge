import styles from './styles.module.scss'
import { BiExit } from 'react-icons/bi'
import api from '../../services/api'
import { useState } from 'react'
import { Redirect } from 'react-router'

export default function Submenu() {

  const [redirect, setRedirect] = useState(false)

  function logOut(){
    api.get('/logOut').then(resp =>{
      setRedirect(true) //redireciona para login
    })
  }

  return (
    <div className={styles.submenu}>
      {redirect ? (<Redirect to='/login'></Redirect>) : ""}
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
        <a 
        href="#/"
        onClick={() => logOut()}>Sair</a>
      </div>

      <div className={styles.icon}>
        <BiExit></BiExit>
        <a href="#/">Sobre nós</a>
      </div>

    </div>
  )
}