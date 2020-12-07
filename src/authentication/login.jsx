import React from 'react'

const Login = (props) => {
    let [name, setName] = React.useState("");
    let [password, setPassword] = React.useState("");
    console.log(props.history);

    return ( 
    <div>
        <h2>Login Page</h2>
        <form >
        Name: <input type='text' id ='name1' onChange = {(event) => setName(event.target.value)} />
        Name: <input type='password' id ='pass' onChange = {(event) => setPassword(event.target.value)} />
       <input type = 'submit' onClick = {() => props.history.push('/')} />
        </form>
    </div>
     );
}
 
export default Login;