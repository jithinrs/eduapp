import React, { useState, useContext } from "react";
import AuthContext from "../context/authcontext";
import axios from "axios";
import { useNavigate } from "react-router-dom";

import registerImage from '../staticImages/signup.jpg'
import './style.css'

export function Registerpage() {

    const [firstName, setFirstName] = useState('');
    const [secondName, setSecondName] = useState('');
    const [mobile, setMobile] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [gender, setGender] = useState('');
    const [dob, setDob] = useState('');
    const [roles, setRoles] = useState('');

    const [submitted, setSubmitted] = useState(false);
    const [error, setError] = useState(false);
    const { BASE_URL } = useContext(AuthContext)


    const navigate = useNavigate()


    const handleFirstName = (e) => {
        setFirstName(e.target.value);
        setSubmitted(false);
    };

    const handleSecondName = (e) => {
        setSecondName(e.target.value);
        setSubmitted(false);
    };


    const handleMobile = (e) => {
        setMobile(e.target.value);
        setSubmitted(false);
    };

    const handleEmail = (e) => {
        setEmail(e.target.value);
        setSubmitted(false);
    };

    const handleGender = (e) => {
        setGender(e.target.value);
        setSubmitted(false);
    };

    const handleDob = (e) => {
        setDob(e.target.value);
        setSubmitted(false);
    };

    const handleRoles = (e) => {
        setRoles(e.target.value);
        setSubmitted(false);
    };

    // Handling the password change
    const handlePassword = (e) => {
        setPassword(e.target.value);
        setSubmitted(false);
    };

    // Handling the form submission
    const handleSubmit = (e) => {
        e.preventDefault();
        if (firstName === '' || email === '' || password === '') {
            setError(true);
        } else {
            axios.post(BASE_URL + '/account/register', {
                first_name: firstName,
                last_name: secondName,
                mobile: mobile,
                email: email,
                gender: gender,
                password: password,
                date_of_birth : dob,
                roles : roles
            }).then((res) => {
                navigate('/login')
            })

            setSubmitted(true);
            setError(false);
        }
    };
    const successMessage = () => {
        return (
            <div
                className="success"
                style={{
                    display: submitted ? '' : 'none',
                }}>
                <h1>User {firstName} successfully registered!!</h1>
            </div>
        );
    };

    // Showing error message if error is true
    const errorMessage = () => {
        return (
            <div
                className="error"
                style={{
                    display: error ? '' : 'none',
                }}>
                <h5>Please enter all the fields</h5>
            </div>
        );
    };

    return (
        <div>
            <div className="row register-maindiv">
                <div className="col">
                    <form>
                        <label className="">First Name</label>
                        <input onChange={handleFirstName} className="form-control"
                            value={firstName} type="text" />
                        <label className="label">Last Name</label>
                        <input onChange={handleSecondName} className="form-control"
                            value={secondName} type="text" />
                        <label className="label">Phone Number</label>
                        <input onChange={handleMobile} className="form-control"
                            value={mobile} type="number" />
                        <label className="label">Email</label>
                        <input onChange={handleEmail} className="form-control"
                            value={email} type="email" />
                        <label htmlFor="">Gender</label>
                        <select onChange={handleGender} className="form-control" name="gender" id="">
                            <option value="M">Male</option>
                            <option value="F">Female</option>
                            <option value="O">Other</option>
                        </select>
                        <label htmlFor="">Date of Birth</label>
                        <input onChange={handleDob} className="form-control" type="date" name="date_of_birth" />
                        <label htmlFor="">Roles</label>
                        <select onChange={handleRoles} className="form-control" name="roles" id="">
                            <option value="S">Student</option>
                            <option value="T">Teacher</option>
                        </select>
                        <label className="label">Password</label>
                        <input onChange={handlePassword} className="form-control"
                            value={password} type="password" />
                        <div className="messages">
                            {errorMessage()}
                            {successMessage()}
                        </div>
                        <button onClick={handleSubmit} className="btn btn-primary mt-3" type="submit">
                            Submit
                        </button>
                    </form>
                </div>
                <div className="col">
                    <img src={registerImage} alt="" />
                </div>
            </div>
        </div>
    )
}