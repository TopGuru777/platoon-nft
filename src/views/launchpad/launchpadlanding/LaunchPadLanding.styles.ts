import styled from "styled-components";

export const LaunchPadWrapper = styled.div`
  height: calc(100vh - 71px);
  display: flex;
`;

export const BlackBoard = styled.div`
  background-color: #000;
  width: 25%;
  height: 100%;
  position: relative;
`;

export const ImgWrapper = styled.div`
  width: 75%;
  height: 100%;
`;

export const LaunchPadImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const LaunchPadCardWrapper = styled.div`
  background-color: rgb(36, 35, 35);
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translateY(-50%);
`;

export const LaunchPadCard = styled.div`
  position: relative;
  padding: 45px 45px 60px;
  width: 490px;
`;

export const CardTitle = styled.h1`
  color: #c0ed38;
  font-size: 40px;
  font-weight: 700;
  margin: 0;
  line-height: 60px;
  font-family: "Permanent Marker", cursive;
`;

export const CardDesc = styled.p`
  font-family: poppins-extralight, poppins, sans-serif;
  font-size: 16px;
  line-height: 28.8px;
  color: #ffffff;
  font-weight: 200;
  margin: 20px 0 30px;
`;

export const LaunchPadLogo = styled.img`
  position: absolute;
  width: 223px;
  bottom: -60px;
  right: -100px;
`;
