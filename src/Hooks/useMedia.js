import React from 'react'

const useMedia = (media) => {
  const [match, setMatch] = React.useState(false);

  React.useEffect(() => {
    function onResize() {
      const {matches} = window.matchMedia(media);
      setMatch(matches);
    }
    onResize();
    window.addEventListener('resize', onResize)
    return () => {
      window.removeEventListener('resize', onResize);
    }
  }, [media]);

  return match
}

export default useMedia
