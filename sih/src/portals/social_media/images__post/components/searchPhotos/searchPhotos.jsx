import React, { useEffect, useState } from "react";
import { createApi } from "unsplash-js";
import ImageModal from "../imageModal/imageModal";
import "./searchPhotos.css";
import axios from "axios";
import { CircularProgress } from "@material-ui/core";
import ImageCardCommunity from "./ImageCard";

const unsplash = createApi({
  accessKey: "Qy5FzE7XDnvR2rmmWz3v5wk06KoXw-DAbvNvaR6oVmw",
  // apiUrl: 'https://api.unsplash.com',
});
const SearchPhotos = ({ refresh, setRefresh }) => {
  const [query, setQuery] = useState("");
  const [pics, setPics] = useState([]);
  const [show, setShow] = useState(false);
  const [index, setindex] = useState(0);
  const [ImageCount, SetCount] = useState(15);
  const [initialData, setInitialData] = useState([]);
  const [approvedPhotos, setApprovedPhotos] = useState([]);

  const showModal = (index) => {
    setindex(index);
    setShow(true);
  };

  const hideModal = () => {
    setShow(false);
  };
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    (async () => {
      if (query === "") {
        setPics(initialData);

        return;
      }
    })();
  }, [query, ImageCount, initialData]);

  const getApprovedPhotos = async () => {
    setLoading(true);
    const res = await axios.get(
      "https://vvgnlisandboxapi.herokuapp.com/api/vvgnli/v1/getApprovedPhotos"
    );
    setApprovedPhotos(res.data.approvedPhotosArray);

    setLoading(false);
    setRefresh(false);
  };

  useEffect(() => {
    getApprovedPhotos();
  }, [refresh]);

  // console.log(loading);
  console.log(refresh);

  return (
    <div className="searchPhotos">
      {/* <ImageModal show={show} handleClose={hideModal}>
        {console.log(pics)}
        {pics[index] && (
          <div
            style={{
              backgroundColor: "white",
              boxShadow: "2px 2px 3px black",
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
              overflow: "scroll",
              width: "70vw",
              height: "90vh",
              padding: "0",
              borderRadius: "0",
            }}
            className="ModalContent"
          >
            <img
              style={{
                border: "2px solid green",
                width: "100%",
                height: "90%",
                borderRadius: "0",
              }}
              src={pics[index].urls.regular}
            />
            <div className="ImageInfo">
              <h4>ID : {pics[index].id}</h4>
              <p>Description : {pics[index].description}</p>
            </div>
          </div>
        )}
      </ImageModal> */}
      {loading ? (
        <div className="loaderContainer">
          <CircularProgress />
        </div>
      ) : (
        <div className="card-list">
          {approvedPhotos.map((approvedPhoto, index) => (
            <ImageCardCommunity
              image={approvedPhoto}
              key={approvedPhoto.mediaURL}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default SearchPhotos;
