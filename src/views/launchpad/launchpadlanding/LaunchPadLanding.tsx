import React from "react";

import {
  BlackBoard,
  CardDesc,
  CardTitle,
  ImgWrapper,
  LaunchPadCard,
  LaunchPadCardWrapper,
  LaunchPadImg,
  LaunchPadLogo,
  LaunchPadWrapper,
} from "./LaunchPadLanding.styles";

import { Button } from "components";

import launchpadImg from "assets/image/launch-img.jpg";
import launchpadLogo from "assets/image/launch-logo.png";

const LaunchPadLanding: React.FC = () => {
  return (
    <LaunchPadWrapper>
      <BlackBoard>
        <LaunchPadCardWrapper>
          <LaunchPadCard>
            <CardTitle>THE PLATOON LAUNCHPAD</CardTitle>
            <CardDesc>
              A Community Driven, Revenue Share Launchpad Model on Solana,
              designed to provide technological assistance to upcoming projects.
              The Launchpad also focuses on project verification and team
              doxxing features, to create a safe, rug-free NFT ecosystem.
            </CardDesc>
            <Button
              label="Apply now"
              fColor="#282626"
              bgColor="#c0Ed38"
              maxW={218}
            />
            <LaunchPadLogo src={launchpadLogo.src} alt="launchpadLogo" />
          </LaunchPadCard>
        </LaunchPadCardWrapper>
      </BlackBoard>
      <ImgWrapper>
        <LaunchPadImg src={launchpadImg.src} alt="launchpadImg" />
      </ImgWrapper>
    </LaunchPadWrapper>
  );
};

export default LaunchPadLanding;
