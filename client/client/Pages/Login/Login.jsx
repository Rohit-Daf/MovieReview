import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import './Login.css'
import { toast } from 'react-toastify'
import { login } from '../../Services/Users'


function Login() {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const navigate = useNavigate()

    const onLogin = async () => {
        if (email.length == 0) {
            toast.warning('please enter email')
        } else if (password.length == 0) {
            toast.warning('please enter password')
        } else {
            const response = await login(email, password)
            if (response['status'] == 'success') {
                toast.success('login successful')
                localStorage.setItem('email', response['data']['email'])
                navigate('/home/allMovies')
            } else {
                toast.error(response['error'])
            }
        }
    }
    return (
        <div>
            <div className='container'>
                <h2 className='page-header'>Login</h2>

                <div className='login-container'>
                    <div className='mb-3'>
                        <label htmlFor=''>Email</label>
                        <input
                            onChange={(e) => {
                                setEmail(e.target.value)
                            }}
                            type='email'
                            className='form-control'
                        />
                    </div>
                    <div className='mb-3'>
                        <label htmlFor=''>Password</label>
                        <input
                            onChange={(e) => {
                                setPassword(e.target.value)
                            }}
                            type='password'
                            className='form-control'
                        />
                    </div>
                    <div className='mb-3'>
                        <input
                            type='checkbox'
                            className='me-2'
                        />
                        <label htmlFor=''>Remember me</label>
                    </div>
                    <div className='mb-3'>
                        {/* <button className='btn btn-link'>Forgot password?</button> */}
                        Don't have an account yet? <Link to='/register'>Register here</Link>
                    </div>
                    <div className='mb-3'>
                        <button
                            onClick={onLogin}
                            className='btn btn-success'
                        >
                            Login
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login