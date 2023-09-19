import React, { Fragment } from "react";
import HeadingTitle from "../components/common/HeadingTitle";
import CampaignGrid from "../modules/campaign/CampaignGrid";
import CampaignFeature from "../modules/campaign/CampaignFeature";
import { Button } from "../components/button";

const CampaignPage = () => {
  return (
    <Fragment>
      {/* create campaign */}
      <div className="flex items-center justify-between rounded-3xl bg-white mb-10">
        <div className="flex items-start gap-x-6 py-8 px-10">
          <div className="bg-secondary flex items-center justify-center rounded-full text-white h-14 w-14 bg-opacity-60">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 4.5v15m7.5-7.5h-15"
              />
            </svg>
          </div>
          <div className="flex-1  ">
            <h1 className="text-2xl font-semibold mb-2">
              Create Your Campaign
            </h1>
            <p className=" text-sm text-text3 mb-2">
              Jump right into our editor and create your first Virtue campaign!
            </p>
            <a href="/" className="text-primary text-sm">
              Need any help? Learn More...
            </a>
          </div>
        </div>
        <div className="py-8 px-10 flex items-center justify-center">
          <Button kind="ghost" href="/start-campaign">
            Create campaign
          </Button>
        </div>
      </div>

      <HeadingTitle number={4} children="Your Campaign"></HeadingTitle>
      <CampaignGrid type="campaign">
        <CampaignFeature></CampaignFeature>
        <CampaignFeature></CampaignFeature>
        <CampaignFeature></CampaignFeature>
        <CampaignFeature></CampaignFeature>
      </CampaignGrid>
      <div className="mt-10 ">
        <Button kind="ghost" className="mx-auto px-8">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-5 h-5"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 6v12m6-6H6"
            />
          </svg>
          {"   "}
          See More{" "}
        </Button>
      </div>
    </Fragment>
  );
};

export default CampaignPage;
