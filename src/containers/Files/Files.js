import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as actions from "../../actions/index";

import GlobalStyle from "../../styles/global";
import { Container, Content } from "./Styles";

import File from "../../components/File/File";
import UploadFile from "../../components/UploadFile/UploadFile";

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

  onFileChange = (files) => {
    this.setState({ selectedFile: files[0] });
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

    await this.props.actions.uploadFile(this.props.files.uploadFileUrl, formData);
  };

  componentDidMount() {
    this.props.actions.checkFiles(this.props.files.list);
  }

  render() {
    const { files } = this.props;

    return (
      <Container>
        <Content>
          <UploadFile
            onFileUpload={this.onFileUpload}
            onInputChange={this.onInputChange}
            onFileChange={this.onFileChange}
          />
        </Content>
        <Content>
          {files.list.map((file, index) => (
            <File file={file} key={index} />
          ))}
        </Content>
        <GlobalStyle />
      </Container>
    );
  }
}

Files.propTypes = {
  actions: PropTypes.object.isRequired,
  files: PropTypes.object.isRequired,
};

function mapStateToProps(state) {
  return {
    files: state.files
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(actions, dispatch),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Files);
