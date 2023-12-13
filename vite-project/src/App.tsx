import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Display from "./components/Display";

interface User {
  id: number;
  userId: number;
  title: string;
  completed: boolean;
}

function App() {
  const [users, setUsers] = useState<User[]>([]);

  const asyncFunc = async () => {
    const res = await fetch("https://jsonplaceholder.typicode.com/todos");
    const responce = await res.json();
    console.log(responce);
    setUsers(responce);
  };

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => asyncFunc()}>Push!!</button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      <Display users={users} />
    </>
  );
}

export default App;
