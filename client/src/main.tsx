import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import App from './App'
import './index.css'
import { PostPage } from './pages/PostPage';


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: `/post/:id`,
    element: <PostPage />
  }
]);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
