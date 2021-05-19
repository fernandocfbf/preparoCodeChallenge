import Header from '../../components/Header'
import styles from './styles.module.scss'
import { AiOutlineUser } from 'react-icons/ai'
import { useEffect, useState } from 'react'
import api from '../../services/api'

export default function Dados() {

  const [email, setEmail] = useState("")
  const [nome, setNome] = useState("")
  const [sobrenome, setSobrenome] = useState("")
  const [telefone, setTelefone] = useState("")
  const [git, setGit] = useState("")
  const [behance, setBehance] = useState("")
  const [linkedin, setLinkedin] = useState("")
  const [message, setMessage] = useState("")

  const [emailError, setEmailError] = useState(false)
  const [nomeError, setNomeError] = useState(false)
  const [sobrenomeError, setSobrenomeError] = useState(false)
  const [telefoneError, setTelefoneError] = useState(false)

  const class_functions = {
    'email': [setEmail, setEmailError, email],
    'nome': [setNome, setNomeError, nome],
    'sobrenome': [setSobrenome, setSobrenomeError, sobrenome],
    'telefone': [setTelefone, setTelefoneError, telefone],
    'git': [setGit],
    'behance': [setBehance],
    'linkedin': [setLinkedin]
  }

  useEffect(() => {
    api.get('/dados').then(resp => {

      const json = resp.data.info
      for (var key in class_functions) {
        const set = class_functions[key][0] //setFunction
        json[key] == undefined ? set("") : set(json[key])
      }
    })
  }, [])

  function handlerAll(text, classe) {

    //pega a função seterro correta
    const set_error = class_functions[classe][1]

    //pega a funcao que atualiza a variável
    const set_variable = class_functions[classe][0]

    set_variable(text)
    if (text == "") {
      set_error(true) //atualiza o campo para errado
    }
  }

  function handlerCell(text) {
    text = text.replace(/\D/g, ""); //remove o que não é dígito

    if (Number(text) && text.length < 12) {
      text = text.replace(/^(\d{2})(\d)/g, "($1) $2"); //parênteses nos dois primeiros
      text = text.replace(/(\d)(\d{4})$/, "$1-$2");    //hífen
      setTelefone(text)
    }

    else if (text == "") {
      setTelefone(text)
      setTelefoneError(true)
    }
  }

  function atualiza(email, nome, sobrenome, telefone, git, behance, linkedin, functions) {

    var checked = true //inicialmente, poderá confirmar a operação
    for (var key in functions) {

      if (functions[key][2] == "" &&
        key != 'git' &&
        key != 'behance' &&
        key != 'linkedin') {
        const set = functions[key][1]
        set(true) //seta o campo como errado
        setMessage("Preencha todos os campos obrigatórios!") //mensagem de erro
        checked = false //não faz requisição para atualizar info
      }
    }

    if (checked) {
      api.post("/upDateDados", {
        email: email,
        nome: nome,
        sobrenome: sobrenome,
        telefone: telefone,
        git: git,
        behance: behance,
        linkedin: linkedin
      }).then(resp => {
        window.location.reload();
      })
    }

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
              className={emailError ? styles.errorInput : styles.checkedInput}
              type="text"
              placeholder="email@exemplo.com"
              value={email}
              onChange={(e) => handlerAll(e.target.value, 'email')}></input>
            {emailError ? <text>Insira seu endereço de email</text> : ""}
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
              className={nomeError ? styles.errorInput : styles.checkedInput}
              type="text"
              placeholder="Digite seu nome"
              value={nome}
              onChange={(e) => handlerAll(e.target.value, 'nome')}
            ></input>
            {nomeError ? <text>Insira o seu nome</text> : ""}

            <label>Sobrenome*</label>
            <input
              className={sobrenomeError ? styles.errorInput : styles.checkedInput}
              type="text"
              placeholder="Digite seu sobrenome"
              value={sobrenome}
              onChange={(e) => handlerAll(e.target.value, 'sobrenome')}></input>
            {sobrenomeError ? <text>Insira seu sobrenome</text> : ""}

            <label>Telefone*</label>
            <input
              className={telefoneError ? styles.errorInput : styles.checkedInput}
              type="text"
              placeholder="(00) 00000-0000"
              value={telefone}
              onChange={(e) => handlerCell(e.target.value)}></input>
            {telefoneError ? <text>Insira seu telefone</text> : ""}
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
              className={styles.checkedInput}
              type="text"
              placeholder="https://github.com/abcdefghi"
              value={git}
              onChange={(e) => setGit(e.target.value)}></input>

            <label>Behance</label>
            <input
              className={styles.checkedInput}
              type="text"
              placeholder="https://www.behance.net/abcdefghi"
              value={behance}
              onChange={(e) => setBehance(e.target.value)}></input>

            <label>Linkedin</label>
            <input
              className={styles.checkedInput}
              type="text"
              placeholder="https://linkedin.com/in/abcdefghi"
              value={linkedin}
              onChange={(e) => setLinkedin(e.target.value)}></input>
          </div>
        </div>



        <div className={styles.center}>

          <div className={styles.message}>
            <p>{message}</p>
          </div>

          <button onClick={() => atualiza(
            email,
            nome,
            sobrenome,
            telefone,
            git,
            behance,
            linkedin,
            class_functions
          )}>Atualizar </button>
        </div>

      </div>
    </div>
  )
}