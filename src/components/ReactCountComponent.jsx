import { useMemo, useEffect, useState } from "react";

export default function Count() {
    useEffect(() => {
      console.log("Component initialized!");
    }, []);

    console.log("Component updated!"); // React component updates multiple times

    //---

    const [count, setCount] = useState(0);

    function incrementCount() {
      setCount(prevCount => {
        const newCount = prevCount + 1;
        console.log(`Count is: ${newCount}`);
        return newCount;
      });
    };

    const doubleCount = useMemo(() => {
      return count * 2;
    }, [count]);

    useEffect(() => {
      console.log(`Double of count is: ${doubleCount}`);
    }, [doubleCount]);

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