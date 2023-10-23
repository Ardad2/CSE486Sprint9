import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button} from 'react-native';
import { useState } from 'react';
import { useSelector, dispatch , useDispatch} from 'react-redux';
import { authenticateAuthTokens, logoutAuthTokens } from '../store/redux/authTokens';


export default function Settings() {

  const authToken = useSelector( (state) => state.authTokens.data[0]); 

  const dispatch = useDispatch();

  const vacationMode = false;


  // https://darkmodejs.learn.uno/
  const darkmode =  new Darkmode();
  darkmode.toggle();
  console.log(darkmode.isActivated()) // will return true

  function logout() {
    dispatch(logoutAuthTokens());
 }

  function darkMode() {
    dispatch(darkModeAuthTokens());
 }

    // function to increase color contrast
    // function increaseContrast() {
    //     dispatch(increaseContrastAuthTokens());
    // }
  
    // function saveSettings() {
    //     dispatch(saveSettingsAuthTokens());
    // }

  


  return (
    <View style={styles.container}>
      <Text></Text>
      <View style={styles.buttonContainer}>
             <View style={styles.button} >
             <Button title="My Profile" onPress={logout} color="black"/>
             <Button title="Vacation Mode?" onPress={logout} color="black"/>
             <Button title="Light Mode" onPress={logout} color="black"/>
             <Button title="Dark Mode" onPress={logout} color="black"/>
                <Button title="Log Out" onPress={logout} color="black"/>
            </View>
            </View>

    </View>
  );
}
/*
would be cool to add into settings a light screen
or a dark screen option
Im sure it would be relatively easy to implement and something I can look into.
*/



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonContainer: {
    marginTop: 16,
    backgroundColor: '#F0F0F0',
    flexDirection: "row",
},
button: {
    width: 100,
    marginHorizontal: 8
}
});
