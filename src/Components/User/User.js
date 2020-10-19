import React from 'react';
import UserHeader from './UserHeader';
import { Route, Routes } from 'react-router-dom';
import Feed from '.././Feed/Feed';
import UserPhotoPosts from './UserPhotoPosts';
import { UserContext } from '../../UserContext';
import NotFound from '../NotFound';
import Head from '../Helper/Head';
import UserStats from './UserStats';
import Loading from '../Helper/Loading';

const User = () => {
  const { data } = React.useContext(UserContext);
  return (
    <div className="container">
      <Head title="Minha Conta" />
      <UserHeader />
      <Routes>
        {data ? (
          <Route path="/" element={<Feed user={data.id} />} />
        ) : (
          <Loading />
        )}
        <Route path="estatisticas" element={<UserStats />} />
        <Route path="postar" element={<UserPhotoPosts />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
};

export default User;
