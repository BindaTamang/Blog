import React, {useState} from 'react'
import './login.css'

const Login = () => {
const [name, setName] = useState("")
const [email, setEmail] = useState("")
const [password, setPassword] = useState("")

const handleSubmit = async (e) => {
  e.preventDefault()
  console.log(email)
}
  return (
    <div className="form">
     <form>
       <div className="input-container">
         <label>Username </label>
         <input type="text" name="uname" required />
       </div>
       <div className="input-container">
         <label>Password </label>
         <input type="password" name="pass" required />
       </div>
       <div className="input-container">
        <label>Email</label>
        <input type="text" placeholder="Enter email" name="email" required value={email} onChange={(e) => {
      setEmail(e.target.value)
    }} />
       </div>
       <div className="button-container">
         <button>Login</button>
       </div>
     </form>
   </div>
  
    
  )
}

export default Login;
    