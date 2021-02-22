import styled from "styled-components";
import { COLORS } from "../../../constants/styles";

export const Input = styled.input`
  margin: 5px;
  padding: 8px;
  width: 45%;
  min-height: 40px;
  border: 1px solid ${COLORS.common};
  font-size: 12px;
  &:focus {
    outline: none;
    box-shadow: 0px 0px 2px ${COLORS.success};
  }
`;
