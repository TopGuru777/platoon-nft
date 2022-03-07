import styled from "styled-components";
import { SalesCardProps } from "types/componentsProps";

export const PricingWrapper = styled.div`
  padding: 70px 0;
  text-align: center;
  background-color: rgb(36, 35, 35);
`;

export const PricingTitle = styled.h2`
  font-size: 40px;
  font-weight: 700;
  text-align: center;
  margin: 0;
  color: #c0ed38;
  font-family: "Permanent Marker", cursive;
`;

export const PricingDesc = styled.p`
  padding: 20px 0;
  font-size: 16px;
  line-height: 28.8px;
  color: #fff;
  width: 80%;
  font-family: poppins-extralight, poppins, sans-serif;
  margin: auto;
  font-weight: 200;
`;

export const SalesCardGroup = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 30px;
`;

export const CardContent = styled.span``;

export const SalesCardWrapper = styled.div<SalesCardProps>``;
