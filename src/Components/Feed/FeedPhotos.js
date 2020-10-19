import React from 'react';
import { GET_PHOTOS } from '../../api';
import useFetch from '../../Hooks/useFetch';
import FeedPhotosItem from './FeedPhotosItem';
import Error from '.././Helper/Error';
import Loading from '.././Helper/Loading';
import styles from './FeedPhotos.module.css';

const FeedPhotos = ({ user, page, setModalPhoto, setInfinite }) => {
  const total = 6;
  const { data, loading, error, request } = useFetch();
  const { url, options } = GET_PHOTOS({ page, total, user });
  React.useState(() => {
    async function fetchPhotos() {
      const { response, json } = await request(url, options);
      if (response && response.ok && json.length < total) {
        setInfinite(false);
      }
    }
    fetchPhotos();
  }, [request, user]);
  if (error) return <Error error={error} />;
  if (loading) return <Loading />;
  if (data)
    return (
      <ul className={`${styles.feed} animeLeft`}>
        {data.map((photo) => (
          <FeedPhotosItem
            key={photo.id}
            photo={photo}
            setModalPhoto={setModalPhoto}
          />
        ))}
      </ul>
    );
};

export default FeedPhotos;
