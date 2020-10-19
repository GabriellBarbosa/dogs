import React from 'react';
import { Link } from 'react-router-dom';
import styles from './PhotoContent.module.css';
import PhotoComments from './PhotoComments.js';
import { UserContext } from '../../UserContext';
import PhotoDelete from './PhotoDelete';
import Image from '../Helper/Image';

const PhotoContent = ({ data, single }) => {
  const { comments, photo } = data;
  const user = React.useContext(UserContext);
  console.log(photo);
  return (
    <div className={`${styles.photo} ${single ? styles.single : ''}`}>
      <div className={styles.img}>
        <Image src={photo.src} alt={photo.title} />
      </div>
      <div className={styles.details}>
        <div>
          <p className={styles.author}>
            {user.data && user.data.username === photo.author ? (
              <PhotoDelete id={photo.id} />
            ) : (
              <Link to={`/perfil/${photo.author}`}>@{photo.author}</Link>
            )}
            <span className={styles.visualizacoes}>{photo.acessos}</span>
          </p>
          <Link to={`/foto/${photo.id}`}>
            <h1 className="title">{photo.title}</h1>
          </Link>

          <ul className={styles.atributtes}>
            <li>{photo.peso} kg</li>
            <li>
              {photo.idade} {photo.idade === 1 ? 'ano' : 'anos'}
            </li>
          </ul>
        </div>
      </div>
      <PhotoComments id={photo.id} comments={comments} single={single} />
    </div>
  );
};

export default PhotoContent;
