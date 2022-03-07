import styled from "styled-components";

export const HeaderWrapper = styled.div`
  position: fixed;
  z-index: 9999;
  top: 0;
  left: 0;
  width: 100%;
  background-color: rgba(47, 46, 46, 0);
  transition: 0.3s all;
  box-shadow: 0px 0px 30px 0px rgba(20, 20, 22, 0.3);
`;

export const HeaderContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 71px;
  img {
    width: 51px;
    height: 51px;
  }
`;

export const MenuWrapper = styled.div`
  display: flex;
  & > *:not(:first-child) {
    margin-left: 25px !important;
  }
`;

export const MenuItem = styled.p<{ active: boolean }>`
  transition: all 0.3s;
  font-size: 15px;
  cursor: pointer;
  margin: 0;
  color: rgb(${({ active }) => (active ? "186, 218, 85" : "255, 255, 255")});
  :hover {
    color: rgb(186, 218, 85);
  }
`;
