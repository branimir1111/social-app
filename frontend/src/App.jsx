import axios from "axios";
import { useEffect, useState } from "react";

const App = () => {
  const [response, setResponse] = useState("");

  const handleRequest = async () => {
    const { data } = await axios("http://localhost:4000/api/v1");
    setResponse(data);
  };
  return (
    <>
      <h1>This is Frontend</h1>
      <p className="text-3xl font-bold underline">
        {response ? response : "Call backend"}
      </p>
      <button type="button" onClick={handleRequest}>
        Call Backend
      </button>
    </>
  );
};

export default App;
