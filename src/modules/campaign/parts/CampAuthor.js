import React from "react";
import { defaultImage } from "../../../constants/global";

const CampAuthor = ({ image = defaultImage, author = "Hoa Hậu Ý Nhi Đần" }) => {
  return (
    <div className="flex items-center gap-x-3">
      <div className="w-8 h-8 rounded-full overflow-hidden">
        <img src={image} alt=" " className="object-cover w-full h-full " />
      </div>
      <p className="text-text3 text-xs">
        by
        <span className="text-text2 font-semibold text-xs"> {author}</span>
      </p>
    </div>
  );
};

export default CampAuthor;
