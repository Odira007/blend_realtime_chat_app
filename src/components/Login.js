import React, { useRef } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";


const Login = () => {
    const { register, handleSubmit, formState: { errors }} = useForm();
    const onSubmit = data => console.log(data);

    return (
        <div className="container">
            
            <div className="form-container">
                <h2>Login to your account</h2>
                <form className = "reg-form" onSubmit={handleSubmit(onSubmit)} action="https://google.com/maps">
                <div className="form-control">
                    <label htmlFor="email">Email address</label>
                        <input 
                            className="reg-input-btn email"
                            type="text"
                            placeholder="johndoe@gmail.com"
                            id="email" 
                            { ...register("email", {
                             required: {
                                value: true,
                                message: "This field is required"
                             },
                             pattern: {
                                value: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g,
                                message: "Invalid email address"
                             }
                            }) }           
                        />
                        <small>
                            {errors.email?.message}
                        </small>
                    </div>
                    <div className="form-control">
                        <label htmlFor="pass">Password</label>
                        <input 
                            className="reg-input-btn password"
                            type="password"
                            id="pass"
                            { ...register("password", {
                                required: {
                                   value: true,
                                   message: "This field is required"
                                },
                                pattern: {
                                    value: /^(?=.*[\d])(?=.*[!@#$%^&*])[\w!@#$%^&*]{6,16}$/,
                                    message: "Your password must be at least 6 characters long and should contain a letter, number and a special character"
                                }
                            }) }
                        />
                        <small>
                            { errors.password?.message}
                        </small>
                    </div>
                    <button className="reg-btn">Sign in</button>
                    <p className="hvAcc">Don't have an account? <Link to="/Register">Sign up</Link></p>
                </form>
            </div>
            <div className="side-image">
                <img src="https://images.pexels.com/photos/1486861/pexels-photo-1486861.jpeg?cs=srgb&dl=pexels-engin-akyurt-1486861.jpg&fm=jpg" alt="side pic"/>
                {/* https://source.unsplash.com/random */}
            </div>
        </div>
    )
}

export default Login;