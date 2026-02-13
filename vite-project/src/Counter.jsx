import { useState } from "react";
import { Button } from "./components/Button/Button";

// export const Counter = () => {
//   const [count, setCount] = useState(0);

//   console.log("Рендер компонента");

//   return <button onClick={() => setCount(count + 1)}>count is {count}</button>;
// };

export const Counter = () => {
  const [count, setCount] = useState(0);

  const setCounterHandler = () => {
    setCount((prev) => {
      console.log(prev);
      return prev + 1;
    });
  };

  return <Button onClick={setCounterHandler}>count is {count}</Button>;
};
