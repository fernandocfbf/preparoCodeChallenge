import api from './api'

async function isLogged(){
  return await api.get('/validaToken').then(resp => {
    return resp.data.auth
  }).catch(erro => console.log(erro))
}

export default isLogged