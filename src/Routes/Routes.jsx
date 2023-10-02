import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main/Main";
import Home from "../Pages/HomePage/Home/Home";
import Login from "../Login/Login";
import SignUp from "../SignUp/SignUp";
import Secret from "../Secret/Secret";
import PrivateRoute from "./PrivateRoute";
import SignUpNow from "../SignUp/SignUpNow";
import Classes from "../Pages/Classes/Classes";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Main />,
      children: [
       {
        path:"/",
        element:<Home></Home>
       },
       {
        path:"login",
        element:<Login></Login>
       },
       {
        path:"signup",
        element:<SignUp></SignUp>
       },
       {
        path:"sign",
        element:<SignUpNow></SignUpNow>
       },
       {
        path:"secret",
        element:<PrivateRoute><Secret></Secret></PrivateRoute>
       },
       {
        path:"/class",
        element:<Classes></Classes>
       },
      ],
    },
  ]);
  export default router