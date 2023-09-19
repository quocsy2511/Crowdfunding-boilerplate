import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { withErrorBoundary } from "react-error-boundary";
//withErrorBoundary : dùng để bắt lỗi chỉ mỗi thằng component đo thôi còn mấy thằng
// khác vẫn hiện thị bth ví dụ như thằng signUp dùng component này nêu
//và thêm  nh thằng khác thì nếu thăng này lỗi thì ko ảnh hưởng tới thằng khác (ko bị trắng trang)
import ErrorComponent from "../components/common/ErrorComponent";
import { useSelector } from "react-redux";

const LayoutAuthentication = (props) => {
  const { children, heading } = props;
  const { user } = useSelector((state) => state.auth);
  const navigate = useNavigate();
  useEffect(() => {
    if (user && user.email) {
      navigate("/");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user]);
  if (user) return null;
  return (
    //isolate: xác định liệu một phần tử có phải tạo ngữ cảnh xếp chồng mới hay không
    <div className="relative w-full min-h-screen p-10 bg-lite dark:bg-dark isolate">
      <img
        src="/ellipse.png"
        alt="bg"
        className="hidden lg:block absolute bottom-0 left-0 right-0 pointer-events-none z-[-1] w-full h-2/3 "
      />
      <Link to="/" className="inline-block mb-5 lg:mb-16">
        <img src="/Logo.png" alt="home" />
      </Link>
      <div className="w-full max-w-[556px] bg-white rounded-xl lg:py-12 lg:px-16 px-5 py-8 mx-auto dark:bg-darkSecondary">
        <h1 className="mb-1 text-lg font-semibold text-center lg:text-xl lg:mb-3 text-text1 dark:text-white">
          {heading}
        </h1>
        {children}
      </div>
    </div>
  );
};

export default withErrorBoundary(LayoutAuthentication, {
  FallbackComponent: ErrorComponent,
});
