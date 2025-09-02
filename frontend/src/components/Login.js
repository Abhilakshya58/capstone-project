import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import EmployeeService from '../service/EmployeeService';

function Login() {
    const [login, setLogin] = useState({
        empid: '',
        password: '',
        job: ''
    });
    const service = EmployeeService();
    const navigate = useNavigate();

    const onInputChange = (obj) => {
        setLogin({ ...login, [obj.target.name]: obj.target.value });
    }

    const onSubmit = (event) => {
        event.preventDefault();
        if (login.empid.length === 0 || login.password.length === 0)
            alert("Username/password fields must not be empty");
        else {
            service.loginValidate(login).then((response) => {
                sessionStorage.setItem("job", response.data.job);
                sessionStorage.setItem("managerid", response.data.managerid);
                sessionStorage.setItem("empid", response.data.empid);
                sessionStorage.setItem("loginstatus", true);
                navigate("/dashboard");
            });
        }
    }

    return (
        <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100vh" }}>
            <form onSubmit={onSubmit} style={{ width: "300px", textAlign: "center" }}>
                <h3>Login</h3>
                <div style={{ marginBottom: "15px", textAlign: "left" }}>
                    <label>Enter Username</label>
                    <input
                        type="text"
                        name="empid"
                        value={login.empid}
                        onChange={onInputChange}
                        placeholder="Employee ID"
                        style={{ width: "100%", padding: "8px", marginTop: "5px" }}
                    />
                </div>
                <div style={{ marginBottom: "15px", textAlign: "left" }}>
                    <label>Enter Password</label>
                    <input
                        type="password"
                        name="password"
                        value={login.password}
                        onChange={onInputChange}
                        placeholder="Password"
                        style={{ width: "100%", padding: "8px", marginTop: "5px" }}
                    />
                </div>
                <button type="submit" style={{ padding: "8px 20px" }}>Login</button>
            </form>
        </div>
    )
};

export default Login;
