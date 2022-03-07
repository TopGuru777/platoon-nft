import styled from "styled-components";

export const FeaturedWrapper = styled.div`
  padding: 100px 0;
`;

export const FeaturedTitle = styled.h1`
  font-size: 40px;
  font-weight: 700;
  text-align: center;
  margin: 0;
  margin-bottom: 40px;
  color: #c0ed38;
  font-family: "Permanent Marker", cursive;
`;

export const FeaturedGroup = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  width: max-content;
  grid-column-gap: 40px;
  grid-row-gap: 80px;
  margin: auto;
`;
