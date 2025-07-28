import React from 'react'
import { NavLink } from 'react-router-dom'
import "./Login.css"
function Register() {
  return (
    <div>
        <div className='main-container'>
      <div className="login-container">
  <h2>Create an Account</h2>
  <form>
    <label htmlFor="fullname">Full Name</label>
    <input type="text" id="fullname" name="fullname" required="" />
    <label htmlFor="email">Email</label>
    <input type="email" id="email" name="email" required="" />
    <label htmlFor="password">Password</label>
    <input type="password" id="password" name="password" required="" />
    <label htmlFor="confirm-password">Confirm Password</label>
    <input
      type="password"
      id="confirm-password"
      name="confirm-password"
      required=""
    />
    <label htmlFor="role">Select Role</label>
    <select id="role" name="role" required="">
      <option value="">-- Choose Role --</option>
      <option value="admin">Admin</option>
      <option value="user">User</option>
    </select>
    <button type="submit">Register</button>
  </form>
  <p className="register-text">
    Already have an account? <NavLink to="/login">Login here</NavLink>
  </p>
</div>
</div>
    </div>
  )
}

export default Register
