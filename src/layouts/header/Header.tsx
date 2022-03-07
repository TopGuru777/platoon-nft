import React, { useEffect, useState } from "react";

import { Container } from "components";
import { HiMenu } from "react-icons/hi";

import {
  HeaderContent,
  HeaderWrapper,
  MenuItem,
  MenuToggle,
  MenuWrapper,
} from "./Header.styles";

import LogoImg from "assets/image/app-logo.png";
import { useRouter } from "next/router";

import Sidebar from "./Sidebar";

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
  const [show, setShow] = useState(false);

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
          <MenuToggle onClick={() => setShow(true)}>
            <HiMenu />
          </MenuToggle>
        </HeaderContent>
      </Container>
      <Sidebar show={show} onClick={() => setShow(false)} />
    </HeaderWrapper>
  );
};

export default Header;
