import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useDispatch } from 'react-redux';

const Register = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const dispatch=useDispatch()

  const handleRegister = async (e) => {
    e.preventDefault();
    if (name === '' || email === '' || password === '') return;

    try {
      const data = await axios.post('http://localhost:8000/api/user/signup', {
        name,
        email,
        password: password // Ensure this matches the backend field name
      });
    dispatch(Register(data))
    navigate('/')
    } catch (error) {
      console.error('Error during registration:', error.response.data.message);
    }
  };

  return (
    <form onSubmit={handleRegister}>
      <label>
        Username:
        <input
          type="text"
          name="username"
          onChange={(e) => setName(e.target.value)}
        />
      </label>
      <br />
      <label>
        Email:
        <input
          type="email"
          name="email"
          onChange={(e) => setEmail(e.target.value)}
        />
      </label>
      <br />
      <label>
        Password:
        <input
          type="password"
          name="password"
          onChange={(e) => setPassword(e.target.value)}
        />
      </label>
      <br />
      <button type="submit">Register</button>
    </form>
  );
};

export default Register;

