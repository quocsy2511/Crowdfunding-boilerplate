import React from "react";
import { IconFolder } from "../../components/icons";
import { Link } from "react-router-dom";
import CampCategory from "./parts/CampCategory";
import CampMeta from "./parts/CampMeta";
import CampDes from "./parts/CampDes";
import CampTitle from "./parts/CampTitle";
import CampAuthor from "./parts/CampAuthor";
import CampImage from "./parts/CampImage";

const CampaignItem = () => {
  return (
    <div className="shadow-sdprimary rounded-2xl">
      <CampImage></CampImage>
      <div className="px-5 py-4">
        <CampCategory text="Education"></CampCategory>

        <CampTitle>Powered Kits Learning Boxes</CampTitle>
        <CampDes>
          Fun, durable and reusable boxes with eco-friendly options.
        </CampDes>

        <div className="flex items-start justify-between gap-x-5 mb-5">
          <CampMeta
            amount="$2,000"
            text="Raised of $1,900"
            size="small"
          ></CampMeta>
          <CampMeta amount="173" text="Total backers" size="small"></CampMeta>
        </div>
        <CampAuthor></CampAuthor>
      </div>
    </div>
  );
};

export default CampaignItem;
