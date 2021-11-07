import { useState, useEffect } from "react";
import ky from "ky";

function Test() {
  const [data, setData] = useState<any>([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    (async () => {
      setIsLoading(true);
      setTimeout(async () => {
        const data = await ky
          .get("https://jsonplaceholder.typicode.com/todos/")
          .json();
        console.log(data);
        setData(data);
        setIsLoading(false);
      }, 2000);
    })();
  }, []);

  return (
    <div>
      <h1>Test {isLoading && "loading ..."}</h1>
    </div>
  );
}

export default Test;
