
import React, { FormEvent, useState } from 'react';
import { useDispatch, useTrackedState } from '../store/store';

import '../styles/LoginPage.sass'

type LoginProps = {};

const LoginPage: React.FC<LoginProps> = (props: LoginProps) => {
  const dispatch = useDispatch();
  const globalState = useTrackedState();
  // @ts-ignore
  const [loginAttempted, setLoginAttemptedValue] = useState(false);
  const [password, setPasswordValue] = useState('fred@theflintstones.com');
  const [username, setUsernameValue] = useState('wilma');

  console.log('LoginPage - Displaying Login page...');

  /* Our Methods */

  const login = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // TODO: validate entered username (as email address) and password
    setLoginAttemptedValue(true);
    if (!username) {
      const htmlElement: HTMLInputElement = document.getElementById("username") as HTMLInputElement;
      setUsernameValue(htmlElement ? htmlElement.value : '');
    }
    if (!password) {
      const htmlElement: HTMLInputElement = document.getElementById("password") as HTMLInputElement;
      setPasswordValue(htmlElement ? htmlElement.value : '');
    }
    dispatch({ type: 'SET_ERROR', error: undefined });
    dispatch({ type: 'LOGIN', username: username, password: password });
    console.log('login event - changing window location to /home');
    window.location.href = window.location.origin + '/home';
  };

  const handleUsernameChange: React.ChangeEventHandler<HTMLInputElement> = (event) => {
    setUsernameValue(event.currentTarget.value);
  };

  const handlePasswordChange: React.ChangeEventHandler<HTMLInputElement> = (event) => {
    setPasswordValue(event.currentTarget.value);
  };

  const renderError = (error: string) => {
    return (
      <p>{ 'An error occurred: ' + error}</p>
    );
  };

  return (
    <section className="login-view w-screen h-screen bg-cover bg-center bg-fixed bg-no-repeat">
      <div className="login-container relative h-screen">
        <div className="header">
          <div className="skf-logo"/>
          <div className="content">
            <h1>React-Tracked Tester</h1>
          </div>
        </div>
        { (globalState.error) ? renderError(globalState.error) : '' }
        <div className="content mx-auto h-screen" style={{ overflowY: "hidden" }}>
          <div className="modal mx-auto relative py-16 rounded shadow"
               style={{
                background: "rgba(255, 255, 255, 0.93)",
                maxWidth: "660px",
                top: "25%",
                transform: "translateY(-25%)",
                width: "660px"
                }}>
            <div className="name-and-login mx-auto" style={{ maxWidth: "420px" }}>
              <section className="info text-center">
                <h1 className="text-4xl text-primary-600">Login</h1>
              </section>
              <form className="cognito-signin-form"
                onSubmit={(event: FormEvent<HTMLFormElement>) => login(event)}>
                <div className="login-window">
                  <div className="cognito-container">
                    <div className="username" style={{ margin: '-10px' }}>
                      <div id="id-text-input" className="text-input-wrapper">
                        <div className="text-input-label -large">
                          <div className="the-label">Username</div>
                          <div className="mandatory-star">*</div>
                        </div>
                        <div className="input-row -labeled">
                          <input autoComplete="username"
                                 className=""
                                 id="username"
                                 maxLength={ 256 }
                                 name="username"
                                 onChange={ (event: any) => handleUsernameChange(event) }
                                 required={ true }
                                 size={ 50 }
                                 type="text"
                           />
                        </div>
                      </div>
                    </div>
                    <div className="password" style={{ margin: '-10px' }}>
                      <div id="id-text-input" className="text-input-wrapper">
                        <div className="text-input-label -large">
                          <div className="the-label">Password</div>
                          <div className="mandatory-star">*</div>
                        </div>
                        <div className="input-row -labeled">
                          <input autoComplete="password"
                                 className=""
                                 id="password"
                                 maxLength={ 256 }
                                 name="password"
                                 onChange={ (event: any) => handlePasswordChange(event) }
                                 required={ true }
                                 size={ 50 }
                                 type="password"
                          />
                        </div>
                      </div>
                      { globalState.error && loginAttempted && (
                        <div style={ { color: 'red' } }>
                          <span id="login-message">
                            Your username or password was incorrect.
                          </span>
                        </div>
                      )}
                    </div>
                    <div className="actions">
                      <button className="ui-components sign-in-button"
                              disabled={ false }
                              id="sign-in-button"
                              name="sign-in-button"
                              title="Login"
                              type="submit"
                      >
                        Login
                      </button>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LoginPage;
