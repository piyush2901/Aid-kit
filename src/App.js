import React from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from './screens/Home';
import Steps from './screens/Steps';
import Kits from './screens/Kits';
import Emergency from './screens/Emergency';
import Medicine from './screens/Details';
import Vocab from './screens/Vocab';
import KitInfo from './screens/KitInfo';
import Categories from './screens/Categories';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Steps" component={Steps} />
        <Stack.Screen name="Kits" component={Kits} />
        <Stack.Screen name="Vocab" component={Vocab} />
        <Stack.Screen name="Medicine" component={Medicine} />
        <Stack.Screen name="Emergency" component={Emergency} />
        <Stack.Screen name="KitInfo" component={KitInfo} />
        <Stack.Screen name="Categories" component={Categories} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
