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

export const useNewCustomer = (customerID) => {
  const dispatch = useDispatch();

  return {
    onSubmit: () => {
      console.log('Dispatching NEW_CUSTOMER action');
      dispatch(actions.createCustomer(customerID));
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
