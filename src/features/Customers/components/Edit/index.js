import React from 'react';
import { useRoute } from '@react-navigation/native';
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import stylesFn from './styles';

// Displays a form for creating a user or editing a user

const Edit = () => {
  const styles = stylesFn();
  const { params } = useRoute();
  const { customerID } = params;
  return (
    <View style={styles.container}>
      <Text>Editing the customer: {customerID}</Text>
    </View>
  );
};

export default Edit;

/* 
const Form = ({ disabled = false }) => {
  const styles = formStyles();
  const { params } = useRoute();
  const { fields, setFormField } = useUpdateFields(params.animalID);
  const { onSubmit } = useEditAnimal(params.animalID);
  const [value, onChangeText] = React.useState('Dog');

  console.log();

  console.log(setFormField);
  // const {
  //     common_name,
  //     scientific_name,
  //     description,
  //     endangered_status,
  //     population,
  //     invasive
  // } = fields

  const { common_name, scientific_name } = fields;

  return (
    <View style={styles.container}>
      <View style={styles.form}></View>

      <TextInput
        key={'common_name'}
        placeholder='Common Name'
        value={common_name || ''}
        style={{
          borderWidth: 1,
          borderColor: 'black',
          borderRadius: 4,
          padding: 15,
        }}
        onChangeText={(v) => setFormField('common_name', v)}
      />

      <View style={{ height: 15, width: '100%' }}></View>

      <TextInput
        key={'scientific_name'}
        placeholder='Scientific Name'
        value={scientific_name || ''}
        style={{
          borderWidth: 1,
          borderColor: 'black',
          borderRadius: 4,
          padding: 15,
        }}
        onChangeText={(v) => setFormField('scientific_name', v)}
      />

      <TouchableOpacity onPress={onSubmit}>
        <Text>Submit</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Form;
 */
