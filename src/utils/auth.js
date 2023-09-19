import Cookies from "js-cookie";

const accessTokenKey = "access_token";
const refreshTokenKey = "refresh_token";

const objToken = {
  expires: 30,
  domain: process.env.COOKIE_DOMAIN,
};

export const saveToken = (access_token, refresh_token) => {
  console.log("refresh_token : ", refresh_token);
  console.log("access_token : ", access_token);

  if (accessTokenKey && refresh_token) {
    Cookies.set(accessTokenKey, access_token, {
      ...objToken,
    });

    Cookies.set(refreshTokenKey, refresh_token, {
      ...objToken,
    });
  } else {
    Cookies.remove(accessTokenKey, {
      ...objToken,
      path: "/",
      domain: process.env.COOKIE_DOMAIN,
    });

    Cookies.remove(refreshTokenKey, {
      ...objToken,
      path: "/",
      domain: process.env.COOKIE_DOMAIN,
    });
  }
};

export const getToken = () => {
  const access_token = Cookies.get(accessTokenKey);
  const refresh_token = Cookies.get(refreshTokenKey);
  return {
    access_token,
    refresh_token,
  };
};

export const logOut = () => {
  const access_token = Cookies.get(accessTokenKey);
  if (access_token) {
    Cookies.remove(accessTokenKey, {
      ...objToken,
      path: "/",
      domain: process.env.COOKIE_DOMAIN,
    });

    Cookies.remove(refreshTokenKey, {
      ...objToken,
      path: "/",
      domain: process.env.COOKIE_DOMAIN,
    });
  }
};
