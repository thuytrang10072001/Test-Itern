import React from "react";
import Routers from "./routers/routers";
import { BrowserRouter } from "react-router-dom";
function App() {
  return (
    <BrowserRouter>
      <Routers />
    </BrowserRouter>
  );
}

export default App;
