import React from 'react';
import { PHOTO_DELETE } from '../../api';
import useFetch from '../../Hooks/useFetch';
import styles from './PhotoDelete.module.css';

const PhotoDelete = ({ id }) => {
  const { url, options } = PHOTO_DELETE(id);
  const { request, loading } = useFetch();

  async function handleClick() {
    const confirmar = window.confirm('Tem certeza que deseja deletar?');
    if (confirmar) {
      const { response } = await request(url, options);
      if (response.ok) window.location.reload();
    }
  }
  return (
    <>
      {loading ? (
        <button className={styles.delete} disabled>
          Deletando...
        </button>
      ) : (
        <button className={styles.delete} onClick={handleClick}>
          Delete
        </button>
      )}
    </>
  );
};

export default PhotoDelete;
