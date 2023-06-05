import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './style/index.scss'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import ErrorPage from "./routes/ErrorPage.jsx";
import LoginPage from "./routes/LoginPage.jsx"

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
  },
  {
    path: "./src/routes/LoginPage.jsx",
    element: <LoginPage />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)