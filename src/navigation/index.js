import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import WelcomeScreen from '../screens/welcome';
import RegionsScreen from '../screens/regions';
import RemindersScreen from '../screens/reminders';
import CustomerNewScreen from '../screens/customers/CustomerNew';
import CustomersByRegion from '../screens/customers/CustomersByRegion';
import CustomerEditScreen from '../screens/customers/CustomerEdit';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';

const Navigation = () => {
  const Tab = createBottomTabNavigator();
  const Stack = createStackNavigator();

  const RegionsStack = () => {
    return (
      <Stack.Navigator
        initialRouteName='Regions'
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

  // Reset the stack history to 0 when click on tab Regions.
  // To go to Regions always.
  const handleTabPress = ({ navigation }) => {
    console.log('RESETING');
    navigation.reset({
      index: 0,
      routes: [{ name: 'Regions' }],
    });
  };

  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName='Welcome'
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
        <Tab.Screen
          name='Regions'
          component={RegionsStack}
          listeners={({ navigation, route }) => ({
            tabPress: (e) => {
              // Prevent default action
              e.preventDefault();
              // Call the handleTabPress function
              handleTabPress({ navigation });
            },
          })}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
