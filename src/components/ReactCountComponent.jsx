import { useMemo, useEffect, useState } from "react";

export default function Count() {
    useEffect(() => {
      console.log("Component initialized!");
    }, []);

    console.log("Component updated!"); // React component updates multiple times

    //---

    const isFirstRender = useRef(true);
    const [count, setCount] = useState(0);

    function incrementCount() {
      setCount(prevCount => {
        const newCount = prevCount + 1;
        console.log(`Count is: ${newCount}`);
        return newCount;
      });
    };

    useEffect(() => {
      if (isFirstRender.current) {
          isFirstRender.current = false;
      } else {
          console.log(`Double of count is: ${count * 2}`);
      }
    }, [count]);

    return (
      <div>
        <h1>React Count</h1>
        <h2>Count is: {count}</h2>
        <button onClick={incrementCount}>Count</button>
        <p>
          <a href="/vue-count">{"To Vue count ->"}</a>
        </p>
      </div>
    )
  }