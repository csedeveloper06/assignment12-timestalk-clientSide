
import {
    createBrowserRouter,
  } from "react-router-dom";
import Main from "../LayOut/Main";
import Home from "../Pages/Home/Home/Home";
import Register from "../Pages/Register/Register";
import Login from "../Pages/Login/Login";
import AllArticles from "../Pages/AllArticles/AllArticles";
import AddArticles from "../Pages/AddArticles/AddArticles";
import SubsCription from "../Pages/SubsCription/SubsCription";
import MyArticles from "../Pages/MyArticles/MyArticles";
import PremiumArticles from "../Pages/PremiumArticles/PremiumArticles";
import MyProfile from "../Pages/MyProfile/MyProfile";
import ErrorPage from "../ErrorPage/ErrorPage";

  export const router = createBrowserRouter([
    {
      path: "/",
      errorElement: <ErrorPage></ErrorPage>,
      element:<Main></Main>,
      children: [
        {
            path: '/',
            element: <Home></Home>
        },
        {
            path: '/register',
            element: <Register></Register>
        },
        {
          path: '/login',
          element: <Login></Login>
        },
        {
            path: '/allarticles',
            element: <AllArticles></AllArticles>
        },
        {
            path: '/addarticles',
            element: <AddArticles></AddArticles>
        },
        {
            path: '/subscription',
            element: <SubsCription></SubsCription>
        },
        {
            path: '/myarticles',
            element: <MyArticles></MyArticles>
        },
        {
            path: '/premiumarticles',
            element: <PremiumArticles></PremiumArticles>
        },
        {
            path: '/myprofile',
            element: <MyProfile></MyProfile>
        },
      ]
    },
  ]);