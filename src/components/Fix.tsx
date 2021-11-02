import { useState, useEffect } from "react";
import ky from "ky";
import axios from "axios";

function Fix() {
  const [data, setData] = useState<any>([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const controller = new AbortController();
    (async () => {
      setIsLoading(true);
      setTimeout(async () => {
        // ----- node fetch ------
        // const rawData = await fetch(
        //   "https://jsonplaceholder.typicode.com/todos/",
        //   { signal: controller.signal }
        // );
        // const data = await rawData.json();

        // ----- ky ------
        const data = await ky
          .get("https://jsonplaceholder.typicode.com/todos")
          .json();

        // ----- axios ------
        // const data = await axios.get(
        //   "https://jsonplaceholder.typicode.com/todos",
        //   { signal: controller.signal }
        // );

        console.log(data);
        setData(data);
        setIsLoading(false);
      }, 2000);
    })();

    return () => {
      controller.abort();
    };
  }, []);

  return (
    <div>
      <h1>Fix {isLoading && "loading ..."}</h1>
    </div>
  );
}

export default Fix;
