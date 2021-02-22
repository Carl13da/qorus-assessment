import React from "react";

import { Input } from "./Styles";

const input = ({ placeholder, onChange, type }) => {
  return (
    <Input
      type={type}
      placeholder={placeholder}
      onChange={onChange}
    />
  );
};

export default input;
