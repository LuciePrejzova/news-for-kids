import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router";
import "./index.css";
import App from "./App.jsx";
import { store } from "./state/store.js";
import { Provider } from "react-redux";
import UserProvider from "./context/UserProvider.jsx";

createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <UserProvider>
      <App />
    </UserProvider>
  </Provider>
);
