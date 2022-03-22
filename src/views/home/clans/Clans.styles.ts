import styled from "styled-components";

export const ClansWrapper = styled.div`
  max-width: 1580px;
  width: 97%;
  margin: auto;
  background-color: #282626;
  padding: 5% 10%;
  h1 {
    color: #fff;
    text-align: center;
    font-family: "Permanent Marker", cursive;
    font-size: 36px;
    margin: 0;
    line-height: 43px;
  }
`;

export const ClansCardWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 100px;
`;

export const ImageWrapper = styled.div`
  min-width: 331px;
  max-width: 331px;
  width: 100%;
  img {
    width: 100%;
    border-radius: 9999px;
    background-color: white;
  }
`;

export const TextWrapper = styled.div`
  width: 60%;
  font-family: poppins-semibold, poppins, sans-serif;
  h2,
  h3,
  p {
    margin: 0;
  }
  h2 {
    font-size: 28px;
    line-height: 33.6px;
    color: #c0ed38;
    font-weight: 700;
    margin-bottom: 20px;
  }
  h3 {
    color: #fff;
    font-size: 16px;
    font-weight: 700;
  }
  p {
    margin-top: 20px;
    color: #fff;
    font-size: 16px;
    font-weight: 200;
  }
`;
