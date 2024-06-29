import React,{ useState } from "react";

const LoginForm = ({onsubmit}) =>{

    const[username, setusername] = useState('');

    const handleSubmit = (e)=>{
        e.preventDefault();
        onsubmit(username);

    };

    return (

        <form onsubmit={handleSubmit}>

            <input type="text" placeholder="Enter NAme" value={username}
            onChange ={(e)=> setusername(e.target.value)}/>
            <button type="submit">Login</button>


        </form>

    );
};
export default LoginForm;