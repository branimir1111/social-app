import axios from "axios";
import { useEffect, useState } from "react";

const App = () => {
  return (
    <div className="w-screen h-screen grid place-content-center circle-blue">
      <div className="bg-emerald-500 w-52 h-52 rounded-full shadow-2xl grid place-content-center">
        <div className="bg-teal-200 w-32 h-32 rounded-full shadow-2xl grid place-content-center">
          <div className="bg-red-500 w-16 h-16 rounded-full shadow-2xl grid place-content-center">
            <h1 className="text-center">
              Social
              <br />
              App
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
