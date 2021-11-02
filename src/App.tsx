import { useState } from "react";
import Fix from "./components/Fix";
import Test from "./components/Test";

function App() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <button onClick={() => setIsOpen((prev) => !prev)}>
        {isOpen ? "open" : "close"}
      </button>
      <hr />
      {/* {isOpen && <Test />} */}
      {isOpen && <Fix />}
    </div>
  );
}

export default App;
