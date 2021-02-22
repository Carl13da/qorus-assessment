import React from "react";

import { Container, FileInfo, Preview } from "./Styles";
import PropTypes from "prop-types";
import { checkImageUrlExtension } from '../../utils/extensions'
import Button from '../UI/Button/Button'

const File = ({ file }) => {
  const onDownload = () => window.open(file.url, '_blank');

  return (
    <Container>
      <li key={file.id}>
        <FileInfo>
          {checkImageUrlExtension(file.url) ? <Preview src={file.url} /> : <h6>Not an image!</h6>}
          <div>
            <strong>{file.name}</strong>
            <span>
              {file.category}
            </span>
            <span>
              {file.lastReviewed}
            </span>
          </div>
          <Button type="success" onClick={onDownload}>
            Download
          </Button>
        </FileInfo>
      </li>
  </Container>
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
