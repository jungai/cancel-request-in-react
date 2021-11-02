import { useState, useEffect } from "react";
import ky from "ky";
import axios from "axios";

function Fix() {
  const [data, setData] = useState<any>([]);
  const [isLoading, setIsLoading] = useState(false);

  // install
  const controller = new AbortController();
  const client = ky.extend({ signal: controller.signal });

  useEffect(() => {
    (async () => {
      setIsLoading(true);
      setTimeout(async () => {
        // const rawData = await fetch(
        //   "https://jsonplaceholder.typicode.com/todos/",
        //   { signal: controller.signal }
        // );
        // const data = await rawData.json();

        const data = await client
          .get("https://jsonplaceholder.typicode.com/todos")
          .json();

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
