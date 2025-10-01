import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";

import { Provider } from "react-redux"; // <-- подключаем провайдер
import store from "./store"; // <-- наш стор

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
      {" "}
      {/* <-- вот он! */}
      <App />
    </Provider>
  </StrictMode>,
);
