import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as actions from "../actions/files";

import File from "../components/File";
import UploadFile from "../components/UploadFile";

export class Files extends React.Component {
  constructor(props) {
    super(props);

    this.onFileChange = this.onFileChange.bind(this);
    this.onFileUpload = this.onFileUpload.bind(this);
    this.onInputChange = this.onInputChange.bind(this);
  }

  state = {
    selectedFile: null,
    category: null,
    lastReviewed: null,
  };

  onFileChange = (event) => {
    this.setState({ selectedFile: event.target.files[0] });
  };

  onInputChange = (event, type) => {
    switch (type) {
      case "category":
        this.setState({ category: event.target.value });
        break;

      default:
        this.setState({ lastReviewed: event.target.value });
        break;
    }
  };

  onFileUpload = async () => {
    const formData = new FormData();

    formData.append("file", this.state.selectedFile);
    formData.append("category", this.state.category);
    formData.append("lastReviewed", this.state.lastReviewed);

    // TODO Put on Actions
    try {
      const res = await fetch("https://localhost:44381/files", {
        method: "POST",
        body: formData,
      });

      const json = await res.json();
      console.log(json);
    } catch (err) {
      console.log(err);
    }
  };

  componentDidMount() {
    this.props.actions.checkFiles(this.props.files.list);
  }

  render() {
    const { files } = this.props;

    return (
      <div>
        {files.list.map((file, index) => (
          <File file={file} key={index} />
        ))}
        <div>
          <UploadFile
            onFileUpload={this.onFileUpload}
            onFileChange={this.onFileChange}
            onInputChange={this.onInputChange}
          />
        </div>
      </div>
    );
  }
}

Files.propTypes = {
  actions: PropTypes.object.isRequired,
  files: PropTypes.object.isRequired,
};

function mapStateToProps(state) {
  return {
    files: state.files,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(actions, dispatch),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Files);
