import React, { useEffect, useState } from 'react';
import { createApi } from 'unsplash-js';
import ImageModal from '../imageModal/imageModal';
import './searchPhotos.css';

const unsplash = createApi({
  accessKey: "Qy5FzE7XDnvR2rmmWz3v5wk06KoXw-DAbvNvaR6oVmw",
  // apiUrl: 'https://api.unsplash.com',
});

const SearchPhotos = () => {
  const [query, setQuery] = useState('');
  const [pics, setPics] = useState([]);
  const [show, setShow] = useState(false);
  const [index, setindex] = useState(0);
  const [ImageCount, SetCount] = useState(15);
  const [initialData, setInitialData] = useState([]);

  const showModal = (index) => {
    setindex(index);
    setShow(true);
  };

  const hideModal = () => {
    setShow(false);
  };

  const fetchFirst = async () => {
    unsplash.photos.list({ perPage: 50 }).then((json) => {
      setInitialData(json.response.results);
      console.log(json);
    });
  };

  useEffect(() => {
    fetchFirst();
  }, []);

  useEffect(() => {
    (async () => {
      if (query === '') {
        setPics(initialData);
        return;
      }
      await unsplash.search
        .getPhotos({ query: query, perPage: ImageCount })
        .then((json) => {
          setPics(json.response.results);
        });
    })();
  }, [query, ImageCount, initialData]);

  return (
    <div className="searchPhotos">
      <ImageModal show={show} handleClose={hideModal}>
        {pics[index] && (
          <div className="ModalContent">
            <img
              src={pics[index].urls.regular}
              alt={pics[index].alt_description}
            />
            <div className="ImageInfo">
              <h4>ID : {pics[index].id}</h4>
              <p>Description : {pics[index].description}</p>
              <p>Likes Count : {pics[index].likes}</p>
              <p>UserName : {pics[index].user.username}</p>
              <p>Name : {pics[index].user.name}</p>
              <p>Twitter UserName : {pics[index].user.twitter_username}</p>
              <p>Instagram UserName : {pics[index].user.instagram_username}</p>
              <p>Location : {pics[index].user.location}</p>
            </div>
          </div>
        )}
      </ImageModal>

      <div className="card-list">
        {pics.map((pic, index) => (
          <div className="card" key={pic.id} onClick={() => showModal(index)}>
            <img alt={pic.alt_description} src={pic.urls.regular} />
          </div>
        ))}
      </div>

    </div>
  );
};

export default SearchPhotos;
