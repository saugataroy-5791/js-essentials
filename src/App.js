import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import Body from "./components/Body";
import ErrorPage from "./components/ErrorPage";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Introduction from "./components/topics/Introduction";
import "./styles.scss";
import { DrawerProvider } from "./utils/context/DrawerContext";

const App = () => {
  return (
    <div className="app">
      <DrawerProvider>
        <Header />
        <Outlet />
        <Footer />
      </DrawerProvider>
    </div>
  );
};

const routes = [
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Body />,
        children: [
          {
            path: "/",
            element: <Introduction />,
          },
          {
            path: "/introduction",
            element: <Introduction />,
          },
          {
            path: "*",
            element: <ErrorPage />,
          },
        ],
      },
    ],
  },
];

const router = createBrowserRouter(routes);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={router} />);
