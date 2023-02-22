import React, { useState, useEffect } from 'react';
import { AsyncStorage } from 'react-native';
import { Keyboard, View, Text, TouchableOpacity } from 'react-native';
import stylesFn from '../../components/styles';
import Constants from 'expo-constants';
import * as Notifications from 'expo-notifications';
import DateTimePickerModal from 'react-native-modal-datetime-picker';

// Reminders
const clientOfToday = ['Juan', 'Rosa'];

const Reminders = () => {
  const styles = stylesFn();
  const [isTimePickerVisible, setTimePickerVisibility] = useState(true);
  const [notificationText, setNotificationText] = useState(
    'No reminders yet. Choose a time for the reminder'
  );

  useEffect(() => {
    askNotification();
    const listener =
      Notifications.addNotificationReceivedListener(handleNotification);
    return () => listener.remove();
  }, []);

  useEffect(() => {
    const getNotificationText = async () => {
      const text = await AsyncStorage.getItem('notificationText');
      if (text) {
        setNotificationText(text);
      }
    };
    getNotificationText();
  }, []);

  const onSubmit = (hour, minute) => {
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
        hour: hour,
        minute: minute,
        repeats: true,
      },
    };
    // Notifications only show when the app is not active
    Notifications.scheduleNotificationAsync(schedulingOptions);
    AsyncStorage.setItem(
      'notificationText',
      `Your reminder is set to ${hour}:${minute} time, everyday`
    );
  };

  const cancelNotifications = () => {
    Notifications.cancelAllScheduledNotificationsAsync();
    AsyncStorage.removeItem('notificationText');
    setNotificationText(
      'All notifications cancelled. Choose a time for the reminder'
    );
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
  const showTimePicker = () => {
    setTimePickerVisibility(true);
  };
  const hideTimePicker = () => {
    setTimePickerVisibility(false);
  };

  const handleConfirm = (time) => {
    const dateSchedule = new Date(time);
    const myDate = new Date();
    const diffInMs = myDate - dateSchedule; // diff in Miliseconds
    const diffInHours = Math.floor(diffInMs / (1000 * 60 * 60)); // to hours
    const diffInMinutes = Math.floor((diffInMs / (1000 * 60)) % 60); // to minutes
    const hour = dateSchedule.getHours();
    const minute = dateSchedule.getMinutes();
    console.warn(
      'Time picked: ',
      time,
      'Tiempo, horas: ',
      diffInHours,
      ' minutos: ',
      diffInMinutes
    );
    onSubmit(hour, minute);
    setNotificationText(
      `Your reminder is set to ${hour}:${minute} time, everyday`
    );
    hideTimePicker();
  };
  return (
    <View style={styles.container}>
      <Text style={styles.h1}>Reminders page</Text>
      <Text style={styles.h2}>{notificationText}</Text>
      <DateTimePickerModal
        isVisible={isTimePickerVisible}
        mode='time'
        date={new Date(new Date().setHours(0, 0, 0, 0))}
        onConfirm={handleConfirm}
        onCancel={hideTimePicker}
      />
      <TouchableOpacity style={styles.buttons} onPress={showTimePicker}>
        <Text style={styles.textButton}>Pick a time</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.buttons} onPress={cancelNotifications}>
        <Text style={styles.textButton}>Cancel all notifications</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Reminders;
