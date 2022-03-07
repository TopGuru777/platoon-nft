import React, { useEffect, useState } from "react";

import { Container } from "components";

import {
  HeaderContent,
  HeaderWrapper,
  MenuItem,
  MenuWrapper,
} from "./Header.styles";

import LogoImg from "assets/image/app-logo.png";
import { useRouter } from "next/router";

const menuData = [
  { path: "/", label: "Home" },
  { path: "/story", label: "Story" },
  { path: "/pete", label: "$PETE" },
  { path: "/launchpad", label: "Platoon Launchpad" },
  { path: "/collection", label: "NFT collections" },
  { path: "/roadmap", label: "Roadmap" },
];

const Header: React.FC = () => {
  const router = useRouter();
  const [selectedMenu, setSelectedMenu] = useState("/");

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    setSelectedMenu(router.pathname === "/" ? "/" : router.pathname);
  }, [router.pathname]);

  const handleScroll = () => {
    const headerElem: any = document.getElementById("app-header");
    if (document.documentElement.scrollTop > 0 || document.body.scrollTop > 0) {
      headerElem.style.backgroundColor = "rgba(47, 46, 46, 1)";
    } else {
      headerElem.style.backgroundColor = "rgba(47, 46, 46, 0)";
    }
  };

  const handleMenuClick = (path: string) => {
    setSelectedMenu(path);
    router.push(`${path}`);
  };

  return (
    <HeaderWrapper id="app-header">
      <Container maxW={1500}>
        <HeaderContent>
          <img src={LogoImg.src} alt="logo-img" />
          <MenuWrapper>
            {menuData.map((item: any, key: any) => (
              <MenuItem
                key={key}
                active={item.path === selectedMenu}
                onClick={() => handleMenuClick(item.path)}
              >
                {item.label}
              </MenuItem>
            ))}
          </MenuWrapper>
        </HeaderContent>
      </Container>
    </HeaderWrapper>
  );
};

export default Header;
