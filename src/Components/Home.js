import React from 'react';
import Feed from './Feed/Feed';
import Head from './Helper/Head';

const Home = () => {
  return (
    <section className="container mainContainer">
      <Head title="Fotos" description="Feed principal do Dogs" />
      <Feed />
    </section>
  );
};

export default Home;
