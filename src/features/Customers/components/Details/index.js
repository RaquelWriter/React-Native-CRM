import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import stylesFn from './styles';

// Show a single customer info
// Contains a link to edit the customer information

const Details = () => {
  const styles = stylesFn();
  return (
    <View style={styles.container}>
      <Text>Details of a unique user</Text>
    </View>
  );
};

export default Details;
