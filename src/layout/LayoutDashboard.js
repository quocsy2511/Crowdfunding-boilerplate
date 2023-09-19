import React from "react";
import DashboardTopBar from "../modules/dashboard/DashboardTopBar";
import DashboardSideBar from "../modules/dashboard/DashboardSideBar";
// import Overlay from "../components/common/Overlay";
import { Outlet } from "react-router";
import ReactModal from "react-modal";
import { Button } from "../components/button";
import CampaignPerk from "../modules/campaign/CampaignPerk";
import RequiredAuthPage from "../pages/RequiredAuthPage";

const LayoutDashboard = ({ children }) => {
  return (
    <RequiredAuthPage>
      <div className="p-10  min-h-screen bg-lite">
        {/* để modal ở đây vì chỉ có những trang đc bao  bởi layout mới sử dụng modal */}
        <ReactModal
          isOpen={false}
          overlayClassName="modal-overlay fixed inset-0 bg-black bg-opacity-40 z-50 flex items-center justify-center"
          className="modal-content w-full max-w-[521px] bg-white rounded-2xl outline-none p-10 relative max-h-[90vh] overflow-y-auto scroll-hidden"
        >
          <button className="absolute z-10 right-10 top-[10px] text-text3 cursor-pointer w-11 h-11 flex items-center justify-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="w-5 h-5 "
            >
              <path d="M6.28 5.22a.75.75 0 00-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 101.06 1.06L10 11.06l3.72 3.72a.75.75 0 101.06-1.06L11.06 10l3.72-3.72a.75.75 0 00-1.06-1.06L10 8.94 6.28 5.22z" />
            </svg>
          </button>
          <h2 className="text-center font-bold text-text1 text-[25px] mb-10">
            Back this project
          </h2>
          <p className="mb-3 text-sm">Enter the contribute amount</p>
          <input
            type="text"
            placeholder="$10"
            name="supportCampaign"
            className="text-lg font-medium py-2 px-5 border border-strock w-full rounded mb-5"
          ></input>
          <p className="mb-3 text-sm mt-5">
            Contribution are not associated with perks
          </p>
          <Button kind="primary">Continue</Button>
          <div className="mt-[60px]"></div>
          <CampaignPerk showButton></CampaignPerk>
        </ReactModal>

        {/* <Overlay /> */}
        <DashboardTopBar></DashboardTopBar>
        <div className="flex items-start gap-x-10">
          <DashboardSideBar></DashboardSideBar>
          <div className="flex-1">
            {/* lưu ý sử dụng outLet để tránh render lại các side,topbar chung chỉ cần render phần bên trong nên khỏi cần bọc LayoutDashboard bên ngoài từng thằng */}
            <Outlet></Outlet>
            {/* {children} không sử dụng được phải  */}
          </div>
        </div>
      </div>
    </RequiredAuthPage>
  );
};

export default LayoutDashboard;
