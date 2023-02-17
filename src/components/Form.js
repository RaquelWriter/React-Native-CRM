import { useRoute } from '@react-navigation/native';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { View, Text, TextInput, TouchableHighlight } from 'react-native';
import { useUpdateFields } from '../features/Customers/hooks';
import stylesFn from './styles';

const Form = () => {
  const styles = stylesFn();
  const { params } = useRoute();
  const { customerID } = params;
  console.log('customerID :', customerID);
  const { fields, setFormField } = useUpdateFields(customerID);
  /*   const { onSubmit } = useEditAnimal(params.animalID); */
  const [value, onChangeText] = useState('MiNombre');

  //const { firstName, lastName, region } = fields;
  // const {
  //     common_name,
  //     scientific_name,
  //     description,
  //     endangered_status,
  //     population,
  //     invasive
  // } = fields

  const customer = useSelector((state) => {
    return state.customers.customers.find((cust) => cust.id === customerID);
  });
  const { firstName, lastName, region } = customer;

  return (
    <View style={styles.container}>
      <Text style={styles.h2}>Customer ID: {customerID}</Text>
      <TextInput
        key={firstName}
        placeholder={firstName}
        value={firstName || ''}
        style={styles.form}
        onChangeText={(v) => setFormField('firstName', v)}
      />
      <TextInput
        key={lastName}
        placeholder={lastName}
        value={lastName || ''}
        style={styles.form}
        onChangeText={(v) => setFormField('lastName', v)}
      />
      <TextInput
        key={region}
        placeholder={region}
        value={region || ''}
        style={styles.form}
        onChangeText={(v) => setFormField('region', v)}
      />
      <TouchableHighlight>
        <Text>Submit</Text>
      </TouchableHighlight>

      {/* <TextInput
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
      </TouchableOpacity> */}
    </View>
  );
};

export default Form;
