import styled from "styled-components";

import { SalesCardProps } from "types/componentsProps";

export const SalesCardWrapper = styled.div<SalesCardProps>`
  padding: 20px 0;
  margin: 50px 0 20px;
  display: flex;
  flex-direction: column;
  border-radius: 8px;
  position: relative;
  background-color: ${({ bgColor }) => bgColor};
  h5 {
    font-family: poppins-extralight, poppins, sans-serif;
    margin: 0;
    font-size: 20px;
    font-weight: 500;
    color: ${({ fColor }) => fColor};
  }
  p {
    font-family: poppins-extralight, poppins, sans-serif;
    margin: 0;
    font-size: 16px;
    font-weight: 300;
  }
`;

export const CardContent = styled.div`
  contain: content;
  .dot-left,
  .dot-right {
    width: 91px;
  }
  .dot-left {
    margin-left: -35px;
  }
  .dot-right {
    margin-right: -35px;
  }
`;
