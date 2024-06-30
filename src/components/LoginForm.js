import React,{ useState } from "react";

const LoginForm = ({onsubmit}) =>{

    const[username, setusername] = useState('');

    const handleSubmit = (e)=>{
        e.preventDefault();
        onsubmit(username);

    };

    return (

        <form onsubmit={handleSubmit}>
            <body bgcolor='red' >
            <label>username     </label>
            <input type="text" placeholder="Enter NAme" value={username}
            onChange ={(e)=> setusername(e.target.value)}/>
            <br></br>
            <button type="submit">Login</button>
            </body>

        </form>

    );
};
export default LoginForm;