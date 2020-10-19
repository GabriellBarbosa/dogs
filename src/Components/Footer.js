import React from 'react';
import { ReactComponent as Dog } from '../Assets/dogs-footer.svg';
//CSS Styles
import styles from './Footer.module.css';
//CSS Styles

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <Dog />
      <p>O conteúdo que você posta é excluido depois de 10 minutos.</p>
    </footer>
  );
};

export default Footer;
