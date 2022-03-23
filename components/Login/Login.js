import  { useContext,  useEffect,  useState } from "react";
import { userContext } from "../../pages/_app";
import { useRouter } from "next/router";
import axios from "axios";


const Login = () => {
  const router = useRouter();
  const [loggedInUser, setloggedInUser] = useContext(userContext);

  const [isNewUser, setUser] = useState(false);
  const [isError, setIsError] = useState({
    emailError: false,
    password: false,
  });
  
useEffect(() => {

  if (loggedInUser.email !== undefined) {
    router.back();
  }

}, [loggedInUser.email, router])
  

  function handleNewUser() {
    setUser(!isNewUser);
  }
  function validateEmail(email) {
    const re =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  }
  async function  handleSignup  (e)  {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    const displayName = e.target.name.value;

    if (isNewUser) {
      if (validateEmail(email)) {
        setIsError({ emailError: false, password: true });
        
        console.log(displayName, email, password);


        // send user details to db for sign up
        try {
          const res = await axios.post('/api/userRegistration', {email, password, displayName});
          if(res.status===200){
            document.getElementById("loginForm").reset();

            setloggedInUser({ email, displayName})
            localStorage.setItem("email", email);
            localStorage.setItem("name", res.data.displayName);
              router.push('/')
          }
          
      } catch (error) {
          console.log(error);
          
      }

        
      } else {
        setIsError({ emailError: true, password: true });
      }
    } else {
     

      // sign in here
   

      try {
        const res = await axios.post('/api/login', {email, password});
        if(res.status===200){
          document.getElementById("loginForm").reset();
          
          setloggedInUser({ email, displayName: res.data.displayName})
          localStorage.setItem("email", email);
          localStorage.setItem("name", res.data.displayName);
            router.push('/')
        }
        
    } catch (error) {
        console.log(error);
        alert('Invalid username or password')
        
    }
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
