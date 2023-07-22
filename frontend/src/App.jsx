import { RouterProvider, createBrowserRouter } from "react-router-dom";

import AdsPage from "./pages/AdsPage";
import ErrorPage from "./pages/ErrorPage";
import HomePage from "./pages/HomePage";
import LandingPage from "./pages/LandingPage";
import LoginPage from "./pages/LoginPage";
import PostPage from "./pages/PostPage";
import RegisterPage from "./pages/RegisterPage";
import SharedLayout from "./pages/SharedLayout";
import StartLayout from "./pages/StartLayout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <StartLayout />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <LandingPage /> },
      { path: "register", element: <RegisterPage /> },
      { path: "login", element: <LoginPage /> },
      {
        path: "main",
        element: <SharedLayout />,
        children: [
          { index:true, element: <HomePage /> },
          { path: "posts", element: <PostPage /> },
          { path: "ads", element: <AdsPage /> },
        ],
      },
    ],
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
