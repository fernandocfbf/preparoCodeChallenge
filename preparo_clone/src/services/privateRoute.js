import React, { useEffect, useState } from 'react';
import { Route, Redirect } from 'react-router';
import isLogged from './isLogged';
import styles from './styles.module.scss'

function Login() {

  const [logado, setLogado] = useState(false)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    isLogged().then((response) => {
      setLogado(response);
      setLoading(true); //mudar para false
    })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  }, []);

  return { logado, loading }
}

// função
const PrivateRoute = (props) => {
  const { logado, loading } = Login();

  if (loading) {
    return (
      <div className={styles.spinner}>
        <img src='/loading.gif'></img>
      </div>
    )
  } else if (logado) {
    // se não estiver carregado, mas estiver logado:
    return <Route {...props} />;
  } else {
    // se não estiver carregando nem estiver logado
    return <Redirect to='/login'></Redirect>;
  }
};

export default PrivateRoute;