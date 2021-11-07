import { useState } from "react";
import WithAbort from "./components/WithAbort";
import WithOutAbort from "./components/WithOutAbort";

function App() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <button onClick={() => setIsOpen((prev) => !prev)}>
        {isOpen ? "open" : "close"}
      </button>
      <hr />
      {isOpen && <WithOutAbort />}
      {/* {isOpen && <WithAbort />} */}
    </div>
  );
}

export default App;
