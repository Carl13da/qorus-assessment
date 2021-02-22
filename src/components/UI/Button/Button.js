import React from "react";

import { Button } from "./Styles";

const button = ({ children, onClick, type }) => {
  return (
    <Button type={type} onClick={onClick}>
      {children}
    </Button>
  );
};

export default button;