import React,{useState} from "react";
import "./form.scss"
import { UseAuth } from "../hook/useAuth";
const Register = () => {
  const{loading,user,handleRegister} =UseAuth()
  const [email, setEmail] = useState("")
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")

  const handleSubmit=async(e)=>{
    e.preventDefault();
    await handleRegister(email,username,password)
    console.log("register sucessfully")
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
        </div>
      </main>
    </div>
  );
};

export default Register;
