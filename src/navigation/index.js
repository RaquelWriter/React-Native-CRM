import { NavigationContainer } from '@react-navigation/native';
//import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Ionicons from 'react-native-vector-icons/Ionicons';
import WelcomeScreen from '../screens/welcome';
import RegionsScreen from '../screens/regions';
import RemindersScreen from '../screens/reminders';
import CustomerNewScreen from '../screens/customers/CustomerNew';
import CustomersByRegion from '../screens/customers/CustomersByRegion';
import CustomerEditScreen from '../screens/customers/CustomerEdit';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';

export const Navigation = () => {
  const Tab = createBottomTabNavigator();
  const Stack = createStackNavigator();
  const RegionsStack = () => {
    return (
      <Stack.Navigator
      /*         screenOptions={({ route }) => ({
          headerShown: false,
        })} */
      >
        <Stack.Screen name='Regions' component={RegionsScreen} />
        <Stack.Screen name='Customers' component={CustomersByRegion} />
        <Stack.Screen name='Edit customer' component={CustomerEditScreen} />
      </Stack.Navigator>
    );
  };
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          headerShown: false,
          tabBarIcon: ({ focused, size, color }) => {
            let iconName;
            if (route.name === 'Welcome') {
              iconName = focused ? 'home' : 'home-outline';
              color = 'salmon';
            } else if (route.name === 'Reminder') {
              iconName = focused ? 'time' : 'time-outline';
              color = 'salmon';
            } else if (route.name === 'New') {
              iconName = focused ? 'person-add' : 'person-add-outline';
              color = 'salmon';
            } else if (route.name === 'Regions') {
              iconName = focused ? 'globe' : 'globe-outline';
              color = 'salmon';
            }
            // You can return any component you want here
            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: 'tomato',
          tabBarInactiveTintColor: 'gray',
        })}
      >
        <Tab.Screen name='Welcome' component={WelcomeScreen} />
        <Tab.Screen name='Reminder' component={RemindersScreen} />
        <Tab.Screen name='New' component={CustomerNewScreen} />
        <Tab.Screen name='Regions' component={RegionsStack} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

//const CustomersStack = createNativeStackNavigator();
//const RegionsStack = createNativeStackNavigator();

/* const CustomersStack = createNativeStackNavigator();
const RegionsStack = createNativeStackNavigator();

function CustomersStackScreen() {
  return (
    <CustomersStackScreen.Navigator initialRouteName='CustomersDetails'>
      <CustomersStack.Screen
        name='CustomersDetails'
        component={Details}
        options={{ tabBarLabel: 'Customers By Region' }}
      ></CustomersStack.Screen>
    </CustomersStackScreen.Navigator>
  );
} */

export default Navigation;
/* 
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Welcome from '../screens/Welcome';
import Details from '../screens/Details';

const Tab = createBottomTabNavigator();

const Navigation = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, size, color }) => {
            let iconName;
            if (route.name === 'Details') {
              iconName = 'ios-analytics';
            } else if (route.name === 'Welcome') {
              iconName = focused ? 'ios-add-circle' : 'ios-add-circle-outline';
            }
            // You can return any component you want here
            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: 'tomato',
          tabBarInactiveTintColor: 'gray',
        })}
      >
        <Tab.Screen name='Welcome' component={Welcome} />
        <Tab.Screen name='Details' component={Details} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};
export default Navigation; */
