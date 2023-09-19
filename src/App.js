import React, { Suspense, lazy, useEffect } from "react";
import Modal from "react-modal";
import { useDispatch, useSelector } from "react-redux";
import { Route, Routes } from "react-router";
import LayoutDashboard from "./layout/LayoutDashboard";
import LayoutPayment from "./layout/LayoutPayment";
import CheckoutPage from "./pages/CheckoutPage";
import ShippingPage from "./pages/ShippingPage";
import StartCampaign from "./pages/StartCampaign";
import { authFreshToken, authUpdateUser } from "./store/auth/auth-slice";
import { getToken, logOut } from "./utils/auth";

//lazy cho phép render một import động như component. đc hiểu như là khi nào sử dụng , hiện thị thì tự động tải tăng performance
//NOTE : nếu sử dụng thằng lazy thì phải  đc wrap bên ngoài bằng Suspense... ko thì sẽ bị trắng page khi chuyển trang
const SignUpPage = lazy(() => import("./pages/SignUpPage"));
const SignInPage = lazy(() => import("./pages/SignInPage"));
const DashboardPage = lazy(() => import("./pages/DashboardPage"));
const CampaignPage = lazy(() => import("./pages/CampaignPage"));
const CampaignView = lazy(() => import("./modules/campaign/CampaignView"));

//modal
// const customStyles = {
//   content: {
//     //mặc định
//     // top: "50%",
//     // left: "50%",
//     // right: "auto",
//     // bottom: "auto",
//     // marginRight: "-50%",
//     // transform: "translate(-50%, -50%)",
//   },
// };
Modal.setAppElement("#root");
Modal.defaultStyles = {};
//modal

function App() {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth);
  // console.log("user in app : ", user);

  useEffect(() => {
    if (user && user.id) {
      const { access_token } = getToken();
      dispatch(
        authUpdateUser({
          user: user,
          accessToken: access_token,
        })
      );
    } else {
      const { refresh_token } = getToken();
      if (refresh_token) {
        dispatch(authFreshToken(refresh_token));
      } else {
        dispatch(authUpdateUser({}));
        logOut();
      }
    }
  }, [dispatch, user]);

  return (
    <Suspense fallback={<p>vu deo</p>}>
      <Routes>
        <Route element={<LayoutDashboard></LayoutDashboard>}>

          <Route path="/" element={<DashboardPage></DashboardPage>}></Route>
          <Route
            path="/start-campaign"
            element={<StartCampaign></StartCampaign>}
          ></Route>
          <Route
            path="/campaign"
            element={<CampaignPage></CampaignPage>}
          ></Route>
          <Route
            path="/campaign/:slug"
            element={<CampaignView></CampaignView>}
          ></Route>
          
        </Route>


        <Route element={<LayoutPayment></LayoutPayment>}>
          <Route
            path="/check-out"
            element={<CheckoutPage></CheckoutPage>}
          ></Route>
          <Route
            path="/shipping-address"
            element={<ShippingPage></ShippingPage>}
          ></Route>
        </Route>
        <Route path="/register" element={<SignUpPage></SignUpPage>}></Route>
        <Route path="/login" element={<SignInPage></SignInPage>}></Route>
      </Routes>
    </Suspense>
  );
}

export default App;
