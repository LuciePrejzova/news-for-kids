import "./App.css";

import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";

import Navbar from "./components/Navbar";
import LatestNews from "./components/LatestNews";
import MainPage from "./layouts/MainPage";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<MainPage />}>
    </Route>
  )
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
