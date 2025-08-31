import React, { useState } from 'react';
import axios from 'axios';

function App() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [msg, setMsg] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault(); // form submit roko

    try {
      const res = await axios.post('https://reqres.in/api/login', {
        email,
        password
      });

      // Response aayega success ka
      setMsg('Login Successful! Token: ' + res.data.token);

      // 👇 Token ko localStorage mein bhi rakh saktay hain
      localStorage.setItem('token', res.data.token);
    } catch (err) {
      setMsg('Login Failed: ' + err.response.data.error);
    }
  };

  return (
    <div style={{ maxWidth: '400px', margin: 'auto', padding: '20px' }}>
      <h2>Login Form</h2>
      <form onSubmit={handleLogin}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={e => setEmail(e.target.value)}
          required
          style={{ display: 'block', marginBottom: '10px', width: '100%' }}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={e => setPassword(e.target.value)}
          required
          style={{ display: 'block', marginBottom: '10px', width: '100%' }}
        />
        <button type="submit">Login</button>
      </form>
      <p>{msg}</p>
    </div>
  );
}

export default App;
