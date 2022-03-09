
import React from "react";
import ReactDOM from "react-dom";
// react library for routing
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

// plugins styles from node_modules
import "react-notification-alert/dist/animate.css";
import "react-perfect-scrollbar/dist/css/styles.css";
import "@fullcalendar/common/main.min.css";
import "@fullcalendar/daygrid/main.min.css";
import "sweetalert2/dist/sweetalert2.min.css";
import "select2/dist/css/select2.min.css";
import "quill/dist/quill.core.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
// plugins styles downloaded
import "assets/vendor/nucleo/css/nucleo.css";
// core styles
import "assets/scss/argon-dashboard-pro-react.scss?v1.2.0";
import 'react-phone-input-2/lib/bootstrap.css'
import "assets/css/custom.css"
import "react-notification-alert/dist/animate.css";
import AuthLayout from "layouts/Auth.js";
import 'react-bootstrap-table-next/dist/react-bootstrap-table2.min.css';



ReactDOM.render(
 
    <BrowserRouter>
      <Switch>
        <Route path="/" render={(props) => <AuthLayout {...props} />} />
        <Redirect from="*" to="/" />
      </Switch>
      </BrowserRouter>,

  
  document.getElementById("root")
);
