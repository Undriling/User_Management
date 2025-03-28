import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import ErrorBoundary from "./ErrorBoundary.jsx";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router";
import AppStore from "./store/store.jsx";
import { Provider } from "react-redux";
import About from "./components/about.jsx";
import Profile from "./components/profile.jsx";
import Signup from "./components/signUp.jsx";
import Login from "./components/login.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Signup />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/dashboard",
    element: <App />,
  },
  {
    path: "/about-us",
    element: <About />,
  },
  {
    path: "/profile",
    element: <Profile />,
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={AppStore}>
      <ErrorBoundary>
        <RouterProvider router={router} />
      </ErrorBoundary>
    </Provider>
  </StrictMode>
);
