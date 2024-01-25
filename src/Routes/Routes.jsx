import { createBrowserRouter } from "react-router-dom";
import Main from "../LayOut/Main";
import Home from "../Pages/Home/Home/Home";
import Register from "../Pages/Register/Register";
import Login from "../Pages/Login/Login";
import AllArticles from "../Pages/AllArticles/AllArticles";
import AddArticles from "../Pages/AddArticles/AddArticles";
import SubsCription from "../Pages/SubsCription/SubsCription";
import PremiumArticles from "../Pages/PremiumArticles/PremiumArticles";
import MyProfile from "../Pages/MyProfile/MyProfile";
import ErrorPage from "../ErrorPage/ErrorPage";
import CardDetails from "../Components/ArticalCardDetails/CardDetails";
import Dashboard from "../LayOut/Dashboard";
import AdminAllArticles from "../Pages/Dashboard/AdminAllArticles/AdminAllArticles";
import PrivateRoute from "./PrivateRoute/PrivateRoute";
import AllUsers from "../Pages/Dashboard/AllUsers/AllUsers";
import AllPublishers from "../Pages/Dashboard/AllPublishers/AllPublishers";
import AdminRoute from "./AdminRoute";
import MyArticles from "../Pages/MyArticles/MyArticles";
import Payment from "../Pages/Dashboard/Payment/Payment";
import PaymentHistory from "../Pages/Dashboard/PaymentHistory/PaymentHistory";

export const router = createBrowserRouter([
  {
    path: "/",
    errorElement: <ErrorPage></ErrorPage>,
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/allarticles",
        element: <AllArticles></AllArticles>,
      },
      {
        path: "/carddetails/:_id",
        element: <CardDetails></CardDetails>,
        loader: () => fetch("https://assignment12-timestalk-server.vercel.app/articles"),
      },
      {
        path: "/addarticles",
        element: <AddArticles></AddArticles>,
      },
      {
        path: "/subscription",
        element: <SubsCription></SubsCription>,
      },
      {
        path: "/myarticles",
        element: (
          <PrivateRoute>
            <MyArticles></MyArticles>
          </PrivateRoute>
        ),
      },
      {
        path: "/premiumarticles",
        element: (
          <PrivateRoute>
            <PremiumArticles></PremiumArticles>
          </PrivateRoute>
        ),
      },
      {
        path: "/myprofile",
        element: <MyProfile></MyProfile>,
      },
      {
        path: "/dashboard/payment",
        element: <Payment></Payment>,
      },
      {
        path: "/dashboard/paymentHistory",
        element: <PaymentHistory></PaymentHistory>,
      },
      {
        path: "dashboard",
        element: (
          <PrivateRoute>
            <Dashboard></Dashboard>
          </PrivateRoute>
        ),
        children: [
          {
            path: "/dashboard/adminallarticles",
            element: (
              <AdminRoute>
                <AdminAllArticles></AdminAllArticles>
              </AdminRoute>
            ),
          },
          {
            path: "/dashboard/allusers",
            element: (
              <AdminRoute>
                <AllUsers></AllUsers>
              </AdminRoute>
            ),
          },
          {
            path: "/dashboard/allpublishers",
            element: (
              <AdminRoute>
                <AllPublishers></AllPublishers>
              </AdminRoute>
            ),
          },
        ],
      },
    ],
  },
]);
