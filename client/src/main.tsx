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
import { LoginPage } from './pages/LoginPage';
import { Compilers } from './pages/Compilers';
import { EditorStateProvider } from './context/editor-state-context'

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
    path: "/compilers",
    element: <Compilers />
  },
  {
    path: "/create",
    element: <CreatePage />
  },
  {
    path: "/posts/:id/update",
    element: <UpdatePage />
  },
  {
    path: "/user/login",
    element: <LoginPage />
  }
]);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <EditorStateProvider>
    <RouterProvider router={router} />
    </EditorStateProvider>
  </React.StrictMode>,
)
