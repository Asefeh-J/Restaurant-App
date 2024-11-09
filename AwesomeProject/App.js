import * as React from 'react';
import { useState } from 'react'; 
import { View, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import { createDrawerNavigator } from '@react-navigation/drawer';

import LittleLemonHeader from './components/LittleLemonHeader';
import MenuItems from './components/MenuItems';
import LittleLemonFooter from './components/LittleLemonFooter';
import LoginScreen from './components/LoginScreen';
import FeedbackForm from './components/FeedbackForm';
import Welcome from './components/Welcome';

// =========== without navigation ===========
// export default function App() {
//   return (
//     <>
//     <View style={styles.container}>
//       <MenuItems/>
//       <LittleLemonFooter />
//     </View>
//     </>
//   );
// }



// ============== using Stack navigation ===============
// const Stack = createNativeStackNavigator();

// function App() {
//   return (
//     <NavigationContainer>
//       <Stack.Navigator initialRouteName="Welcome" screenOptions={{ headerStyle: { backgroundColor: '#FBDABB' } }}>
//         <Stack.Screen name="Welcome" component={Welcome} options={{ title: 'Home' }}/>
//         <Stack.Screen name="Menu" component={MenuItems} />
//       </Stack.Navigator>
//     </NavigationContainer>
//   );
// }


// ============== using Tab navigation ===============
// const Tab = createBottomTabNavigator();

// function App() {
//   return (
//     <NavigationContainer>
//       <Tab.Navigator
//         screenOptions={({ route }) => ({
//         tabBarIcon: ({ focused, color, size }) => {
//           let iconName;
//           // So, the code checks if the current route's name is 'Welcome'.
//           //  If it is, it sets the iconName based on whether the route is focused or not.
//           if (route.name === 'Welcome') {
//             iconName = focused
//               ? 'ios-information-circle'
//               : 'ios-information-circle-outline';
//           } else if (route.name === 'Menu') {
//             iconName =  'ios-list';
//           }
//           return <Ionicons name={iconName} size={size} color={color} />;
//         },
//         tabBarActiveTintColor: 'tomato',
//         tabBarInactiveTintColor: 'gray',
//       })}>
//      <Tab.Screen name="Welcome" component={Welcome} />
//       <Tab.Screen name="Menu" component={MenuItems} />
//     </Tab.Navigator>
//     </NavigationContainer>
//   );
// }

// ============== using Drawer navigation ===============
// const Drawer = createDrawerNavigator ();

// function App() {
//   return (
//     <NavigationContainer>
//       <Drawer.Navigator screenOptions={{ drawerPosition: 'right'}}>
//         <Drawer.Screen name="Welcome" component={Welcome} />
//         <Drawer.Screen name="Menu" component={MenuItems} />
//         <Drawer.Screen name="Login" component={LoginScreen} />
//       </Drawer.Navigator>
//     </NavigationContainer>
//   );
// }

// ============= using LoginScreen as the first step =================

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();


function AuthStackScreen({ isLoggedIn, setIsLoggedIn, setToken }) {
  return (
    <Stack.Navigator initialRouteName="LoginScreen">
      <Stack.Screen name="LoginScreen">
        {(props) => (
          <LoginScreen {...props} isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} setToken={setToken}/>
        )}
      </Stack.Screen>
    </Stack.Navigator>
  );
}

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [token, setToken] = useState(null);

  return (
    <NavigationContainer>
      {isLoggedIn ? (
        <Drawer.Navigator screenOptions={{ drawerPosition: 'right' }}>
          <Drawer.Screen name="Welcome" component={Welcome} />
          <Drawer.Screen name="Menu" component={() => <MenuItems token={token} />}/>
          <Drawer.Screen name="Feedbak" component={FeedbackForm} />

        </Drawer.Navigator>
      ) : (
        <AuthStackScreen isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} setToken={setToken} />
      )}
    </NavigationContainer>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#495E57',
  },
});




export default App;
