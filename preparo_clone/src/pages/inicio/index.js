import Header from '../../components/Header'
import { AiOutlineUser } from 'react-icons/ai'
import { FaMapMarkedAlt, FaUserCircle, FaGraduationCap, FaPencilRuler, FaAward } from 'react-icons/fa'
import { HiIdentification, HiDocumentText } from 'react-icons/hi'
import { RiBook2Fill } from 'react-icons/ri'

import styles from './styles.module.scss'

export default function Inicio() {

  return (
    <div className={styles.inicio}>
      <Header></Header>
      <div className={styles.title}>
        <p>Informações pessoais</p>
      </div>

      <div className={styles.insctructionsBox}>
        <h1>Instruções</h1>
        <span></span>
        <div className={styles.row}>
          <p>Para atualizar suas informações cadastrais, clique na barra vertical em</p>
        </div>

        <div className={styles.row}>
          <FaUserCircle color="#c93b59"></FaUserCircle>
          <p>para atualizar seu perfil* (nome, sobrenome, telefone, links pessoais).</p>
        </div>

        <div className={styles.row}>
          <FaMapMarkedAlt color="#c93b59"></FaMapMarkedAlt>
          <p>para atualizar sua localização* (CEP, cidade, etc.)..</p>
        </div>

        <div className={styles.row}>
          <HiIdentification color="#c93b59"></HiIdentification>
          <p>para preencher sua identificação* (CPF, data de nascimento, etc.).</p>
        </div>

        <div className={styles.row}>
          <FaGraduationCap color="#c93b59"></FaGraduationCap>
          <p>para atualizar sua formação* (universidade, situação e curso).</p>
        </div>

        <div className={styles.row}>
          <HiDocumentText color="#c93b59"></HiDocumentText>
          <p>para enviar seu currículo.</p>
        </div>

        <div className={styles.row}>
          <FaPencilRuler color="#c93b59"></FaPencilRuler>
          <p>para atualizar suas habilidades (conteúdos, assuntos, linguagens de programação, etc.).</p>
        </div>

        <div className={styles.row}>
          <RiBook2Fill color="#c93b59"></RiBook2Fill>
          <p>para atualizar suas experiências (estágios, trabalhos voluntários, intercâmbios, etc.).</p>
        </div>

        <div className={styles.row}>
          <FaAward color="#c93b59"></FaAward>
          <p>para atualizar suas premiações (ex.: olimpíadas científicas).</p>
        </div>

        <div className={styles.observations}>
          <p>
            Se sentir falta de algum campo, conte-nos por Whatsapp
            o que você gostaria de ver por aqui.
          </p>

          <p>
            Se tiver algum problema com preenchimento,
            alguma dúvida ou sugestão contate-nos também.
          </p>

          <strong>* Campos Obrigatórios para a candidatura em uma vaga.</strong>
        </div>

      </div>
    </div>
  )
}