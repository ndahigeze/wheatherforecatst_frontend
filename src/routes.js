/*!

=========================================================
* Argon Dashboard PRO React - v1.2.0
=========================================================

* Product Page: https://www.creative-tim.com/product/argon-dashboard-pro-react
* Copyright 2021 Creative Tim (https://www.creative-tim.com)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/



import Home from "views/Home.js";


const routes = [
  {
    icon: "ni ni-ungroup text-success",
    path: "/home",
    name: "Home",
    miniName: "P",
    component: Home,
    layout: "/auth",
  },
];
// const currentRoute = routes.find(
//   route => matchPath(this.props.location.pathname, route)
// )

export default routes;
