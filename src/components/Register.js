import React, { useRef } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";

const Register = () => {
    
    const { register, handleSubmit, watch, formState: { errors }} = useForm();
    const onSubmit = data => console.log(data);

    const password = useRef({});
    password.current = watch('password', '');
    
    return (
        <div className="container">
            
            <div className="form-container">
                <h2>Are you new here? Sign up</h2>
                <form className = "reg-form" onSubmit={handleSubmit(onSubmit)}>
                    <div className="form-control">
                        <label htmlFor="firstname">First name</label>
                        <input 
                            className="reg-input-btn"
                            type="text"
                            placeholder="John"
                            id="firstname"
                            { ...register("firstName", {
                                required: {
                                   value: true,
                                   message: "Name cannot be empty"
                                },
                                minLength: {
                                   value: 3,
                                   message: "Must be at least 3 characters long"
                            } }) }
                        />
                        <small>
                            {errors.firstName?.message}
                        </small>
                    </div>
                    <div className="form-control">
                        <label htmlFor="lastname">Last name</label>
                        <input 
                            className="reg-input-btn"
                            type="text"
                            placeholder="Doe"
                            id="lastname"
                            { ...register("lastName", {
                                required: {
                                    value: true,
                                    message: "Name cannot be empty"
                                },
                                minLength: {
                                    value: 3,
                                    message: "Must be at least 3 characters long"
                             } }) }
                        />
                        <small>
                            {errors.lastName?.message}
                        </small>
                    </div>
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
                                message: "Name cannot be empty"
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
                        <label htmlFor="user">Username</label>
                        <input 
                            className="reg-input-btn"
                            type="text"
                            placeholder="johndoe6758"
                            id="user"
                            { ...register("username", {
                                required: {
                                   value: true,
                                   message: "This field is required"
                                },
                                minLength: {
                                    value: 5,
                                    message: 'Must be at least 5 characters long'
                                }
                            }) }
                        />
                        <small>
                            { errors.username?.message}
                        </small>
                    </div>
                    <div className="form-control">
                        <label htmlFor="phone">Phone</label>
                        <input 
                            className="reg-input-btn"
                            type="text"
                            placeholder="Phone"
                            id="phone"
                            { ...register("phone", {
                                required: {
                                   value: true,
                                   message: "This field is required"
                                },
                                pattern: {
                                    value: /\d+$/g,
                                    message: "Invalid phone number"
                                }
                            }) }
                        />
                        <small>
                            { errors.phone?.message}
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
                    <div className="form-control">
                        <label htmlFor="confirm-pass">Confirm password</label>
                        <input 
                            className="reg-input-btn password"
                            type="password"
                            id="confirm-pass"
                            { ...register("confirmPassword", {
                                required: {
                                   value: true,
                                   message: "This field is required"
                                },
                                validate: (value) => {
                                    return value === password.current || "Passwords do not match"
                                }
                            }) }
                        />
                        {errors.confirmPassword && <small>{errors.confirmPassword.message}</small>}
                    </div>
                    <button className="reg-btn">Register</button>
                    <p className="hvAcc">Already have an account? <Link to="/">Sign in</Link></p>
                </form>

            </div>
            <div className="side-image">
                <img src="https://images.pexels.com/photos/1486861/pexels-photo-1486861.jpeg?cs=srgb&dl=pexels-engin-akyurt-1486861.jpg&fm=jpg" alt="side pic"/>
                {/* https://source.unsplash.com/random */}
            </div>
        </div>
    )
}
export default Register;