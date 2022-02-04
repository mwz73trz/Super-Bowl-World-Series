import { render } from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import SuperBowlPage from "./routes/SuperBowlPage";
import WorldSeriesPage from "./routes/WorldSeriesPage";

const rootElement = document.getElementById("root");
render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route path="superbowls" element={<SuperBowlPage />} />
        <Route path="worldseries" element={<WorldSeriesPage />} />
      </Route>
    </Routes>
  </BrowserRouter>,
  rootElement
);
