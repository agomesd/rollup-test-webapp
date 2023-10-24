import { useState } from "react";
import WidgetWrapper from "./WidgetWrapper";

function App() {
  const [renderWiget, setRenderWidget] = useState(false);

  return (
    <main>
      <button
        onClick={() => setRenderWidget(!renderWiget)}
        style={{
          padding: "1rem",
          border: "1px solid black",
          width: "200px",
          margin: "1rem",
        }}
      >
        {renderWiget ? "Unmount" : "Mount"}
      </button>
      {renderWiget ? <WidgetWrapper /> : null}
    </main>
  );
}

export default App;
