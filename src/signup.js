import React, {useState} from "react";
import { Link, useNavigate } from "react-router-dom";
import singUpValidation from "./SignUpValidation";
import axios from "axios"

function Signup() {
    const [values, setValues] = useState({
        username: '',
        password: '',
        confirmPassword: ''
    })

    const navigate = useNavigate();
    const [errors, setErrors] = useState({})

    const handleInput = (event) =>{
        setValues((prev) => ({...prev, [event.target.name]: event.target.value}))
    }

    const handleSubmit =(event) => {
        event.preventDefault();
        setErrors(singUpValidation(values));
        if(errors.username === "" && errors.password === "") {
            axios.post('http://localhost:8081/signup', values)
            .then(res => {
                navigate('/');
            })
            .catch(err => console.log(err))
        }
    }

    return (
        <div className='container-fluid base bg-primary vh-100'>
            <div className="row justify-content-center align-items-center h-100">
                <div className="col-6">
                    <div className='base bg-white p-3 rounded'>
                        <form className='d-flex flex-column justify-content-between h-100' action='' onSubmit={handleSubmit}>
                            <div className='tittle d-flex gap-1'>
                                <svg className='coffe-svg' fill="#000000" width="800px" height="800px" viewBox="-5 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg">
                                <path d="M12.406 14.75c-0.094-2.094-0.219-3.219-1.469-4.594-1.594-1.781-2.188-3.5-0.875-6.156 0.344 1.781 0.469 3.375 1.719 4.344s2.281 3.594 0.625 6.406zM10.063 14.75c-0.063-1.125-0.125-1.688-0.813-2.469-0.844-0.938-1.188-1.844-0.469-3.281 0.188 0.969 0.219 1.813 0.906 2.313s1.281 1.938 0.375 3.438zM15.719 24.625h5.688c0.344 0 0.469 0.25 0.25 0.531 0 0-2.219 2.844-5.281 2.844h-10.969s-5.281-2.844-5.281-2.844c-0.219-0.281-0.125-0.531 0.219-0.531h5.625c-0.781-0.406-1.938-2.188-1.938-4.406v-4.688h13.688v0.375c0.438-0.375 0.969-0.563 1.531-0.563 0.781 0 2.25 0.813 2.25 2.219 0 2.031-1.344 2.781-2.125 3.313 0 0-1.469 1.156-2.5 2.5-0.344 0.594-0.75 1.063-1.156 1.25zM19.25 16.188c-0.5 0-1.125 0.219-1.531 1.219v2.594c0 0.344-0.031 0.75-0.094 1.094 0.688-0.688 1.5-1.156 1.5-1.156 0.5-0.344 1.5-1 1.5-2.281 0.031-0.906-0.813-1.469-1.375-1.469zM6.406 16.563h-0.875v1.281h0.875v-1.281zM6.406 18.594h-0.875v2.094s0.25 2.813 2.031 3.656c-1.094-1.281-1.156-2.75-1.156-3.656v-2.094z"></path>
                                </svg>
                                <h1 className='tittle-q'>Cafe Cafesosos</h1>
                            </div>
                            <div className=''>
                                <div className='c-t position-relative d-flex aling-items-center'>
                                <svg className='user-svg position-absolute' xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="M480-480q-66 0-113-47t-47-113q0-66 47-113t113-47q66 0 113 47t47 113q0 66-47 113t-113 47ZM160-160v-112q0-34 17.5-62.5T224-378q62-31 126-46.5T480-440q66 0 130 15.5T736-378q29 15 46.5 43.5T800-272v112H160Zm80-80h480v-32q0-11-5.5-20T700-306q-54-27-109-40.5T480-360q-56 0-111 13.5T260-306q-9 5-14.5 14t-5.5 20v32Zm240-320q33 0 56.5-23.5T560-640q0-33-23.5-56.5T480-720q-33 0-56.5 23.5T400-640q0 33 23.5 56.5T480-560Zm0-80Zm0 400Z"/></svg>
                                    <label htmlFor="username"></label>
                                    <input type='text' placeholder='Nuevo usuario' name="username" 
                                    onChange={handleInput} className='cuadro text form-control rounded'/>
                                    {errors.username && <span className='text-danger'> {errors.username}</span>}
                                </div>
                            </div>
                            <div className=''>
                                <div className='c-t position-relative d-flex aling-items-center'>
                                <svg className='lock-svg position-absolute' xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="M240-80q-33 0-56.5-23.5T160-160v-400q0-33 23.5-56.5T240-640h40v-80q0-83 58.5-141.5T480-920q83 0 141.5 58.5T680-720v80h40q33 0 56.5 23.5T800-560v400q0 33-23.5 56.5T720-80H240Zm0-80h480v-400H240v400Zm240-120q33 0 56.5-23.5T560-360q0-33-23.5-56.5T480-440q-33 0-56.5 23.5T400-360q0 33 23.5 56.5T480-280ZM360-640h240v-80q0-50-35-85t-85-35q-50 0-85 35t-35 85v80ZM240-160v-400 400Z"/></svg>
                                    <label htmlFor="password"></label>
                                    <input type='password' placeholder='Nueva contraseña' name="password"
                                    onChange={handleInput} className='cuadro text form-control rounded-0'/>
                                    {errors.password && <span className='text-danger'> {errors.password}</span>}
                                </div>
                            </div>
                            <div className=''>
                                <div className='c-t position-relative d-flex aling-items-center'>
                                <svg className='lock-svg position-absolute' xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="M240-80q-33 0-56.5-23.5T160-160v-400q0-33 23.5-56.5T240-640h40v-80q0-83 58.5-141.5T480-920q83 0 141.5 58.5T680-720v80h40q33 0 56.5 23.5T800-560v400q0 33-23.5 56.5T720-80H240Zm0-80h480v-400H240v400Zm240-120q33 0 56.5-23.5T560-360q0-33-23.5-56.5T480-440q-33 0-56.5 23.5T400-360q0 33 23.5 56.5T480-280ZM360-640h240v-80q0-50-35-85t-85-35q-50 0-85 35t-35 85v80ZM240-160v-400 400Z"/></svg>
                                    <label htmlFor="password"></label>
                                    <input type='password' placeholder='confirma contraseña' name="confirmPassword" 
                                    onChange={handleInput} className='cuadro text form-control rounded-0'/>
                                    {errors.confirmPassword && <span className='text-danger'> {errors.confirmPassword}</span>}
                                </div>
                            </div>
                            <button type="submit" className='btn btn-success w-30'>Crear Nuevo Usuario</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Signup;