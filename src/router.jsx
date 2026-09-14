import { createBrowserRouter } from "react-router";



const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/Products",
    element : <Products />
  }
]);

export default router;