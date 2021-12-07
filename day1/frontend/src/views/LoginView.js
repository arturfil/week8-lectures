import { useContext } from "react";
import GoogleButton from "../components/GoogleButton";
import { AuthContext } from "../context/AuthContext"

const LoginView = () => {
  const { user, setUser, loginUser } = useContext(AuthContext);

  const handleChange = (event) => {
    setUser({
      ...user,
      [event.target.name]: event.target.value
    })
  }

  const handleSubmit = async (event) => {
    event.preventDefault();
    await loginUser(user);
  }

  return (
    <div className="container mt-5">
      <form className="form" >
        <h2>Login View</h2>      
        <input 
          name="email"
          value={user.email}
          onChange={handleChange}
          className="form-control" 
          type="text" 
          placeholder="email"
        />
        <input 
          name="password"
          value={user.password}
          onChange={handleChange}
          className="form-control" 
          type="password" 
          placeholder="password"
        />
        <button 
          onClick={handleSubmit}
          className="btn btn-outline-dark form-control">
          Log In
        </button>
        <GoogleButton/>
      </form>
    </div>
  )
}

export default LoginView
