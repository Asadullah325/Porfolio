import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import MainLayout from "./layouts/MainLayout";
import ErrorPage from "./pages/ErrorPage";


const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/about",
        element: <h1>About</h1>,
      },
      {
        path: "/contact",
        element: <h1>Contact</h1>,
      }
    ],
  },
  {
    path: "*",
    element: <ErrorPage />,
  },
]);

const App = () => {

  return (
    <>
      <RouterProvider router={router}>

      </RouterProvider>
    </>
  );
};

export default App;
