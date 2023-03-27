import React, {useState} from 'react'
import { useHistory } from "react-router-dom";


function Signup() {
    const history = useHistory();
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");
    const [isSignUp, setIsSignUp] = useState(false);

    function handleSignUpClick(){
      history.push("/signup");
    };
  

    function handleSubmit(e) {
        e.preventDefault();
        if (isSignUp) {
          // Call an API or service to handle user registration
          fetch('/api/signup', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ username, email, password })
          })
            .then(response => {
              if (response.ok) {
                // Redirect the user to the login page after successful registration
                history.push('/login');
              } else {
                throw new Error('Failed to sign up');
              }
            })
            .catch(error => {
              console.log(error);
            });
        } else {
          // Handle login
          fetch('/api/login', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ username, password })
          })
          .then(response => {
            if (response.ok) {
              // Authentication successful
              return response.json();
            } else {
              throw new Error('Authentication failed');
            }
          })
          .then(data => {
            // Store the user's session token in the browser's local storage
            localStorage.setItem('sessionToken', data.sessionToken);
            // Redirect the user to the home page
            history.push('/');
          })
          .catch(error => {
            console.error(error);
            // Display an error message to the user
            alert('Authentication failed');
          });
        }
      }
    
        
      
      
    return (

        <form className="form" onSubmit={handleSubmit}>
        <p id="heading">SignUp</p>
        <div className="field">
          <input autoComplete="off" placeholder="Username" className="input-field" type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
        </div>
        <div className="field">
          <input autoComplete="off" placeholder="name@mail.com" className="input-field" type="text" value={email} onChange={(e) => setEmail(e.target.value)} />
        </div>

        <div className="field">
          <input placeholder="Password" className="input-field" type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </div>
    <div className="btn">
    <button className="button1">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{isSignUp ? "Sign Up" : "Login"}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    </button>
    <button className="button2" onClick={() => setIsSignUp(!isSignUp)}>{isSignUp ? "Back to Login" : "Sign Up"}</button>
    </div>
    <button className="button3">Forgot Password ?</button>
    </form>

    )
}

export default Signup
