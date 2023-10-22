// get token to authenticate user when creating account or logging in
// The authenticate, createUser, and login functions in this code interact with/make requests to the Firebase authentication service (as indicated by the API key below) to authenticate a user attempting to log in

import axios from 'axios';

// Need this API key to make requests to Firebase
const API_KEY = 'AIzaSyAUuZUgvlmMYBOl_Kg43Eb2sHnEJp4_us4'

async function authenticate(mode, email, password) {
    
    const url = `https://identitytoolkit.googleapis.com/v1/accounts:${mode}?key=${API_KEY}`;
  
    const response = await axios.post( url, {
      email: email,
      password: password,
      returnSecureToken: true,
    });
  
    const token = response.data.idToken;
  
    return response.data;
  }
  
  export function createUser( email, password ) {
    return authenticate('signUp', email, password);
  }
  
  export function login( email, password ) {
    return authenticate( 'signInWithPassword', email, password );
  }
