import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import RestaurantCart from "./components/RestaurantCart";
import Body from "./components/Body";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import About from "./components/About";
import ContactUs from "./components/ContactUs";
import Error from "./components/Error";

const AppLayout = ()=>{
  return (
    <div className="app">
      <Header />
      <Outlet />
    </div>
  )
 }

 const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path:  "/contactUs",
        element: <ContactUs />,
      }
    ],
    errorElement: <Error />
  },
  
 ])


 const root = ReactDOM.createRoot(document.getElementById("root"));

 root.render(<RouterProvider router={appRouter} />)

