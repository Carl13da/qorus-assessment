import React from "react";
import InputMask from "react-input-mask";

const UploadFile = (props) => {
  const style = {
    card: {
      boxShadow: "0 4px 8px 0 rgba(0,0,0,0.2)",
      transition: "0.3s",
      width: "15%",
      margin: "5px",
      padding: "15px",
    },
    image: {
      width: "100%",
    },
    container: {
      padding: "2px 16px",
    },
  };

  return (
    <div style={style.card}>
      <div style={style.container}>
        <p>Category:</p>

        <input
          type="text"
          onChange={(e) => props.onInputChange(e, "category")}
        />
        <p>Last Reviewed:</p>

        <InputMask
          mask="99/99/9999"
          onChange={(e) => props.onInputChange(e, "lastReviewed")}
        />

        <div>
          <p>
            <input type="file" onChange={props.onFileChange} />
            <button onClick={props.onFileUpload}>Upload!</button>
          </p>
        </div>
      </div>
    </div>
  );
};

export default UploadFile;
