import React from 'react';
import { useRoute } from '@react-navigation/native';
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import { useResetForm } from '../../hooks';
import Form from '../../../../components/Form';
import stylesFn from './styles';

// Displays a form for creating a user or editing a user

const Edit = () => {
  useResetForm();

  const styles = stylesFn();
  const { params } = useRoute();
  const { customerID } = params;
  return (
    <View style={styles.container}>
      <Form />
    </View>
  );
};

export default Edit;
