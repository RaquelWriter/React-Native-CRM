import { useDispatch, useSelector } from 'react-redux';
import * as actions from './reducers';

export const useUpdateFields = () => {
  const dispatch = useDispatch();
  const fields = useSelector((state) => state.customers.form.fields);
  return {
    fields,
    setFormField: (field, value) => {
      console.log(`Updating field ${field} to ${value}`);
      return dispatch(actions.setFormField({ field, value }));
    },
  };
};

export const useNewCustomer = () => {
  const dispatch = useDispatch();

  return {
    onSubmit: () => {
      console.log('Dispatching CREATE_NEW action');
      dispatch(actions.createCustomer());
    },
  };
};

export const useEditCustomer = (customerID) => {
  const dispatch = useDispatch();

  return {
    onSubmit: () => {
      console.log('Dispatching EDIT_CUSTOMER action');
      dispatch(actions.editCustomer(customerID));
    },
  };
};
// TODO
export const useResetForm = () => {};
/* export const useListAnimals = () => {
  return useSelector((state) => state.animal.list.animals);
}; */
