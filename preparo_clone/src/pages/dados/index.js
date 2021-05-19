import Header from '../../components/Header'
import styles from './styles.module.scss'
import { AiOutlineUser } from 'react-icons/ai'
import { useState } from 'react'
import api from  '../../services/api'

export default function Dados() {

  const [email, setEmail] = useState("")
  const [nome, setNome] = useState("")
  const [sobrenome, setSobrenome] = useState("")
  const [telefone, setTelefone] = useState("")
  const [git, setGit] = useState("")
  const [behance, setBehance] = useState("")
  const [linkedin, setLinkedin] = useState("")

  function handlerCell(text) {
    text = text.replace(/\D/g, ""); //remove o que não é dígito

    if ((Number(text) || text == "") && text.length < 12) {
      text = text.replace(/^(\d{2})(\d)/g, "($1) $2"); //parênteses nos dois primeiros
      text = text.replace(/(\d)(\d{4})$/, "$1-$2");    //hífen
      setTelefone(text)
    }

  }

  function atualiza(email, nome, sobrenome, telefone, git, behance, linkedin){
    api.post("/upDateDados", {
      email: email,
      nome: nome,
      sobrenome: sobrenome,
      telefone: telefone,
      git: git,
      behance: behance,
      linkedin: linkedin
    }).then(resp => {
      console.log("atualizado")
    })
  }

  return (
    <div className={styles.dados}>
      <Header></Header>
      <div className={styles.boxStorage}>
        <div className={styles.box}>

          <div className={styles.text}>
            <h2>Foto de perfil</h2>
            <p>Adicione uma foto em seu perfil</p>
          </div>

          <div className={styles.fields}>
            <AiOutlineUser size="180px"></AiOutlineUser>
            <button>Carregar foto</button>
          </div>
        </div>

        <div className={styles.box}>

          <div className={styles.text}>
            <h2>Email</h2>
            <p>Você pode alterar seu email*</p>
          </div>

          <div className={styles.fields}>
            <label>Email*</label>
            <input
              type="text"
              placeholder="email@exemplo.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}></input>
            <button>Atualizar email</button>
          </div>
        </div>

        <div className={styles.box}>

          <div className={styles.text}>
            <h2>Instruções</h2>
            <p>Preencha seus dados de perfil. Sempre e mantenha seu telefone atualizado</p>
          </div>

          <div className={styles.fields}>
            <label>Nome*</label>
            <input
              type="text"
              placeholder="Digite seu nome"
              value={nome}
              onChange={(e) => setNome(e.target.value)}></input>

            <label>Sobrenome*</label>
            <input
              type="text"
              placeholder="Digite seu sobrenome"
              value={sobrenome}
              onChange={(e) => setSobrenome(e.target.value)}></input>

            <label>Telefone*</label>
            <input
              type="text"
              placeholder="(00) 00000-0000"
              value={telefone}
              onChange={(e) => handlerCell(e.target.value)}></input>
          </div>
        </div>

        <div className={styles.box}>

          <div className={styles.text}>
            <h2>Links Pessoais</h2>
            <p>Compartilhe seu perfil de outras plataformas aqui.</p>
          </div>

          <div className={styles.fields}>
            <label>Github</label>
            <input
              type="text"
              placeholder="https://github.com/abcdefghi"
              value={git}
              onChange={(e) => setGit(e.target.value)}></input>

            <label>Behance</label>
            <input
              type="text"
              placeholder="https://www.behance.net/abcdefghi"
              value={behance}
              onChange={(e) => setBehance(e.target.value)}></input>

            <label>Linkedin</label>
            <input
              type="text"
              placeholder="https://linkedin.com/in/abcdefghi"
              value={linkedin}
              onChange={(e) => setLinkedin(e.target.value)}></input>
          </div>
        </div>

        <div className={styles.center}>
          <button onClick={() => atualiza(
            email, 
            nome, 
            sobrenome, 
            telefone,
            git, 
            behance, 
            linkedin)}>Atualizar </button>
        </div>

      </div>
    </div>
  )
}