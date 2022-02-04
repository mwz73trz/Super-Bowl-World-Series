import { render } from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import SuperBowlPage from "./routes/SuperBowlPage";
import WorldSeriesPage from "./routes/WorldSeriesPage";
import SuperBowlDetail from "./routes/SuperBowlDetail";

const rootElement = document.getElementById("root");
render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route path="superbowls" element={<SuperBowlPage />}>
          <Route
            index
            element={
              <main style={{ padding: "1rem" }}>
                <p>Select a Super Bowl</p>
              </main>
            }
          />
          <Route path=":superbowlId" element={<SuperBowlDetail />} />
        </Route>
        <Route path="worldseries" element={<WorldSeriesPage />} />
        <Route
          path="*"
          element={
            <main style={{ padding: "1rem" }}>
              <p>There's nothing here!</p>
            </main>
          }
        />
      </Route>
    </Routes>
  </BrowserRouter>,
  rootElement
);
