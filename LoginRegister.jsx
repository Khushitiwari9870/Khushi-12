// import React from 'react'
// import img from "../assets/react.svg";
// export default function Navbar() {
//   return (
//     <div>
//         <header className="flex items-center justify-between bg-red-300 py-5 px-4 shadow-lg">
//             <div>
//         <img src={img} alt="website logo" className="cursor-pointer"/>
//             </div>
//         <span className="text-pink-400 flex items-center">khushi</span>
//         <button className="bg-white py-2 px-5 rounded-md cursor-pointer hover:bg-red-500"
//         // style={{
//         //     display:"flex",
//         //     color:"black",
//         //     flexDirection:"right",
//         //     justifyContent:"center",
//         // }}
//         >submit</button>
//         </header>
//     </div>
//   )
// }
// import React, { useState } from 'react';

// function MyForm() {
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//   });

//   const handleChange = (e) => {
//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.value
//     });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     alert('Name: ${formData.name}\nEmail: ${formData.email}');
//   };

//   return (
//     <div>
//       <h2>React Form</h2>
//       <form onSubmit={handleSubmit}>
//         <div>
//           <label>Name:</label>
//           <input
//             type="text"
//             name="name"
//             value={formData.name}
//             onChange={handleChange}
//             required
//           />
//         </div>

//         <div>
//           <label>Email:</label>
//           <input
//             type="email"
//             name="email"
//             value={formData.email}
//             onChange={handleChange}
//             required
//           />
//         </div>

//         <button type="submit">Submit</button>
//       </form>
//     </div>
//   );
// }

// export default MyForm;
 import React, { useState } from 'react';
 import "./LoginRegister.css";
 import { FaUser,FaLock,FaEnvelope } from "react-icons/fa";

 const LoginRegister=() => {
  const [action,setAction] = useState("");

  const registerLink = () => {
    setAction("active");
  };
   const loginLink = () => {
    setAction("");
  };

   return (
     <div className={`wrapper${action}`}>
     <div className="form-box Login">
     <form action="">
     <h1>Login</h1>
     <div className="input-box">
     <input type="text" placeholder="Username" required/>
     <FaUser className="icon" />
     </div>
     <div className="input-box">
     <input type="password" placeholder="password" required/>
     <FaLock  className="icon"/>
     </div>
     <div className="remember-forget">
     <label><input type="checkbox" />Remember me</label>
     <a href="#">Forget password?</a>
     </div>
     <button type="submit">login</button>
     <div className="register-link">
      <p>Don't have an account?<a href="#" onClick={registerLink}>Register</a></p>
     </div>
     </form>
     </div>
<div className="form-box register">
     <form action="">
     <h1>Registration</h1>
     <div className="input-box">
     <input type="text" placeholder="Username" required/>
     <FaUser className="icon" />
     </div>
     <div className="input-box">
     <input type="Email" placeholder="Email" required/>
     <FaEnvelope className="icon" />
     </div>
     <div className="input-box">
     <input type="password" placeholder="password" required/>
     <FaLock  className="icon"/>
     </div>
     <div className="remember-forget">
     <label><input type="checkbox" />I agree to the terms & conditons</label>
     </div>
     <button type="submit">Register</button>
     <div className="register-link">
      <p>Already have an account?<a href="#"onClick={loginLink} >Login</a></p>
     </div>
     </form>
     </div>

     </div>
   );
 };
 export default LoginRegister;

 