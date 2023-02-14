import React from 'react';
import { View, Text } from 'react-native';
import stylesFn from '../../components/styles';

// Reminders

const Reminders = () => {
  const styles = stylesFn();
  return (
    <View style={styles.container}>
      <Text>Reminders page.</Text>
    </View>
  );
};

export default Reminders;
