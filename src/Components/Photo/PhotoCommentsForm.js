import React from 'react';
import { COMMENT_POST } from '../../api';
import { ReactComponent as Enviar } from '../../Assets/enviar.svg';
import useFetch from '../../Hooks/useFetch';
import Error from '../Helper/Error';
import styles from './PhotoCommentsForm.module.css';

const PhotoCommentsForm = ({ id, setComments, single }) => {
  const [comment, setComment] = React.useState();
  const { request, error } = useFetch();

  async function handleSubmit(event) {
    event.preventDefault();
    const { url, options } = COMMENT_POST(id, { comment });
    const { response, json } = await request(url, options);
    if (response.ok) {
      setComment('');
      setComments((comments) => [...comments, json]);
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      className={`${styles.form} ${single ? styles.single : ''}`}
    >
      {error && <Error error={error} />}
      <textarea
        className={styles.textarea}
        name="comment"
        id="comment"
        value={comment}
        onChange={({ target }) => setComment(target.value)}
        placeholder="Comente..."
      />
      <button className={styles.button}>
        <Enviar />
      </button>
    </form>
  );
};

export default PhotoCommentsForm;
