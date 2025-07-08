import "./App.css";

import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";

import HomePage from "./pages/HomePage";
import MainLayout from "./layouts/MainLayout";
import ArticleDetail from "./pages/ArticleDetail";
import Register from "./pages/Register";
import Login from "./pages/Login";
import FavoritesPage from "./pages/FavoritesPage";
import AboutUs from "./pages/AboutUs";
import NotFound from "./pages/NotFound";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/news-for-kids/" element={<MainLayout />}>
      <Route index element={<HomePage />} />
      <Route path="article/:id" element={<ArticleDetail />} />
      <Route path="register" element={<Register />} />
      <Route path="login" element={<Login />} />
      <Route path="favorites" element={<FavoritesPage />} />
      <Route path="about" element={<AboutUs />} />
      <Route path="*" element={<NotFound />} />
    </Route>
  )
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
