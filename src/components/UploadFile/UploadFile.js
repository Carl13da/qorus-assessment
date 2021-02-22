import React from "react";
import Dropzone from "react-dropzone";
import { Container, DropContainer, UploadMessage } from "./Styles";

import Input from "../UI/Input/Input";
import Button from "../UI/Button/Button";

const renderDragMessage = (isDragActive, isDragReject) => {
  if (!isDragActive) {
    return <UploadMessage>Drag files here...</UploadMessage>;
  }

  if (isDragReject) {
    return <UploadMessage type="error">Unsupported Type</UploadMessage>;
  }

  return <UploadMessage type="success">Drop files here</UploadMessage>;
};

const UploadFile = (props) => {
  return (
    <Container>
      <Dropzone accept="image/*" onDropAccepted={props.onFileChange}>
        {({ getRootProps, getInputProps, isDragActive, isDragReject }) => (
          <DropContainer
            {...getRootProps()}
            isDragActive={isDragActive}
            isDragReject={isDragReject}
          >
            <input {...getInputProps()} />
            {renderDragMessage(isDragActive, isDragReject)}
          </DropContainer>
        )}
      </Dropzone>
      <div>
        <Input
          placeholder={"Category"}
          type={"text"}
          onChange={(e) => props.onInputChange(e, "category")}
        />
        <Input
          placeholder={"Last Reviewed"}
          type={"date"}
          onChange={(e) => props.onInputChange(e, "lastReviewed")}
        />
      </div>
      <Button type="success" onClick={props.onFileUpload}>
        Upload
      </Button>
    </Container>
  );
};

export default UploadFile;
