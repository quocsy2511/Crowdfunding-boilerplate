import React from "react";
import CampImage from "./parts/CampImage";
import CampCategory from "./parts/CampCategory";
import CampTitle from "./parts/CampTitle";
import CampDes from "./parts/CampDes";
import CampMeta from "./parts/CampMeta";

const   CampaignFeature = () => {
  return (
    <div className="flex items-center gap-x-[30px] w-full max-w-screen-lg">
      <CampImage className="h-[266px] flex-1 "></CampImage>
      <div className="flex-1 max-w-[435px]">
        <CampCategory text="Architecture" className="text-sm"></CampCategory>
        <CampTitle className="text-xl font-bold mb-4">
          Remake - We Make architecture exhibition
        </CampTitle>
        <CampDes className="text-sm mb-6">
          Remake - We Make: an exhibition about architecture's social agency in
          the face of urbanisation
        </CampDes>
        {/* process */}
        <div className="w-full rounded-full bg-text4 h-1 mb-6">
          <div className="w-2/4 h-full rounded-full bg-primary"></div>
        </div>
        {/* process */}
        <div className="flex items-start justify-between gap-x-16 mb-5">
          <CampMeta
            amount="$2,000"
            text="Raised of $2,500"
            size="large"
          ></CampMeta>
          <CampMeta amount="173" text="Total backers" size="large"></CampMeta>
          <CampMeta amount="30" text="Days left" size="large"></CampMeta>
        </div>
      </div>
    </div>
  );
};

export default CampaignFeature;
