import styled from "styled-components";
import { COLORS } from "../../../constants/styles";

const checkType = (type) =>
  type === "success" ? COLORS.success : COLORS.common;

export const Button = styled.button`
  background: ${(props) => checkType(props.type)};
  color: ${(props) => checkType(props.type)};
  border-color: ${(props) => checkType(props.type)};
  background-color: transparent;
  width: 80%;
  padding: 8px;
  cursor: pointer;
  border-radius: 10px;
  border: 1px dashed;
`;
