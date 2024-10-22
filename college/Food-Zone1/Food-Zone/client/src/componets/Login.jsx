import React, { useState } from 'react';
import { NavLink } from 'react-router-dom'
import { useAuth } from "./store/auth";
import { useNavigate } from 'react-router-dom';



const Login = () => {
    const [user, setUser] = useState({
        email: "",
        password: "",
      });

    const navigate = useNavigate();
    const { storeTokenInLS } = useAuth();



    const handleInput = (e) => {
        let name = e.target.name;
        let value = e.target.value;
    
        setUser({
          ...user,
          [name]: value,
        });
      };


    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
      const response = await fetch("http://localhost:3001/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(user),
      });

      const resData = await response.json();

      if (response.ok) {
        setUser({ email: "", password: "" });
        navigate("/");
        alert("login successful");
        storeTokenInLS(resData.token);
      } else {
        alert(resData.extraDetails ? resData.extraDetails : resData.message);
      }
    } catch (error) {
      console.log(error);
    }
    };

    return (
        <div className='flex justify-center items-center h-screen'>
            <form className="form">
                <p id="heading">Login</p>
                <div className="field">
                    <input
                        autoComplete="off"
                        placeholder="E-mail"
                        className="input-field"
                        name="email"
                        type="email"
                        value={user.email}
                        onChange={handleInput}
                        maxLength={50}
                    />
                </div>
                <div className="field">
                    <input
                        placeholder="Password"
                        className="input-field"
                        type="password"
                        name="password" 
                        value={user.password}
                        onChange={handleInput}
                    />
                </div>
                <div className="btn   ">
                    <button className="button1" onClick={handleSubmit}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Login&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</button>
                    <NavLink to={'/SignUp'}>

                        <button className="button2">Sign Up</button>
                    </NavLink>
                </div>
                <button className="button3">Forgot Password</button>
            </form>

        </div >
    );
};

export default Login;

