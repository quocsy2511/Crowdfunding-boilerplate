import axios from "axios";
import React from "react";
import { toast } from "react-toastify";
import { IMGBB_API } from "../../config/config";

const Upload = ({ onChange = () => {}, name = "" }) => {
  const handleUploadImage = async (e) => {
    const file = e.target.files;
    console.log("file : ", file);
    // imgbbAPI
    if (!file) {
      return;
    }
    const bodyFormData = new FormData();
    bodyFormData.append("image", file[0]);
    const response = await axios({
      method: "post",
      url: `${IMGBB_API}`,
      data: bodyFormData,
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });

    const imageData = response.data.data;
    if (!imageData) {
      toast.error("Upload fail");
    }
    const imageObj = {
      medium: imageData.medium.url,
      thumb: imageData.thumb.url,
      url: imageData.url,
    };

    onChange(name, imageObj);
    // console.log(response.data.data.url);
  };

  return (
    <label className=" max-w-[200px] h-[200px] border border-gray-200 border-dashed rounded-xl cursor-pointer flex items-center justify-center">
      <input
        type="file"
        onChange={handleUploadImage}
        className="hidden"
      ></input>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
        fill="currentColor"
        className="w-5 h-5"
      >
        <path d="M9.25 13.25a.75.75 0 001.5 0V4.636l2.955 3.129a.75.75 0 001.09-1.03l-4.25-4.5a.75.75 0 00-1.09 0l-4.25 4.5a.75.75 0 101.09 1.03L9.25 4.636v8.614z" />
        <path d="M3.5 12.75a.75.75 0 00-1.5 0v2.5A2.75 2.75 0 004.75 18h10.5A2.75 2.75 0 0018 15.25v-2.5a.75.75 0 00-1.5 0v2.5c0 .69-.56 1.25-1.25 1.25H4.75c-.69 0-1.25-.56-1.25-1.25v-2.5z" />
      </svg>
    </label>
  );
};

export default Upload;
