import * as React from 'react';
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Navigator from './components/navigator/navigator';


const Stack = createNativeStackNavigator()

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
        name='BottomTabNavigator'
        component={Navigator}
        options={{
          headerShown:false,
        }}
        >

        </Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
}


