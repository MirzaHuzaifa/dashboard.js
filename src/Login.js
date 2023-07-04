

import { useState } from "react";
import { useHistory } from 'react-router-dom';
// import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import DivisionComponent from "./DivisionComponent";



const Login = () => {

  
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const history = useHistory();
  console.log(username,'username')

  const handleLogin = (e) => {
    // e.preventDefault();

    
    if (username === 'admin' && password === 'password') {
      history.push('/dashboard');
    } else {
      alert('Invalid username or password');
    }
  };
  
  return (
    <div style={{display:'flex'}}>
    <DivisionComponent/>
    <div className="flex w-[50%] flex-col items-center justify-center min-h-screen ">
      <div className="w-full max-w-md px-12 py-12 bg-white ">
        <h2 className="text-2xl font-bold ">Sign in</h2>
        <p className='mb-5 text-[10px]'>Please fill in your contact information</p>
        <form onSubmit={handleLogin}>
          <div className="mb-4">
            <label className="block mb-2 text-sm font-bold text-gray-700" htmlFor="email">
              Email
            </label>
            <TextField
            className="w-full px-3 py-1 leading-tight text-gray-700 border rounded appearance-none focus:outline-none focus:shadow-outline"
            id="email"
           
            placeholder="Enter your email"
            label="username" 
            variant="outlined" 
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        
         
          </div>
          <div className="mb-6">
            <label className="block mb-2 text-sm font-bold text-gray-700" htmlFor="password">
              Password
            </label>
            <TextField
            className="w-full px-3 py-1 leading-tight text-gray-700 border rounded appearance-none focus:outline-none focus:shadow-outline"
            id="password"
            type="password"
            label="Password" 
            variant="outlined"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
       
          </div>
          <div className="flex items-center justify-between">
          
         <div class="flex items-center space-x-4">
          <label class="inline-flex items-center cursor-pointer">
          <input type="checkbox" class="form-checkbox mr-3 h-5 w-5 text-blue-500"/>
          <span>Remember me</span>
          </label>
        </div>
        
            
            <a
              className="inline-block text-sm font-bold text-blue-600 align-baseline hover:text-blue-800"
              href="/"
            >
              Forgot Password ?
            </a>
          </div>

          <button
              className="px-4 py-2 w-[100%] mt-5 font-bold text-white bg-blue-800 rounded-full
               hover:bg-blue-600 focus:outline-none focus:shadow-outline"
              type="submit"
            >
              Sign In
            </button>
            
            <div className="relative">
            <div className="w-[100%] border-t-2 mt-5 absolute "></div>
            <div className="w-[40px] h-[40px] bg-white relative ml-40 mt-3  flex justify-center
             rounded-full items-center">or</div>
            </div>

            <div className="w-[100%] text-center text-[12px]">Don't have An account? 
            <span className="text-blue-700">Signup</span></div>
        </form>
      </div>
    </div>
    </div>
  );
};

export default Login;
