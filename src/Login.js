import React, { useState } from "react";
import { useUser } from "./UserProvider";

const Login = () => {
  const [input, setInput] = useState("");
  const { setUsername } = useUser();

  const handleLogin = () => {
    setUsername(input);
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Enter username"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button onClick={handleLogin}>Login</button>
    </div>
  );
};

export default Login;
