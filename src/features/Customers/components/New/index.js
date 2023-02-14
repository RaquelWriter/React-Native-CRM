import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import stylesFn from '../../../../components/styles';

// Displays a form for creating a user or editing a user

const New = () => {
  const styles = stylesFn();
  return (
    <View style={styles.container}>
      <Text>Create a user</Text>
    </View>
  );
};

export default New;
