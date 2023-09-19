import React from "react";
import { defaultImage } from "../../constants/global";
import CampTitle from "./parts/CampTitle";
import { Button } from "../../components/button";

const CampaignPerk = ({ showButton = false }) => {
  return (
    <div>
      <div className="bg-white shadow-sdsecondary  overflow-hidden rounded-xl max-w-[441px]">
        <img
          alt=""
          src={defaultImage}
          className="  w-full h-[232px] object-cover rounded-xl"
        />
        <div className="p-5">
          <span className="inline-block bg-secondary px-3 py-1 mb-5 text-xs font-medium text-white rounded-sm">
            Featured
          </span>
          <CampTitle className="mb-1 text-xl font-semibold">
            {" "}
            Special One Camera
          </CampTitle>
          <div className="flex items-center gap-x-1 mb-4">
            <span className="text-text1 font-bold text-xl">$2,724 USD </span>
            <span className=" text-sm line-through text-error font-medium">
              $1,504 USD
            </span>
            <span className=" text-sm line-through text-error font-medium">
              (12% OFF)
            </span>
          </div>
          <div className=" flex flex-col gap-y-1 mb-4">
            <strong>Estimated Shipping</strong>
            <span className="text-text2">October 2022</span>
          </div>
          <p className="mb-4 text-text2">
            <strong className="text-text1">05</strong> claimed
          </p>
          <p className="text-text2">Ships worldwide</p>
        </div>
      </div>
      {showButton && (
        <div className="mt-6">
          <Button kind="secondary" className="w-full">
            Get this perk
          </Button>
        </div>
      )}
    </div>
  );
};

export default CampaignPerk;
