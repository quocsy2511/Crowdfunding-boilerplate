import React, { Fragment } from "react";
import { Button } from "../../components/button";
import Gap from "../../components/common/Gap";
import { defaultImage } from "../../constants/global";
import CampaignPerk from "./CampaignPerk";
import CampaignSupport from "./CampaignSupport";
import CampCategory from "./parts/CampCategory";
import CampDes from "./parts/CampDes";
import CampImage from "./parts/CampImage";
import CampMeta from "./parts/CampMeta";
import CampTitle from "./parts/CampTitle";
import CampViewAuthor from "./parts/CampViewAuthor";
import CampaignGrid from "./CampaignGrid";
import CampaignItem from "./CampaignItem";
import HeadingTitle from "../../components/common/HeadingTitle";
const CampaignView = () => {
  return (
    <Fragment>
      {/* banner */}
      <div
        className=" h-[140px] rounded-3xl bg-cover bg-no-repeat  bg-center bg-opacity-40 flex items-center justify-center text-white font-bold text-[40px] mb-10"
        style={{
          backgroundImage: `linear-gradient(180deg, rgba(32, 18, 63, 0) 0%, #000 145.43%),url(https://images.unsplash.com/photo-1510300101842-d7a2ed0bde3b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1362&q=80)`,
        }}
      >
        <h1>Education</h1>
      </div>
      {/* banner */}

      {/* content 1 */}
      <div className="flex items-start gap-x-10 w-full max-w-[1066px]">
        {/* cột bên trái */}
        <div className="flex-1">
          <CampImage className="h-[398px] mb-8"></CampImage>
          <div className=" flex items-center justify-center gap-x-5">
            {Array(4)
              .fill(0)
              .map((item, index) => (
                <img
                  key={index}
                  alt="CampaignImageOther"
                  src="https://source.unsplash.com/random"
                  className=" w-[98px] h-[70px] rounded-md object-cover"
                />
              ))}
          </div>
        </div>
        {/* cột bên trái */}

        {/* cột bên phải */}
        <div className="flex-1 max-w-[433px]">
          <CampCategory text="Film" className="text-sm"></CampCategory>
          <CampTitle className="text-xl font-bold mb-4">
            Meet - AI Virtual Background 4K Webcam
          </CampTitle>
          <CampDes className="text-sm mb-6">
            The first-ever 4K webcam that embeded AI technology to protect your
            background during video calls.
          </CampDes>
          <CampViewAuthor></CampViewAuthor>
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
          <Button kind="primary" className="w-full">
            Back this project
          </Button>
        </div>
        {/* cột bên phải */}
        
      </div>
      {/* content 1 */}

      {/* header bên dưới */}
      <div className="flex items-center gap-x-10 justify-between mt-[100px] bg-white shadow-sm p-5 border-b-slate-100 mb-6">
        <div className="flex items-center text-sm font-medium gap-x-4 text-text3 cursor-pointer">
          <span className="text-secondary">Campaign</span>
          <span>Risks</span>
          <span>FAQ</span>
          <span>Updates</span>
          <span>Comments</span>
        </div>
        <Button kind="primary">Back this project</Button>
      </div>
      {/* header bên dưới */}

      {/* content  2*/}
      <div className="grid grid-cols-[1.3fr,1fr] gap-x-[124px] mb-[70px]">
        <div>
          <HeadingTitle>STORY</HeadingTitle>
          <div className="bg-white w-full">
            <p>
              Laboris veniam sit Lorem adipisicing ipsum. Nulla nostrud Lorem
              minim id mollit sunt excepteur. Occaecat velit Lorem laboris
              labore anim. Dolor fugiat ipsum voluptate labore laborum laborum.
            </p>
          </div>
        </div>
        <div>
          <CampaignSupport></CampaignSupport>
          <Gap></Gap>
          <Gap></Gap>
          <div className="flex flex-col gap-y-8">
            <CampaignPerk></CampaignPerk>
            <CampaignPerk></CampaignPerk>
            <CampaignPerk></CampaignPerk>
          </div>
        </div>
      </div>
      {/* content  2*/}

      {/* footer */}
      <HeadingTitle className="mb-10">
        You also may be interested in
      </HeadingTitle>
      <CampaignGrid>
        <CampaignItem></CampaignItem>
        <CampaignItem></CampaignItem>
        <CampaignItem></CampaignItem>
        <CampaignItem></CampaignItem>
      </CampaignGrid>
      {/* footer */}
    </Fragment>
  );
};
export default CampaignView;
