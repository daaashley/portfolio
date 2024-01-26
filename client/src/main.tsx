import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  BrowserRouter,
  createBrowserRouter,
  Route,
  RouterProvider,
  Routes,
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
import { AboutPage } from './pages/AboutPage';
import { SocketProvider } from './context/compiler-state-context';

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
  },
  {
    path: "/about",
    element: <AboutPage />
  }
]);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <EditorStateProvider>
      <SocketProvider>
      <BrowserRouter basename="/">
      <Routes>
        <Route path="/index.html" element={<App />} />
        <Route path="/posts/:id" element={<PostPage />} /> 
        <Route path="/compilers" element={<Compilers />} /> 
        <Route path="/about" element={<AboutPage />} /> 
      </Routes>
    </BrowserRouter>
      </SocketProvider>
    </EditorStateProvider>
  </React.StrictMode>,
)
