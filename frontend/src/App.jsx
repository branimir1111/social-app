import { createBrowserRouter, RouterProvider } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import StartLayout from "./pages/StartLayout";
import ErrorPage from "./pages/ErrorPage";
import RegisterPage from "./pages/RegisterPage";
import LoginPage from "./pages/LoginPage";
import SharedLayout from "./pages/SharedLayout";
import HomePage from "./pages/HomePage";
import PostPage from "./pages/PostPage";
import AdsPage from "./pages/AdsPage";

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
          { path: "home", element: <HomePage /> },
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
