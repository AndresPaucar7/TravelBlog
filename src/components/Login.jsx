import React, { useState } from 'react';

const SignIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await fetch('http://localhost:8000/api/v1/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password })
      });
      if (response.ok) {
        const data = await response.json();
        console.log('Signed in successfully', data);
      } else {
        console.log('Could not sign in');
      }
    } catch (error) {
      console.error('Error:', error);
    } 
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Sign In</h2>
      <div>
        <label>Email: </label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required 
        />
      </div>
      <div>
        <label>Password: </label>
        <input
          type="password" 
          value={password} 
          onChange={(e) => setPassword(e.target.value)}
          required
        />
      </div>
      <button  type="submit">Sign In</button>
    </form>
  );
};

export default SignIn;