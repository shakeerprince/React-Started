import React, {lazy, Suspense} from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import RestaurantCart from "./components/RestaurantCart";
import Body from "./components/Body";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
//import About from "./components/About";
import ContactUs from "./components/ContactUs";
import Error from "./components/Error";
import { Provider } from React-redux;

//import Grocery from "./components/Grocery";

/**
 * Chunking
 * Code Splitting
 * Dynamic Bundling
 * lazy loading
 * on demand loading
 * dynamic import
 *  
 */

const Grocery = lazy(()=> import("./components/Grocery"))
const About = lazy(()=> import("./components/About"))


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
        element:<Suspense fallback={<h1>About</h1>}> <About /> </Suspense> ,
      },
      {
        path:  "/contactUs",
        element: <ContactUs />,
      },
      {
        path:  "/grocery",
        element: <Suspense fallback={<h1>Loading...</h1>}> <Grocery /> </Suspense>,
      }
    ],
    errorElement: <Error />
  },
  
 ])


 const root = ReactDOM.createRoot(document.getElementById("root"));

 root.render(<RouterProvider router={appRouter} />)

