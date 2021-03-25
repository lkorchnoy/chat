import { useState } from 'react';
import axios from 'axios';

const LoginForm = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        const authObject = { 'Project-ID': "a21489bf-cff6-441d-8ac6-f98e1f817552", 'User-Name': username, 'User-Secret': password }

        try {
            
        } catch (error) {

        }

    }

    return (
        <div className="wrapper">
            <div className="form">
               <h1 className="title">Login To Chat</h1>
               <form onSubmit={handleSubmit}>
                   <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} className="input" placeholder="Username" required />
                   <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} className="input" placeholder="Password" required />
                   <div align="center">
                       <button type="submit" className="button">
                           <span>Welcome to Unpakt Chat</span>
                       </button>

                   </div>


               </form>
            </div>
        </div>
    );

}