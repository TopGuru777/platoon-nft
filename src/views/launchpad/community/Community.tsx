import React from "react";

import {
  CommunityButtonWrapper,
  CommunityDesc,
  CommunityTitle,
  CommunityWrapper,
} from "./Community.styles";

import { Button } from "components";

const Community: React.FC = () => {
  return (
    <CommunityWrapper>
      <CommunityTitle>A Community Driven Launchpad</CommunityTitle>
      <CommunityDesc>
        {
          "From reaching out to collectively vetting applied projects, the Prickly Pete's Platoon"
        }
      </CommunityDesc>
      <CommunityDesc>
        {
          "Community is deeply engaged in the Launchpad Mechanics. Each member is rewarded with a Finder's Fee for successfully enrolling a project on to the Platoon Launchpad."
        }
      </CommunityDesc>
      <CommunityButtonWrapper>
        <Button
          maxW={267}
          label="Apply now"
          fColor="#fff"
          bgColor="#000"
          onClick={() => {}}
        />
      </CommunityButtonWrapper>
    </CommunityWrapper>
  );
};

export default Community;
