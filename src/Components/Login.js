import React from 'react'
import "./Login.css"
import { NavLink } from 'react-router-dom'
function Login() {
  return (
    <div>
        <div className='main-container'>
      <div className="login-container">
  <h2>Login</h2>
  <form>
    <label htmlFor="role">Select Role</label>
    <select id="role" name="role" required="">
      <option value="">-- Choose Role --</option>
      <option value="admin">Admin</option>
      <option value="user">User</option>
    </select>
    <label htmlFor="email">Email</label>
    <input type="email" id="email" name="email" required="" />
    <label htmlFor="password">Password</label>
    <input type="password" id="password" name="password" required="" />
    <button type="submit">Login</button>
  </form>
  <p className="register-text">
    Don't have an account? <NavLink to ="/register">Register here</NavLink>
  </p>
</div>
</div>
    </div>
  )
}

export default Login
