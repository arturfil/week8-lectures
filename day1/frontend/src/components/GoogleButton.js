import { useContext } from 'react';
import GoogleLogin from 'react-google-login';
import { AuthContext } from '../context/AuthContext';

const GoogleButton = () => {
  const { googleLogin } = useContext(AuthContext);

  const responseGoogle = (resp) => {
    try {
      const { email, name} = resp.profileObj;
      googleLogin({email, name});
    } catch (error) {
      console.log(error);
    }
    // todo send to AuthContext method => googleLogin
  }

  return (
    <GoogleLogin
      className="form-control googleBtn"
      clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID}
      buttonText="Log In with Google"
      onSuccess={responseGoogle}
      onFailure={responseGoogle}
    />
  )
}

export default GoogleButton;