import React from 'react';
import LoginForm from './LoginForm';
import LoginCreate from './LoginCreate';
import LoginPasswordLost from './LoginPasswordLost';
import LoginPasswordReset from './LoginPasswordReset';
import { Route, Routes, Navigate } from 'react-router-dom';
import { UserContext } from '../../UserContext';
import styles from './Login.module.css';
import NotFound from '../NotFound';
import Head from '../Helper/Head';

const Login = () => {
  const { login } = React.useContext(UserContext);

  if (login) return <Navigate to="/conta" />;
  return (
    <section className={styles.login}>
      <Head title="Login" description="Faça Login ou cadastre-se" />
      <div className={styles.forms}>
        <Routes>
          <Route path="/" element={<LoginForm />} />
          <Route path="criar" element={<LoginCreate />} />
          <Route path="perdeu" element={<LoginPasswordLost />} />
          <Route path="resetar" element={<LoginPasswordReset />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </section>
  );
};

export default Login;
