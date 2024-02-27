import { useState } from "react";

const Input = () => {
  const [counter, setCounter] = useState(0);

  const handleClick = () => {
    setCounter(counter + 1);
    console.log(counter);
  };
  return (
    <div className="App">
      <button onClick={handleClick}>Hello</button>

      {Array.from(Array(counter)).map((c, index) => {
        return <input key={c} type="text"></input>;
      })}
    </div>
  );
};

export default Input;
