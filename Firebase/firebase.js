import * as firebase from 'firebase';

// This object has all the configurations for the Firebase
const firebaseConfig = {

    apiKey: "AIzaSyAUuZUgvlmMYBOl_Kg43Eb2sHnEJp4_us4",
  
    authDomain: "sandler-cookbook.firebaseapp.com",
  
    projectId: "sandler-cookbook",
  
    storageBucket: "sandler-cookbook.appspot.com",
  
    messagingSenderId: "519878306197",
  
    appId: "1:519878306197:web:4fe836d84e5caae16dae9c"
  
  };

// Intiialize the Firebase if no prexisting applications already exist 
if(!firebase.apps.length) 
{
  firebase.intializeApp(firebaseConfig); // Initialize Firebase with the configuration above by calling that object
}

export {firebase}
