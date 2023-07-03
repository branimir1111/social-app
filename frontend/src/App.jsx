import axios from "axios";
import { useEffect, useState } from "react";

const App = () => {
  const [response, setResponse] = useState("");

  const handleRequest = async () => {
    const { data } = await axios("http://localhost:4000/api/v1");
    setResponse(data);
  };
  return (
    <div className="w-screen h-screen grid place-content-center">
      <div className="w-[650px] grid place-content-center">
        <h1>This is Frontend</h1>
        <p className="text-3xl font-bold underline">
          {response ? response : "Call backend"}
        </p>
        <button
          className="border-2 p-[5px] rounded-md"
          type="button"
          onClick={handleRequest}
        >
          Call Backend
        </button>
      </div>
    </div>
  );
};

export default App;
