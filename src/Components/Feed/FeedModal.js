import React from 'react';
import { PHOTO_GET } from '../../api';
import useFetch from '../../Hooks/useFetch'
import Error from '.././Helper/Error';
import Loading from '../Helper/Loading';
import PhotoContent from '../Photo/PhotoContent';
import styles from './FeedModal.module.css';
const FeedModal = ({photo, setModalPhoto}) => {
  const {data, loading, error, request} = useFetch();
  React.useEffect(() => {
    const {url, options} = PHOTO_GET(photo.id);
    request(url, options);
  }, [photo, request])

  function handleOutsideClick({target, currentTarget}) {
    if(target === currentTarget) {
      setModalPhoto(null)
    }
  }
  return (
    <div className={styles.modal} onClick={handleOutsideClick} >
      {loading && <Loading />}
      {error && <Error error={error} />}
      {data && <PhotoContent data={data} />}
    </div>
  )
}

export default FeedModal
