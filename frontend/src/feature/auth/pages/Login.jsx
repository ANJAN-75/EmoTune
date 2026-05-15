import React,{useState} from "react";
import "./form.scss";
import { UseAuth } from "../hook/useAuth";
const Login = () => {
  const { user, loading, handleLogin } = UseAuth()
  const [userId, setUserId] = useState("");
  const [password, setPassword] = useState("");
  const handelSubmit = async (e) => {
    e.preventDefault();
    await handleLogin(userId,password)
    console.log("login sucessfully")
  };
  return (
    <div>
      <main>
        <div className="form-container">
          <h2>Login</h2>
          <form onSubmit={handelSubmit}>
            <input
              onChange={(e) => setUserId(e.target.value)}
              type="text"
              placeholder="enter email or username"
            />
            <input
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              placeholder="enter Password"
            />
            <button type="submit">Submit</button>
          </form>
        </div>
      </main>
    </div>
  );
};

export default Login;
