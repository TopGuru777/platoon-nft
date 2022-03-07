import React from "react";

import { SidebarOverlay, SidebarWrapper } from "./Header.styles";

const Sidebar: React.FC<{ show: boolean; onClick: VoidFunction }> = ({
  show,
  onClick,
}) => {
  return (
    <>
      <SidebarWrapper show={show}>Sidebar</SidebarWrapper>
      <SidebarOverlay show={show} onClick={onClick}></SidebarOverlay>
    </>
  );
};

export default Sidebar;
