import React from "react";
import IconDashboard from "../../components/icons/IconDashboard";
import { NavLink } from "react-router-dom";
import {
  IconCampain,
  IconLightDark,
  IconLogout,
  IconPayment,
  IconProfile,
  IconWithDraw,
} from "../../components/icons";
import { useDispatch } from "react-redux";
import { authLogout } from "../../store/auth/auth-slice";

const sidebarLinks = [
  {
    icon: <IconDashboard></IconDashboard>,
    tile: "Dashboard",
    url: "/",
  },
  {
    icon: <IconCampain></IconCampain>,
    tile: "Campaign",
    url: "/campaign",
  },
  {
    icon: <IconPayment></IconPayment>,
    tile: "Payment",
    url: "/payment",
  },
  {
    icon: <IconWithDraw></IconWithDraw>,
    tile: "With Draw",
    url: "/withDraw",
  },
  {
    icon: <IconProfile></IconProfile>,
    tile: "Profile",
    url: "/profile",
  },
  {
    icon: <IconLogout></IconLogout>,
    tile: "log Out",
    url: "/logout",
  },
  {
    icon: <IconLightDark></IconLightDark>,
    tile: "Light/Dark",
    url: "/lightDark",
  },
];

const DashboardSideBar = () => {
  const dispatch = useDispatch();

  return (
    <div className="w-full md:w-[76px] rounded-3xl  bg-white shadow-[10px_10px_20px_rgba(218,_213,_213,_0.15)] px-[14px] py-10 flex flex-col flex-shrink-0">
      {sidebarLinks.map((link) => {
        if (link.url === "/logout") {
          return (
            <button
              key={link.tile}
              onClick={() => dispatch(authLogout())}
              className="flex items-center gap-x-5 md:w-12 md:h-12 md:justify-center md:rounded-lg md:mb-8 last:mt-auto last:bg-white last:shadow-sdprimary"
            >
              <span className="cursor-pointer">{link.icon}</span>
              <span className="md:hidden">{link.tile}</span>
            </button>
          );
        }
        return (
          <NavLink
            to={link.url}
            key={link.tile}
            className={({ isActive }) =>
              isActive
                ? `flex items-center gap-x-5 md:w-12 md:h-12 md:justify-center md:rounded-lg md:mb-8 last:mt-auto last:bg-white last:shadow-sdprimary bg-primary text-primary bg-opacity-20 `
                : `flex items-center gap-x-5 md:w-12 md:h-12 md:justify-center md:rounded-lg md:mb-8 last:mt-auto last:bg-white last:shadow-sdprimary text-icon-color`
            }
          >
            <span className="cursor-pointer">{link.icon}</span>
            <span className="md:hidden">{link.tile}</span>
          </NavLink>
        );
      })}
    </div>
  );
};

export default DashboardSideBar;
