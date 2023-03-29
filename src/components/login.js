import React, { useState } from "react"
import * as Components from "./Components"
import './css/login.css'
import { Redirect } from 'react-router-dom';

function Login() {

  const [loggedIn, setLoggedIn] = useState(false);
  const [signIn, toggle] = React.useState(true);
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");

  const handleRegister = (e) => {
    e.preventDefault();


    fetch("https://task-rails.onrender.com/users/register", {
      method: "POST",
      crossorigin: true,
      mode: "no-cors",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username,
        email,
        password,
      
      })
    }).then((response) => response.json())
    .then((data) => {
      // Handle successful login
      
      console.log(data);
    })
    .catch((error) => {
      // Handle login error
      console.error(error);
    });
   setRegistered(true)

};
const handleLogin = (event) => {
    event.preventDefault();

    fetch("https://task-rails.onrender.com/users/login", {
      method: "POST",
      crossorigin: true,
      mode: "no-cors",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
       email, password,
      })
    })
    .then((response) => response.json())
    .then((data) => {
      // Handle successful login
      
      console.log(data);
    })
    .catch((error) => {
      // Handle login error
      console.error(error);
    });
    setLoggedIn(true);
};

    return(
      <div className="login">
        <Components.Container>
                {loggedIn && <Redirect to="/todo" />}

            <Components.SignUpContainer signinIn={signIn}>
                <Components.Form>
                    <Components.Title>Register</Components.Title>
                    <Components.Input type='text' placeholder='Name' value={name} onChange={event => setName(event.target.value)}/>
                    <Components.Input type='email' placeholder='Email'value={email} onChange={event => setEmail(event.target.value)}/>
                    <Components.Input type='password' placeholder='Password' value={password} onChange={event => setPassword(event.target.value)}/>
                    <Components.Button onClick={handleRegister}>Register</Components.Button>
                </Components.Form>
            </Components.SignUpContainer>

            <Components.SignInContainer signinIn={signIn}>
                 <Components.Form>
                     <Components.Title>Log in</Components.Title>
                     <Components.Input type='email' placeholder='Email' value={email} onChange={(event) => setEmail(event.target.value)}/>
                     <Components.Input type='password' placeholder='Password' value={password} onChange={(event) => setPassword(event.target.value)}/>
                     <Components.Anchor href='#'>Forgot your password?</Components.Anchor>
                     <Components.Button onClick={handleLogin}>Log In</Components.Button>
                 </Components.Form>
            </Components.SignInContainer>

            <Components.OverlayContainer signinIn={signIn}>
                <Components.Overlay signinIn={signIn}>

                <Components.LeftOverlayPanel signinIn={signIn}>
                    <Components.Title>Good to see you again!</Components.Title>
                    <Components.Paragraph>
                    Let's pick up where we left off                    </Components.Paragraph>
                    <Components.GhostButton onClick={() => toggle(true)}>
                        log in
                    </Components.GhostButton>
                    </Components.LeftOverlayPanel>

                    <Components.RightOverlayPanel signinIn={signIn}>
                      <Components.Title>Experience the Difference</Components.Title>
                      <Components.Paragraph>
                      Sign Up and Discover the Benefits of Our Service.

                      </Components.Paragraph>
                          <Components.GhostButton onClick={() => toggle(false)}>
                              register
                          </Components.GhostButton> 
                    </Components.RightOverlayPanel>

                </Components.Overlay>
            </Components.OverlayContainer>

        </Components.Container>
      </div>
    )
}

export default Login;
