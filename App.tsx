import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
// we don't use nativeStackNavigator here, because we are using the bottom tab to handle moving between pages
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
// for icons for our bottom tab
import Ionicons from "react-native-vector-icons/Ionicons";

//define what icons we want on our navigation bar
type RootTabParamList = {
  Home: undefined;
  SecondScreen : undefined;
};
// think of this like "Stack" from when we did StackNavigator
const Tab = createBottomTabNavigator<RootTabParamList>();

 function HomeScreen () {
  return (
    <View style={styles.container}>
      <Text>Welcome to the Home Screen</Text>
      <StatusBar style="auto" />
    </View>
  );
}


 function SecondScreen () {
  return (
    <View style={styles.container}>
      <Text>Welcome to the Second Screen</Text>
      <StatusBar style="auto" />
    </View>
  );
}




export default function App() {
  return (
    //
    <NavigationContainer>
    {/*this time wwe use Tab instead of Stack, because of our BottomTabNavigation (not using nativeStackNavigator)*/}
      <Tab.Navigator
      /* screenOptions allows us to set up HOW to route between screens*/
       screenOptions={({route}) => ({
       /*here we are setting up how to handle changing the icon as we move between screens*/
        tabBarIcon: ({focused, color, size}) => {
        let iconName: String;

        if (route.name === 'Home'){
        /* IF home is the selected (focused) screen, set the icon to 'home'(coloured in icon) 
        ELSE if it is not the selected one (: seperates if and else), set it to an outlined versiom 'hpme-outlined'*/
        iconName = focused? "home" : "home-outline";
                  }else if (route.name === "SecondScreen") {
                    iconName = focused ? "settings" : "settings-outline";
                  }
                  return <Ionicons name={iconName} size={size} color={color}/>
    },
    /* ActiveTint - Selected Item Highlight Colour
    InactiveTint - Non-selected item Highlight Colour*/ 
    tabBarActiveTintColor: 'tomato',
    tabBarInactiveTintColor: 'gray',
headerShown: false 
  })}
  > 
  <Tab.Screen name = 'Home' component={HomeScreen}/>
  <Tab.Screen name='SecondScreen' component={SecondScreen}/>
  
  </Tab.Navigator>
</NavigationContainer>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
