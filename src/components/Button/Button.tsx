import React from "react";
import { ButtonProps } from "types/componentsProps";
import { ButtonWrapper } from "./Button.styles";

const Button: React.FC<ButtonProps> = ({
  bgColor,
  fColor,
  label,
  maxW,
  width,
  border,
  onClick,
}) => {
  return (
    <ButtonWrapper
      onClick={onClick}
      bgColor={bgColor}
      fColor={fColor}
      width={width}
      border={border}
      maxW={maxW}
    >
      {label}
    </ButtonWrapper>
  );
};

export default Button;
