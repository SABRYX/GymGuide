const MainRoute = "https://immense-basin-33254.herokuapp.com";

const Routes = {
  login: "/auth/login",
  changePassword: "/auth/changepassword"
};

export const getRoute = routeName => {
  return MainRoute + Routes[routeName];
};

export const getOptionsWithRoute = (routeName, data) => {
  let url = getRoute(routeName);
  const options = {
    method: "POST",
    headers: { "content-type": "application/x-www-form-urlencoded" },
    url,
    data: { ...data }
  };
  return options;
};
