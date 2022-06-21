import ReactDOM from "react-dom/client";
import "./colors.css";
import "./index.css";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLDivElement);
root.render(
  <Router>
    <App />
  </Router>
);
