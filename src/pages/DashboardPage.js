import React, { Fragment } from "react";
import HeadingTitle from "../components/common/HeadingTitle";
import CampaignGrid from "../modules/campaign/CampaignGrid";
import { v4 } from "uuid";
import CampaignItem from "../modules/campaign/CampaignItem";
import Gap from "../components/common/Gap";
import CampaignFeature from "../modules/campaign/CampaignFeature";

const DashboardPage = () => {
  return (
    <Fragment>
      <HeadingTitle number="4">Your Campaign </HeadingTitle>
      <CampaignFeature></CampaignFeature>
      <Gap></Gap>
      <HeadingTitle>Popular Campaign</HeadingTitle>
      <CampaignGrid>
        {Array(4)
          .fill(0)
          .map((item) => (
            <CampaignItem key={v4()}></CampaignItem>
          ))}
      </CampaignGrid>
      <Gap></Gap>
      <HeadingTitle>Recent Campaign</HeadingTitle>
      <CampaignGrid>
        {Array(4)
          .fill(0)
          .map((item) => (
            <CampaignItem key={v4()}></CampaignItem>
          ))}
      </CampaignGrid>
    </Fragment>
  );
};

export default DashboardPage;
