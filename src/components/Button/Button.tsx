import React from "react";
import { ButtonProps } from "types/componentsProps";
import { ButtonWrapper } from "./Button.styles";

const Button: React.FC<ButtonProps> = ({
  bgColor,
  fColor,
  label,
  maxW,
  onClick,
}) => {
  return (
    <ButtonWrapper
      onClick={onClick}
      bgColor={bgColor}
      fColor={fColor}
      maxW={maxW}
    >
      {label}
    </ButtonWrapper>
  );
};

export default Button;
