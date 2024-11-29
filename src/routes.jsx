import { createBrowserRouter } from "react-router-dom"; 
import Movie from "./pages/Movie";
import Directors from "./pages/Directors";
import Actors from "./pages/Actors";
import ErrorPage from "./pages/ErrorPage"; 
import NavBar from "./components/NavBar"; 
import Home from "./pages/Home";

// Define the routes
const routes = [
  {
    path: "/",
    element: (
      <>
        <NavBar />
        <Home />
      </>
    ),
  },
  {
    path: "/movie/:id", 
    element: (
      <>
        <NavBar />
        <Movie />
      </>
    ),
  },
  {
    path: "/directors", 
    element: (
      <>
        <NavBar />
        <Directors />
      </>
    ),
  },
  {
    path: "/actors", 
    element: (
      <>
        <NavBar />
        <Actors />
      </>
    ),
  },
  {
    path: "*", // Catch-all for unknown routes
    element: <ErrorPage />, // Error page for invalid routes
  },
];

export default routes;
