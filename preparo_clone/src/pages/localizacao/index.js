import { useState } from 'react'
import Header from '../../components/Header'
import styles from './styles.module.scss'

export default function Localizacao() {

  const [cep, setCep] = useState("")

  const [cepError, setCepError] = useState(false)
  const [cidadeError, setCidadeError] = useState(false)
  const [bairroError, setBairroError] = useState(false)
  const [enderecoError, setEnderecoError] = useState(false)
  const [numeroError, setNumeroError] = useState(false)


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
        </div>

        <div className={styles.blanks}>
          <p>Cidade*</p>
          <input
            className={cidadeError ? styles.errorInput : styles.checkedInput}
            type="text"
            placeholder="Insira o nome da sua cidade atual"
          ></input>
        </div>

        <div className={styles.blanks}>
          <p>Estado*</p>
          <input
            className={styles.checkedInput}
            type="text"
          ></input>
        </div>

        <div className={styles.blanks}>
          <p>Bairro*</p>
          <input
            className={bairroError ? styles.errorInput : styles.checkedInput}
            type="text"
            placeholder="Insira o nome de seu bairro"></input>
        </div>

        <div className={styles.blanks}>
          <p>Endereço*</p>
          <input
            className={enderecoError ? styles.errorInput : styles.checkedInput}
            type="text"
            placeholder="Insira seu endereço"></input>
        </div>

        <div className={styles.blanks}>
          <p>Número*</p>
          <input
            className={numeroError ? styles.errorInput : styles.checkedInput}
            type="text"
            placeholder="Insira o número de sua residência"></input>
        </div>

        <div className={styles.blanks}>
          <p>Complemento*</p>
          <input
            type="text"
            className={styles.checkedInput}
            placeholder="Insira um complemento se achar necessário"></input>
        </div>
      </div>
    </div>

    <div className={styles.atualizar}>
      <button>Atualizar</button>
    </div>

  </div>
)
}