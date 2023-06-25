import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const history = useHistory();
  

  const handleLogin = (e) => {
    e.preventDefault();

    // Check if username and password match
    if (username === 'admin' && password === 'password') {
      history.push('/dashboard');
    } else {
      alert('Invalid username or password');
    }
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <form onSubmit={handleLogin} className="p-6 bg-white rounded shadow-md">
        <h2 className="text-2xl font-bold mb-6">Login</h2>
        <div className="mb-4">
          <label htmlFor="username" className="block mb-2 font-medium">Username:</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="w-full border border-gray-300 rounded py-2 px-3"
          />
        </div>
        <div className="mb-6">
          <label htmlFor="password" className="block mb-2 font-medium">Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full border border-gray-300 rounded py-2 px-3"
          />
        </div>
        <button type="submit" className="bg-blue-500 text-white rounded py-2 px-4 hover:bg-blue-600">
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
