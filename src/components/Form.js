import { useRoute } from '@react-navigation/native';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Picker,
  Switch,
} from 'react-native';
import { useEditCustomer, useUpdateFields } from '../features/Customers/hooks';
import stylesFn from './styles';

const Form = ({ disabled = false }) => {
  const styles = stylesFn();
  const { params } = useRoute();
  const { id } = params;
  const { fields, setFormField } = useUpdateFields();
  const { firstName, lastName, region, active } = useSelector(
    (state) => state.customers.form.fields
  );

  const [isActive, setIsActive] = useState(active);
  const toggleSwitch = () => setIsActive((previousState) => !previousState);
  const handleSwitch = () => {
    toggleSwitch();
    setFormField('active', !isActive);
  };
  const { regions } = useSelector((state) => state.regions);
  console.log('REGIONS OPTIONS: ', regions);
  const storeNow = useSelector((state) => state);
  console.log(
    'customerID to edit: ',
    id,
    'PARAMS: ',
    params,
    'Store: ',
    storeNow
  );
  const { onSubmit } = useEditCustomer({ id });
  return (
    <View style={styles.container}>
      <Text style={styles.h2}>Customer ID: {id}</Text>
      <TextInput
        key={'firstName'}
        placeholder={firstName}
        value={firstName || ''}
        style={styles.form}
        onChangeText={(v) => setFormField('firstName', v)}
      />
      <TextInput
        key={'lastName'}
        placeholder={lastName}
        value={lastName || ''}
        style={styles.form}
        onChangeText={(v) => setFormField('lastName', v)}
      />
      <Picker
        style={Object.assign({}, styles.form, styles.formPicker)}
        selectedValue={region}
        onValueChange={(v) => setFormField('region', v)}
      >
        {regions.map((region) => (
          <Picker.Item key={region} label={region} value={region} />
        ))}
      </Picker>
      <View>
        <Text>Active: </Text>
      </View>
      <Switch
        trackColor={{ false: '#767577', true: '#ebf6ff' }}
        thumbColor={isActive ? '#767577' : '#f4f3f4'}
        ios_backgroundColor='#3e3e3e'
        onValueChange={handleSwitch}
        value={isActive}
      ></Switch>
      {/* <TextInput
        key={'region'}
        placeholder={region}
        value={region || ''}
        style={styles.form}
        onChangeText={(v) => setFormField('region', v)}
      /> */}
      <TouchableOpacity
        style={Object.assign({}, styles.buttons, styles.buttonCreate)}
        onPress={onSubmit}
      >
        <Text style={styles.textButton}>Submit</Text>
      </TouchableOpacity>

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
