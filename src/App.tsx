import Home from "./app/pages/Home";
import "./app.scss";
import { Suspense } from "react";
import "./i18n";

function App() {
  return (
    <div className="App">
      <Suspense fallback={null}>
        <Home />
      </Suspense>
    </div>
  );
}

export default App;
