// The code in this file handles user registration and authentication
import { useState } from 'react';
import AuthContent from '../../components/Auth/AuthContent';
import LoadingOverlay from '../../components/ui/LoadingOverlay';
import {createUser} from '../../util/auth';
import { Alert } from 'react-native';
import { useSelector, dispatch , useDispatch} from 'react-redux';
import { authenticateAuthTokens, logoutAuthTokens } from '../../store/redux/authTokens';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import {auth} from '../../firebase';


function SignupScreen() {
  const [isAuthenticating, setIsAuthenticating] = useState(false); // Set useState to false because this application/screen is not currently authenticating a user

  const dispatch = useDispatch();

  const authToken = useSelector( (state) => state.authTokens.data[0]); 

  // This function serves as an event handler for when a user is attempting to sign up
  async function signupHandler({ email, password }) {
    setIsAuthenticating(true); // Set this to true because now the application is actively authenticating and signing the user in
    try {
      const data = await createUser(email, password);
       
      console.log(data.idToken);

      dispatch(addUser(
        {
          username: data.email,
        }
      ));


      createUserWithEmailAndPassword(auth,email,password); // Create the user with the authenticated email and password
      

      dispatch(authenticateAuthTokens(
        {
          token: data.idToken,
          email: data.email
        }
      ));
    // Purpose of this catch block is to catch and log if there is an error in the user's authentication
    }catch (error) {
      console.log(error);
      Alert.alert(
        'Authentication failed',
        'Could not create user, please check your input and try again later.'
      );
    }
    setIsAuthenticating(false);
  }

  // If the user was successfully authenticated (isAuthenticating == true)
  if (isAuthenticating) {

    return <LoadingOverlay message="Creating user..." />; // Then return a message that the user is being created and the signup is being processed
  }

  return <AuthContent onAuthenticate={signupHandler} />; 
}

export default SignupScreen;
