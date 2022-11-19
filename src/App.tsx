import Home from "./app/pages/Home";
import "./app.scss";
import { Suspense } from "react";
import "./i18n";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Suspense fallback={null}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/?city={cname}" element={<Home />} />
        </Routes>
      </Suspense>
    </div>
  );
}

export default App;
