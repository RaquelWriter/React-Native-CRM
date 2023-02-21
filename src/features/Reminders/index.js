import React, { useEffect } from 'react';
import { Keyboard, View, Text, TouchableOpacity } from 'react-native';
import stylesFn from '../../components/styles';
import Constants from 'expo-constants';
import * as Notifications from 'expo-notifications';

// Reminders
const clientOfToday = ['Juan', 'Rosa'];

const Reminders = () => {
  const styles = stylesFn();

  useEffect(() => {
    askNotification();
    const listener =
      Notifications.addNotificationReceivedListener(handleNotification);
    return () => listener.remove();
  }, []);

  const onSubmit = (seconds) => {
    Keyboard.dismiss();
    const schedulingOptions = {
      content: {
        title: `Time to call this client: ${
          clientOfToday[Math.floor(Math.random() * clientOfToday.length)]
        }`,
        body: 'Open CRM to find out more info about this client',
        sound: true,
        priority: Notifications.AndroidNotificationPriority.HIGH,
        color: 'blue',
      },
      trigger: {
        seconds: seconds,
      },
    };
    // Notifications only show when the app is not active
    Notifications.scheduleNotificationAsync(schedulingOptions);
  };
  const handleNotification = () => {
    console.warn(
      'Notification will run, but not will show up in the app, until close'
    );
  };

  const askNotification = async () => {
    // ask permission in iOs devices
    const { status } = await Notifications.requestPermissionsAsync();
    if (Constants.isDevice && status === 'granted')
      console.log('Notifications permissions granted');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.h1}>Reminders page.</Text>
      <TouchableOpacity style={styles.buttons} onPress={() => onSubmit(5)}>
        <Text style={styles.textButton}>Set up my reminder</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Reminders;
