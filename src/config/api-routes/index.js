import qs from "qs";

const MainRoute = "https://immense-basin-33254.herokuapp.com";

const Routes = {
  login: "/auth/login",
  changePassword: "/auth/changepassword"
};

export const getRoute = routeName => {
  return MainRoute + Routes[routeName];
};

export const getOptionsWithRoute = (routeName, data, token) => {
  let url = getRoute(routeName);
  let options ;
  if (!token) {
     options = {
      method: "POST",
      headers: { "content-type": "application/x-www-form-urlencoded" },
      url,
      data: qs.stringify(data)
    };
  } else {
     options = {
      method: "POST",
      headers: { "content-type": "application/x-www-form-urlencoded", "Authorization" : `Bearer ${token}` },
      url,
      data: qs.stringify(data)
    };
  }

  return options;
};
