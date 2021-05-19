import { useEffect, useState } from 'react'
import Header from '../../components/Header'
import styles from './styles.module.scss'
import api from '../../services/api'

export default function Localizacao() {

  const [cep, setCep] = useState("")
  const [cidade, setCidade] = useState("")
  const [estado, setEstado] = useState("")
  const [bairro, setBairro] = useState("")
  const [endereco, setEndereco] = useState("")
  const [numero, setNumero] = useState("")
  const [complemento, setComplemento] = useState("")
  const [message, setMessage] = useState("")

  const [cepError, setCepError] = useState(false)
  const [cidadeError, setCidadeError] = useState(false)
  const [estadoError, setEstadoError] = useState(false)
  const [bairroError, setBairroError] = useState(false)
  const [enderecoError, setEnderecoError] = useState(false)
  const [numeroError, setNumeroError] = useState(false)

  const class_functions = {
    'cidade': [setCidade, setCidadeError, cidade],
    'estado': [setEstado, setEstadoError, estado],
    'bairro': [setBairro, setBairroError, bairro],
    'endereco': [setEndereco, setEnderecoError, endereco],
    'numero': [setNumero, setNumeroError, numero],
    'cep': [setCep, setCepError, cep],
    'complemento': [setComplemento]
    
  }

  useEffect(() => {
    api.get('/location').then(resp => {

      const json = resp.data.info
      for (var key in class_functions) {
        const set = class_functions[key][0] //setFunction
        json[key] == undefined ? set("") : set(json[key])
      }
    })
  }, [])

  function handlerCep(text) {
    text = text.replace(/\D/g, ""); //remove o que não é dígito

    if (Number(text) && text.length < 9) {
      text = text.replace(/^(\d{5})-*(\d{1})/g, "$1-$2"); //hífen 
      setCep(text)
    }

    else if (text == "") {
      setCep(text)
      setCepError(true)
    }
  }

  function handlerAll(text, classe) {

    //pega a função set de erro correta
    const set_error = class_functions[classe][1]

    //pega a funcao que atualiza a variável
    const set_variable = class_functions[classe][0]

    set_variable(text)
    if (text == "") {
      set_error(true) //atualiza o campo para errado
    }
  }

  function atualiza(cep, cidade, estado, bairro, endereco, numero, complemento, functions) {
    var checked = true //inicialmente, poderá confirmar a operação
    for(var key in functions){

      if(functions[key][2] == "" && key != 'complemento'){
        const set = functions[key][1]
        set(true) //seta o campo como errado
        setMessage("Preencha todos os campos obrigatórios!") //mensagem de erro
        checked = false //não faz requisição para atualizar info
      }
    }

    if(checked) {
      api.post("/upDateLocation", {
        cep: cep,
        cidade: cidade,
        estado: estado,
        bairro: bairro,
        endereco: endereco,
        numero: parseInt(numero),
        complemento: complemento
      }).then(resp => {
        window.location.reload()
      })
    }

  }

  return (
    <div className={styles.localizacao}>
      <Header></Header>
      <div className={styles.title}>
        <p>Localização</p>
      </div>

      <div className={styles.instructions}>

        <div className={styles.instructionsText}>
          <h3>Instruções</h3>
          <p>
            Preencha seus dados de Localização. Sempre os mantenha atualizado.
          </p>
        </div>

        <div className={styles.fields}>

          <div className={styles.blanks}>
            <p>CEP*</p>
            <input
              className={cepError ? styles.errorInput : styles.checkedInput}
              type='text'
              value={cep}
              placeholder="12345-678"
              onChange={(e) => handlerCep(e.target.value)}></input>

            {cepError ? (<text>Você precisa inserir um CEP válido</text>) : ""}
          </div>

          <div className={styles.blanks}>
            <p>Cidade*</p>
            <input
              className={cidadeError ? styles.errorInput : styles.checkedInput}
              type="text"
              value={cidade}
              placeholder="Insira o nome da sua cidade atual"
              onChange={(e) => handlerAll(e.target.value, "cidade")}
            ></input>
            {cidadeError ? (<text>Você precisa inserir o nome de sua cidade</text>) : ""}
          </div>

          <div className={styles.blanks}>
            <p>Estado*</p>
            <input
              className={styles.checkedInput}
              type="dropdown"
              value={estado}
              placeholder="Selecione o estado"
              onChange={(e) => handlerAll(e.target.value, "estado")}
            ></input>
            {estadoError ? (<text>Você precisa inserir o nome do seu estado</text>) : ""}
          </div>

          <div className={styles.blanks}>
            <p>Bairro*</p>
            <input
              className={bairroError ? styles.errorInput : styles.checkedInput}
              type="text"
              value={bairro}
              placeholder="Insira o nome de seu bairro"
              onChange={(e) => handlerAll(e.target.value, "bairro")}
            ></input>
            {bairroError ? (<text>Você precisa inserir o nome de seu bairro</text>) : ""}
          </div>

          <div className={styles.blanks}>
            <p>Endereço*</p>
            <input
              className={enderecoError ? styles.errorInput : styles.checkedInput}
              type="text"
              value={endereco}
              placeholder="Insira seu endereço"
              onChange={(e) => handlerAll(e.target.value, "endereco")}
            ></input>
            {enderecoError ? (<text>Você precisa inserir seu endereço</text>) : ""}
          </div>

          <div className={styles.blanks}>
            <p>Número*</p>
            <input
              className={numeroError ? styles.errorInput : styles.checkedInput}
              type="text"
              value={numero}
              placeholder="Insira o número de sua residência"
              onChange={(e) => handlerAll(e.target.value, "numero")}
            ></input>
            {numeroError ? (<text>Você precisa inserir o número de sua residência</text>) : ""}
          </div>

          <div className={styles.blanks}>
            <p>Complemento</p>
            <input
              type="text"
              value={complemento}
              className={styles.checkedInput}
              placeholder="Insira um complemento se achar necessário"
              onChange={(e) => setComplemento(e.target.value)}
            ></input>
          </div>
        </div>
      </div>

      <div className={styles.atualizar}>

        <div className={styles.message}>
          <p>{message}</p>
        </div>
        
        <button
          onClick={() => atualiza(
            cep,
            cidade,
            estado,
            bairro,
            endereco,
            numero,
            complemento, 
            class_functions)}
        >Atualizar</button>
      </div>


    </div>
  )
}