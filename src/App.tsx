import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.css";
import Applayout from "./components/Applayout";
import Login from "./pages/Login";

import Menu from "./pages/Menu";
import SingleUserInfo from "./components/SingleUserInfo";
import Cart from "./components/Cart";

function App() {
  const router = createBrowserRouter([
    {
      element: <Applayout />,
      children: [
        {
          path: "/",
          element: <Login />,
        },

        {
          path: "/menu",
          element: <Menu />,
        },
        {
          path: "menu/:id",
          element: <SingleUserInfo />,
        },
        {
          path: "/cart",
          element: <Cart />,
        },
      ],
    },
  ]);
  return <RouterProvider router={router}></RouterProvider>;
}

export default App;
