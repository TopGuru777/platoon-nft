import styled from "styled-components";
import { ButtonProps } from "types/componentsProps";

export const ButtonWrapper = styled.div<ButtonProps>`
  cursor: pointer;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  padding: 15px;
  transition: all 0.3s;
  font-weight: 700;
  font-size: 18px;
  line-height: 25.2px;
  color: ${({ fColor }) => fColor};
  max-width: ${({ maxW }) => maxW}px;
  background-color: ${({ bgColor }) => bgColor};
  width: 100%;
  border-radius: 5px;
  font-family: poppins-extralight, poppins, sans-serif;
  :hover {
    color: #f2f2f2;
  }
`;
