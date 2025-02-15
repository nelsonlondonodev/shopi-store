import { BrowserRouter, useRoutes } from "react-router-dom";
import { ShopingCartProvider } from "../../Context";
import Home from "../Home";
import MyAccount from "../MyAccount";
import MyOrder from "../MyOrder";
import MyOrders from "../MyOrders";
import NotFound from "../NotFound";
import SingIn from "../SingIn";
import Navbar from "../../Components/Navbar";
import CheckOutSideMenu from "../../Components/CheckOutSideMenu";
import "./App.css";

const AppRoutes = () => {
  let routes = useRoutes([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/clothes",
      element: <Home />,
    },
    {
      path: "/electronics",
      element: <Home />,
    },
    {
      path: "/furnitures",
      element: <Home />,
    },
    {
      path: "/toys",
      element: <Home />,
    },
    {
      path: "/others",
      element: <Home />,
    },
    {
      path: "/my-Account",
      element: <MyAccount />,
    },
    {
      path: "/my-Order",
      element: <MyOrder />,
    },
    {
      path: "/my-Orders",
      element: <MyOrders />,
    },
    {
      path: "/my-Orders/last",
      element: <MyOrder />,
    },
    {
      path: "/my-Orders/:id",
      element: <MyOrder />,
    },
    {
      path: "/sing-In",
      element: <SingIn />,
    },
    {
      path: "/*",
      element: <NotFound />,
    },
  ]);

  return routes;
};

const App = () => {
  return (
    <>
      <ShopingCartProvider>
        <BrowserRouter>
          <AppRoutes />
          <Navbar />
          <CheckOutSideMenu />
        </BrowserRouter>
      </ShopingCartProvider>
    </>
  );
};

export default App;
