// index.jsx

import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.jsx';
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './Pages/Home.jsx';
import About from './Pages/About.jsx';
import Blog from './Pages/Blog.jsx';
import Contact from './Pages/Contact.jsx';
import Service from './Pages/Service.jsx';
import SIngleBlog from './Pages/SIngleBlog.jsx';



const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      { path: '/', element: <Home /> },
      { path: 'about', element: <About /> },
      { path: 'blog', element: <Blog /> },
      { path: 'service', element: <Service /> },
      { path: 'contact', element: <Contact /> },
      {
        path: 'blogs/:id',
        element: <SIngleBlog />,
        loader: async ({params}) => {
          const response = await fetch(`http://localhost:5000/blogs/${params.id}`);
          if (!response.ok) {
            throw new Error('Blog not found');
          }
          return response.json();
        }
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
