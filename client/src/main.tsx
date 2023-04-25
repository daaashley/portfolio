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
import { CreatePage } from './pages/CreatePage';
import { UpdatePage } from './pages/UpdatePage';


const router = createBrowserRouter([
  {
    path: "/index.html",
    element: <App />,
  },
  {
    path: "/posts/:id",
    element: <PostPage />
  },
  {
    path: "/create",
    element: <CreatePage />
  },
  {
    path: "/posts/:id/update",
    element: <UpdatePage />
  }
]);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
