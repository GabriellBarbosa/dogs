import React from 'react';
import styles from './NotFound.module.css';
const NotFound = () => {
  return (
    <section className={`${styles.wrapper} container mainContainer`}>
      <h1 className="title">Error 404</h1>
      <p>Page not found</p>
    </section>
  );
};

export default NotFound;
