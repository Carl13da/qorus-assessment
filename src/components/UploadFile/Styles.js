import styled, { css } from "styled-components";
import { COLORS } from "../../constants/styles";

const dragActive = css`
  border-color: ${COLORS.common};
`;

const dragReject = css`
  border-color: ${COLORS.common};
`;

export const Container = styled.ul`
  text-align: center;
`;

export const DropContainer = styled.div.attrs({
  className: "dropzone",
})`
  border: 1px dashed ${COLORS.common};
  border-radius: 4px;
  cursor: pointer;
  transition: height 0.2s ease;
  ${(props) => props.isDragActive && dragActive};
  ${(props) => props.isDragReject && dragReject};
`;

export const UploadMessage = styled.p`
  display: flex;
  color: ${(props) => COLORS[props.type || "common"]};
  justify-content: center;
  align-items: center;
  padding: 15px 0;
`;
