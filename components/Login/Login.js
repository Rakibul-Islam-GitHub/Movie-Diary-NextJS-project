import  { useContext,  useState } from "react";
import { userContext } from "../../pages/_app";
import Link from 'next/link';


const Login = () => {
    
  const [loggedInUser, setloggedInUser] = useContext(userContext);

  const [isNewUser, setUser] = useState(false);
  const [isError, setIsError] = useState({
    emailError: false,
    password: false,
  });
  

  

  function handleNewUser() {
    setUser(!isNewUser);
  }
  function validateEmail(email) {
    const re =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  }
  function handleSignup(e) {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    const displayName = e.target.name.value;

    if (isNewUser) {
      if (validateEmail(email)) {
        setIsError({ emailError: false, password: true });
        document.getElementById("loginForm").reset();
        console.log(displayName, email, password);


        // send user details to db for sign up

        
      } else {
        setIsError({ emailError: true, password: true });
      }
    } else {
     

      // sign in here
    }
  }
  

  return (
    <div className=" login-page">
      <div className="container main-container">
        <div className="main-container__content">
          <div className="content__inputs">
            <form
              onSubmit={handleSignup}
              id="loginForm"
              className="content__input--form"
            >
              {isNewUser && (
                <label htmlFor="name">
                  <input
                    type="text"
                    name="name"
                    required
                    placeholder="Your Name"
                  />
                </label>
              )}
              <label htmlFor="email">
                <input type="email" name="email" required placeholder="Email" />
                {isError.emailError === false ? (
                  <span></span>
                ) : (
                  <span className="error-msg" style={{ color: "red" }}>
                    Please enter valid email address
                  </span>
                )}
              </label>
              <label htmlFor="password">
                <input
                  type="password"
                  name="password"
                  required
                  placeholder="Password"
                />
              </label>
              <button type="submit" className="formbutton">
                {isNewUser ? `Sign Up` : `Sign In`}
              </button>
            </form>

            <div>
              <p>
              Or You Can...
                <button className="btn-login btn"onClick={handleNewUser} type="button" >
              {isNewUser ? ` Sign In` : ` Sign Up`}
            </button>
              </p>
            </div>

        </div>
        

          </div>

            
      </div>
           
    </div>
  );
};

export default Login;
