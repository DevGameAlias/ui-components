import React, { useState } from "react";
import { Button } from "./components/componentsExports";
import "./styles/index.css";

function App() {
  const [loading, setLoading] = useState(false);

  const handleFakeSubmit = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2000); // Simulate a 2-second load time
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 gap-4">
      <Button variant="primary">Primary Button</Button>
      <Button variant="secondary">Secondary Button</Button>
      <Button variant="danger">Danger Button</Button>

      <Button variant="primary" disabled>
        Disabled Button
      </Button>

      <Button variant="primary" loading={loading} onClick={handleFakeSubmit}>
        Submit
      </Button>
    </div>
  );
}

export default App;
