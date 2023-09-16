import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles.css';
import { Home } from './views/Home';
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Header } from './components/Header';
import { MovieDetail } from './views/MovieDetails';

const router = createBrowserRouter([
  {
    element: <Header />,
    children: [
      {
        path: '/',
        element: <Home />
      },

      {
        path: '/movie/:id',
        element: <MovieDetail />
      }
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
