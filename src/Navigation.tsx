import { View, Text } from 'react-native';
import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import Home from './Screens/secure/Home';
import ViewScreen from './Screens/secure/ViewScreen';
import CreateScreen from './Screens/secure/CreateScreen';
import EditScreen from './Screens/secure/EditScreen';

const Stack = createNativeStackNavigator();

// const AuthScreens = () => {
//   return (
//     <Stack.Group>
//       <Stack.Screen name="LogInScreen" component={LogInScreen} />
//       <Stack.Screen name="SignUpScreen" component={SignUpScreen} />
//     </Stack.Group>
//   );
// };
const SecureScreens = () => {
  return (
    <Stack.Group>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="ViewScreen" component={ViewScreen} />
      <Stack.Screen name="CreateScreen" component={CreateScreen} />
      <Stack.Screen name="EditScreen" component={EditScreen} />
    </Stack.Group>
  );
};

const Navigation = () => {
  //   const [user, isLoggedIn] = useAuthentication();
  const initialRouteName = true ? 'Home' : 'LogInScreen';
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName={initialRouteName}
        screenOptions={{ headerShown: false }}
      >
        {/* {user && isLoggedIn ? SecureScreens() : AuthScreens()} */}
        {SecureScreens()}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
