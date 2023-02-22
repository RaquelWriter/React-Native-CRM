import React from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useRoute } from '@react-navigation/native';
import Row from './Row';
import * as actions from '../../reducers';
import { View, Text, FlatList } from 'react-native';
import stylesFn from '../../../../components/styles';
import ButtonAddCustomer from '../../../../components/ButtonAddCustomer';

const ListByRegion = () => {
  const { params } = useRoute();
  const { region } = params;
  if (!region) return null;
  console.log('REGION: ', region);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(actions.loadCustomers());
  }, [dispatch]);

  const customers = useSelector((state) => {
    console.log('DENTRO DE SELECTOR: ', state.customers.customers);
    return state.customers.customers;
  });
  console.log('Customers data Fuera DE SELECTOR: ', customers);
  const filteredCustomers = customers.filter(
    (customer) => customer.region === region
  );

  console.log('FILTERED CUSTOMERS: ', filteredCustomers);
  const onSubmit = () => {
    // TODO
  };
  const styles = stylesFn();
  return (
    <View style={styles.container}>
      <Text style={styles.h1}>{region} customers</Text>
      {filteredCustomers.length > 0 ? (
        <Text style={styles.h2}>Touch box to edit</Text>
      ) : null}
      {filteredCustomers.length > 0 ? (
        <FlatList
          data={filteredCustomers}
          renderItem={(item) => <Row {...item} />}
          keyExtractor={(item) => item.id}
        />
      ) : (
        <>
          <Text style={styles.h1}>No Customers</Text>
        </>
      )}
      <ButtonAddCustomer />
    </View>
  );
};

export default ListByRegion;
