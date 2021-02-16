import React from "react";
import PropTypes from "prop-types";
import { getUrlExtension } from '../utils/extensions'

const File = ({ file }) => {
  const style = {
    card: {
      boxShadow: "0 4px 8px 0 rgba(0,0,0,0.2)",
      transition: "0.3s",
      width: "10%",
      display: "inline-grid",
      margin: "5px",
    },
    image: {
      width: "100%",
    },
    container: {
      padding: "2px 16px",
    },
    download: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      btn: {
        backgroundColor: "#008CBA",
        border: "none",
        fontSize: "12px",
        color: "#fff",
        padding: "15px",
        cursor: "pointer",
      },
    },
  };

  return (
    <div style={style.card}>
      { getUrlExtension(file.url) ? <img src={file.url} style={style.image} /> : <h6>Not an image!</h6>}
      <div style={style.container}>
        <h4>
          <b>Name: {file.name}</b>
        </h4>
        <p>Category: {file.category}</p>
        <p>Size: {file.size}</p>
        <p>LastReviewed: {file.lastReviewed}</p>
      </div>
      <div style={style.download}>
        <p>
          <a href={file.url} target="_blank" >
          <button style={style.download.btn}>
            Download!
          </button>
          </a>
        </p>
      </div>
    </div>
  );
};

File.propTypes = {
  file: PropTypes.shape({
    url: PropTypes.string,
    name: PropTypes.string,
    category: PropTypes.string,
    size: PropTypes.number,
    lastReviewed: PropTypes.string,
  }).isRequired,
};

export default File;
