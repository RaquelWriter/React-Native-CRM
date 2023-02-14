import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import stylesFn from './styles';

// Displays a list of customers by status
// Add toggle buttons or other UI to allow user on the customers screen to sort
// by status

const ListByStatus = () => {
  const styles = stylesFn();
  return (
    <View style={styles.container}>
      <Text>List of customers by status</Text>
    </View>
  );
};

export default ListByStatus;
