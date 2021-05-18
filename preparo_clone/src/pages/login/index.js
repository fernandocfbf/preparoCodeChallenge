import { useState } from 'react'
import styles from './styles.module.scss'
import api from '../../services/api'
import { Redirect } from "react-router-dom";


export default function Login() {

  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const [redirect, setRedirect] = useState(false)
  const [message, setMessage] = useState("")

  function signIn(username, password) {
    setMessage("Carregando...")

    api.post('/signIn', {
      user: username,
      password: password
    }).then(resp => {

      if (resp.data.auth) {
        //usuário autenticado
        console.log("redirect")
        setRedirect(true)
        return
      }

      else {
        //usuário não autenticado
        setMessage("Usuário ou senha incorretos")
      }
    })
  }

  function signUp(username, password) {
    if (username == "" || password == "") {
      setMessage("Preencha todos os campos")
    }

    else {
      api.post('/signUp', {
        user: username,
        password: password
      }).then(resp => {
        if (!resp.data.complete) {
          setMessage("Usuário já existente")
        }

        else {
          setMessage("Usuario cadastrado")
        }
      })
    }
  }

  return (

    <div className={styles.login}>
      {redirect ? <Redirect to='/perfil' /> : null}
      <div className={styles.fieldBox}>
        <h2>Login</h2>

        <div className={styles.container}>
          <label>Username</label>
          <input type='text'
            onChange={(e) => setUsername(e.target.value)}></input>
        </div>

        <div className={styles.container}>
          <label>Password</label>
          <input type='password'
            onChange={(e) => setPassword(e.target.value)}></input>
        </div>

        <div className={styles.buttons}>
          <button
            className={styles.signIn}
            onClick={() => signIn(username, password)}
          >Login</button>
          <button
            className={styles.signUp}
            onClick={() => signUp(username, password)}
          >Sign Up</button>
        </div>
        <p>{message}</p>
      </div>

    </div>
  )
}