import owl from "../../images/Owl_Logo.png";
import googleIcon from '../../images/google_icon.png';
import linkedinIcon from '../../images/linkedin_icon.png';
import { useState } from "react";

export default function LoginContent(props) {
    
    const { email, setEmail } = useState('');
    const { password, setPassword } = useState('');
    
    const changeEmail = (e) => {
        setEmail(e.target.value);
    };

    const changePassword = (e) => {
        setPassword(e.target.value);
    };

    const submitForm = (e) => {
        e.preventDefault();
        //Do something 
    }

    return (
        <div className="login">
            <div className="login-heading">
                <h1 className="bussiness-heading">
                    Corpworx-connect
            </h1>
            <img src={owl} alt="owl logo"/>
            </div>
            <p className="sub-heading"> Welcome please log in</p>
            <form >
                <input className="maininput " type='email' required value={ email } placeholder="Email" onChange={ changeEmail } />
                <input className="maininput" type='password' required value={ password } placeholder="Password" onChange={ changeEmail } />
                <div className="options">
                    <div className="check-button">
                        <input type="checkbox"  id="remember" name="remember" value="true"/>
                        <label htmlFor="remember">Remember me</label>
                    </div>
                    <a href="#"> Forgot password?</a>
                </div>

                <button type='submit' onClick={ submitForm }> Log In</button>
            </form>

            <div className="loginwith google">
                <div className='icon' >
                    <img src={ googleIcon } alt='google' />
                </div>
                <a>Log in with Google</a>
            </div>
            <div className="loginwith linkedin">
                <div className='icon'>
                    <img src={ linkedinIcon } alt='linkedin' />
                </div>
                <a>Log in with LinkedIn</a>
            </div>

            <div>
                Don't have an account? <a href="#" class="signup">Sign-up</a> today
            </div>
        </div>
    );
}