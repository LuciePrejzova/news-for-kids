import "./App.css";

import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";

import Navbar from "./components/Navbar";

const router = createBrowserRouter(
  createRoutesFromElements(<Route path="/" element={<Navbar />}></Route>)
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
