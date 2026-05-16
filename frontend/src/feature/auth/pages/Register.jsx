import React,{useState} from "react";
import "./form.scss"
import { UseAuth } from "../hook/useAuth";
import {Link,useNavigate} from "react-router"
const Register = () => {
  const{loading,user,handleRegister} =UseAuth()
  const [email, setEmail] = useState("")
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const navigate=useNavigate()
  const handleSubmit=async(e)=>{
    e.preventDefault();
    await handleRegister(email,username,password)
    navigate("/")
  }
  return (
    <div>
      <main>
        <div className="form-container">
          <h2>Register</h2>
          <form onSubmit={handleSubmit}>
            <input
            onChange={e=>setEmail(e.target.value)}
             type="text" placeholder="enter email " />
            <input
            onChange={e=>setUsername(e.target.value)}
             type="text" placeholder="enter username " />
            <input 
            onChange={e=>setPassword(e.target.value)}
            type="password" placeholder="enter Password" />
            <button type="submit">Submit</button>
          </form>
           <p>if you Already have an Acount ? <Link to={"/login"}>Login</Link></p>
        </div>
      </main>
    </div>
  );
};

export default Register;
