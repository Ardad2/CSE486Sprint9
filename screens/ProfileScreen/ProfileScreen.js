// decide what the user will see after logging in

import {View, Text, Button, StyleSheet} from 'react-native'
import { useNavigation } from '@react-navigation/native';
import { useSelector, dispatch , useDispatch} from 'react-redux';
import { incrementBehavior, decrementBehavior } from '../../store/redux/users';

function ProfileScreen( {route, navigation} )
{

    const dispatch = useDispatch();

    const authToken = useSelector( (state) => state.authTokens.data[0]); 

    // const behaviorList = useSelector( (state) => state.users.users[0].behaviors);
    
    const userList = useSelector( (state) => state.users.users);
    const currUser = userList.filter(user => user.username == authToken.email);
    const behaviorList = currUser[0].behaviors;

    var behaviorIndex = 0;

    for (var i = 0; i < behaviorList.length ; i++)
    {                
        if (behaviorList[i].name == route.params.name) {
            behaviorIndex = i;
        }
    }

    const name = route.params.name;

    function decrementGoalCount() { // decrease behavior's current count
        dispatch(decrementBehavior(
            {
                username: authToken.email,
                behaviorName: name
            }
          ));
     }

     function incrementGoalCount() { // increase behavior's current count
        dispatch(incrementBehavior(
            {
                username: authToken.email,
                behaviorName: name
            }
          ));
    }
    
    /*
    - some features for the profile screen that will need to be added:
    - Change profile picture / View profile picture
     - List behaviors that the user will want to display
        - some behaviors might not want to be displayed on the profile
        - or show behaviors of importance to the user, maybe more proud of some than others
    - Bio for the user
    - Name of the user
    - Username for the user
    - View account information
    - potentially link to facebook account?
    - add Maz's easier capability for those that are disabled

   also was thinking about maybe the ability to add a light screen mode
    or a dark screen mode since that is quite popular recently

    Some more possible features:
      -  allow the ability to post highlights to their friends
       - can chose whether the posts can be viewed by anyone or friends
       - view the users likes
       - view the users following / followers 
       - look at the profiles behaviors in a list format
       - look at the profiles behaviors in a box format
    */


    
    return (
        <View> 
        <Text>{behaviorList[behaviorIndex].name}</Text>
        <Text>{behaviorList[behaviorIndex].date}</Text>

        <View style={styles.buttonContainer}>
             <View style={styles.button} >
                <Button title="+" onPress={incrementGoalCount} color="black"/>
            </View>
            <Text>{behaviorList[behaviorIndex].count} / {behaviorList[behaviorIndex].goalCount}</Text>
            <View style={styles.button} >
                <Button title="-" onPress={decrementGoalCount} color="black"/>
            </View>
            </View>
        
        </View>
    )
}

const styles = StyleSheet.create({
    inputContainer: {
      flex: 1,
      padding: 16,
      backgroundColor: 'white'
    },
    textInput: {
      borderWidth: 1,
      borderColor: '#F0F0F0',
      backgroundColor: '#F0F0F0',
      color: '#120438',
      borderRadius: 6,
      width: '100%',
      padding: 8
    },
    buttonContainer: {
        marginTop: 16,
        backgroundColor: '#FFFFFF',
        flexDirection: "row",
    },
    button: {
        width: 100,
        marginHorizontal: 8
    },
    textStyle: {
      fontWeight: 'bold',
      padding: 10
    }
  });
  

export default ProfileScreen;
