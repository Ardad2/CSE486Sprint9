import {useState, useEffect} from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import { useSelector, dispatch, useDispatch } from 'react-redux';

import { 
  StyleSheet,  
  View, 
  FlatList, Button, Text
} from 'react-native';
import { StatusBar } from 'expo-status-bar';

import BehaviorItem from '../../components/BehaviorItem';
import BehaviorInput from '../../components/BehaviorInput';
import IconButton from '../../components/IconButton';

import BehaviorDetailScreen from './BehaviorDetailScreen';
import BehaviorFormScreen from './BehaviorFormScreen';

import WeeklyCalendar  from '../../components/Calendar/WeeklyCalendar';


import { authenticateAuthTokens, logoutAuthTokens } from '../../store/redux/authTokens';


const HomeStack = createStackNavigator();

export default function HomeScreen({navigation}) {

//  const behaviorList = useSelector((state) => state.behaviors.behaviors);
const dispatch = useDispatch();

const authToken = useSelector( (state) => state.authTokens.data[0]); 

//const behaviorList = useSelector( (state) => state.users.users[0].behaviors);

const userList = useSelector( (state) => state.users.users);
const currUser = userList.filter(user => user.username == authToken.email);
const behaviorList = currUser[0].behaviors;

const sampleEvents = [
  { 'start': '2023-07-17 09:00:00', 'duration': '00:20:00', 'note': 'Walk my dog' },
  { 'start': '2020-03-24 14:00:00', 'duration': '01:00:00', 'note': 'Doctor\'s appointment' },
  { 'start': '2020-03-25 08:00:00', 'duration': '00:30:00', 'note': 'Morning exercise' },
  { 'start': '2020-03-25 14:00:00', 'duration': '02:00:00', 'note': 'Meeting with client' },
  { 'start': '2020-03-25 19:00:00', 'duration': '01:00:00', 'note': 'Dinner with family' },
  { 'start': '2020-03-26 09:30:00', 'duration': '01:00:00', 'note': 'Schedule 1' },
  { 'start': '2020-03-26 11:00:00', 'duration': '02:00:00', 'note': 'Schedule 2' },
  { 'start': '2020-03-26 15:00:00', 'duration': '01:30:00', 'note': 'Schedule 3' },
  { 'start': '2020-03-26 18:00:00', 'duration': '02:00:00', 'note': 'Schedule 4' },
  { 'start': '2020-03-26 22:00:00', 'duration': '01:00:00', 'note': 'Schedule 5' }
]


  const [ date, setDate ] = useState(null);

  useEffect( () => {
    let today = new Date();
    let date = today.getDate()+'.'+(today.getMonth()+1)+'.'+today.getFullYear();
    setDate(date);
  }, []);



  const [modalIsVisible, setModalIsVisible] = useState(false);
  const [courseBehaviors, setCourseBehaviors] = useState([]);

  function startAddBehaviorHandler() {
   //setModalIsVisible(true);
   navigation.navigate("BehaviorListScreen")

  // navigation.navigate("BehaviorFormScreen", { onAddBehavior: addBehaviorHandler} )

  }

  function endAddBehaviorHandler() {
   // setModalIsVisible(false);
   
  }
  
  function addBehaviorHandler(enteredBehaviorText) {
    setCourseBehaviors(currentCourseBehaviors => [...currentCourseBehaviors, {text: enteredBehaviorText, id: Math.random().toString(), date: date, icon: "Hello"}       ]);
  endAddBehaviorHandler();
  }

  function deleteBehaviorHandler(id) {
    setCourseBehaviors( (currentCourseBehaviors) => {
      return currentCourseBehaviors.filter((behavior) => behavior.id != id);
    } );
  }

  


  function pressHandler(name) {
    navigation.navigate("BehaviorDetailScreen", { name: name});
  }

  return (
    /*
    <>
    <StatusBar style="light"/>
    <View style={styles.appContainer}>
    <BehaviorInput
     visible={modalIsVisible} 
     onAddBehavior={addBehaviorHandler} 
     onCancel={endAddBehaviorHandler}
     />
     <View> 
       <Text style={styles.headingText}>Welcome back {authToken.email} What did you do today?</Text>
     </View>

     <View style={styles.plusButton}>  
    <IconButton icon="add-circle-outline" color="black" onPress={startAddBehaviorHandler} />
    </View>  
    
      <View style={styles.behaviorsContainer}>
        <FlatList data={behaviorList} renderItem = {itemData => {
          return <BehaviorItem 

          id = {itemData.item.id}
          name = {itemData.item.name}
          icon={itemData.item.icon}
          count={itemData.item.count}
          goalCount={itemData.item.goalCount}
          memo={itemData.item.memo}
          date={itemData.item.date}
          type={itemData.item.type}


          onDeleteItem={deleteBehaviorHandler}
          onPress={pressHandler}
          />

        }}
        keyExtractor={(item,index) => {return item.id}} 
        alwaysBounceVertical={true}
        /> 
        </View>
      </View>
        </>
*/

<View style={styles.container}>
<WeeklyCalendar events={sampleEvents} style={{ }} />
</View>

  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    padding: 50,
    paddingHorizontal: 16,
    backgroundColor: '#FAFAFA'
    //You can add a "backgroundColor" in app.json.
  },
  behaviorsContainer: {
    flex: 5
  },
  headingText: {
    fontSize: 20,
    color: 'black'
  },
  plusButton: {
    alignItems: 'center'
  }
});
