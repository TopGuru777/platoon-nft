import styled from "styled-components";

export const RevenueWrapper = styled.div`
  padding: 150px 0;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
`;

export const RevenueDescPart = styled.div`
  text-align: left;
  width: 38%;
`;

export const RevenueTitle = styled.h2`
  font-size: 40px;
  font-weight: 700;
  margin: 0;
  color: #c0ed38;
  font-family: "Permanent Marker", cursive;
`;

export const RevenueDesc = styled.p`
  margin: 0;
  font-size: 16px;
  font-family: poppins-extralight, poppins, sans-serif;
  line-height: 28.8px;
  color: #fff;
  font-weight: 200;
  margin-top: 15px;
`;

export const RevenueCardGroup = styled.div`
  width: 55%;
  & > *:not(:first-child) {
    margin-top: 25px;
  }
`;

export const RevenueCard = styled.div`
  background-color: #242323;
  padding: 20px;
  width: 100%;
  border-radius: 8px;
  display: flex;
`;

export const CardImgWrapper = styled.div`
  margin-right: 30px;
  position: relative;
  width: 133px;
  height: 133px;
  div {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    transition: all 0.5s;
    background-color: transparent;
    border-radius: 8px;
    :hover {
      background-color: #fff;
    }
  }
  img {
    border-radius: 8px;

    :hover {
    }
  }
`;

export const CardContent = styled.div``;

export const CardTitle = styled.h2`
  margin: 0;
  margin-bottom: 10px;
  color: white;
  font-family: "poppins-semibold", "poppins", sans-serif;
  .get {
    font-size: 22px;
    font-weight: 200;
    letter-spacing: 1.1px;
    margin: 0 10px;
  }
  .percent {
    color: #c0ed38;
  }
`;

export const CardDesc = styled.p`
  margin: 0;
  font-size: 16px;
  line-height: 28.8px;
  color: white;
  font-family: "poppins-semibold", "poppins", sans-serif;
  font-weight: 200;
  span {
    color: #c0ed38;
    font-weight: 600;
  }
`;
