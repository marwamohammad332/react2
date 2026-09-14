import React from 'react'
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import router from './router';

export default function App() {
  return (
    <RouterProvider router={router} />
  )
}
