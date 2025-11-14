import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import { register } from '../../Services/Users'

function Register() {
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [DateOfBirth, setDateOfBirth] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')


  const navigate = useNavigate()

  const onRegister = async () => {
    if (firstName.length === 0) {
      toast.warning('Please enter first name')
    } else if (lastName.length === 0) {
      toast.warning('Please enter last name')
    } else if (email.length === 0) {
      toast.warning('Please enter email')
    } else if (phone.length === 0) {
      toast.warning('Please enter phone number')
    } else if (DateOfBirth.length === 0) {
      toast.warning('Please enter date of birth')
    } else if (password.length === 0) {
      toast.warning('Please enter password')
    } else if (confirmPassword.length === 0) {
      toast.warning('Please confirm password')
    } else if (password !== confirmPassword) {
      toast.warning('Passwords do not match')
    } else {
      const response = await register(firstName, lastName, email, phone, DateOfBirth, password)
      if (response['status'] === 'success') {
        toast.success('Registration successful')
        navigate('/login')
      } else {
        toast.error(response['error'])
      }
    }
  }
  return (
    <div className='container'>
      <h2 className='page-header'>Register</h2>
      <div className='register-container'>
        <div className='mb-3'>
          <label htmlFor=''>First Name</label>
          <input
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            type='text'
            className='form-control'
          />
        </div>

        <div className='mb-3'>
          <label htmlFor=''>Last Name</label>
          <input
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            type='text'
            className='form-control'
          />
        </div>

        <div className='mb-3'>
          <label htmlFor=''>Email</label>
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type='email'
            className='form-control'
          />
        </div>

        <div className='mb-3'>
          <label htmlFor=''>Phone Number</label>
          <input
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            type='tel'
            className='form-control'
          />
        </div>
        <div className='mb-3'>
          <label htmlFor=''>Date </label>
          <input
            value={DateOfBirth}
            onChange={(e) => setDateOfBirth(e.target.value)}
            type='date'
            className='form-control'
          />
        </div>
        <div className='mb-3'>
          <label htmlFor=''>Password</label>
          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type='password'
            className='form-control'
          />
        </div>
        <div className='mb-3'>
          <label htmlFor=''>Confirm Password</label>
          <input
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            type='password'
            className='form-control'
          />
        </div>

        <div>
          Already have an account? <Link to='/'>Login here</Link>
        </div>
        <div>
          <button
            onClick={onRegister}
            className='btn btn-success'
          >
            Register
          </button>
        </div>
      </div>
    </div>
  )
}

export default Register