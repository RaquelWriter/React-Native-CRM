import { createSlice } from '@reduxjs/toolkit';
import { PENDING, REQUESTING, SUCCESS, ERROR } from '../../utilities/helpers';

// The slice has 4 elements:
// createSlice({name, initialState, reducers})

const initialState = {
  regions: [],
  customers: [],
  loading: false,
  form: {
    fields: {
      id: '',
      firstName: '',
      lastName: '',
      active: '',
      region: '',
    },
  },
  create: {
    status: PENDING,
  },
  edit: {
    status: PENDING,
  },
  error: {
    message: '',
  },
};

const customersSlice = createSlice({
  name: 'customers',
  initialState,
  reducers: {
    loadCustomers: (state) => {
      state.loading = true;
    },
    loadResult: (state, action) => {
      state.customers = action.payload;
      state.loading = false;
    },
    createCustomer: (state) => {
      state.create.status = REQUESTING;
    },
    createCustomerResult: (state, { payload }) => {
      state.customers = payload;
      state.create.status = SUCCESS;
    },
    createCustomerError: (state, { payload }) => {
      state.create.status = ERROR;
    },
    createCustomerReset: (state) => {
      state.create = initialState.create;
    },
    editCustomer: (state, { payload }) => {
      state.edit.status = REQUESTING;
    },
    editCustomerResult: (state, { payload }) => {
      state.edit.status = SUCCESS;
      state.customers = payload;
    },
    editCustomerError: (state) => {
      state.edit.status = ERROR;
      state.error.message = payload;
    },
    editCustomerReset: (state) => {
      state.edit = initialState.edit;
    },
    setFormField: (state, { payload }) => {
      const current = state.form.fields;
      const { field, value } = payload;

      const fields = {
        ...current,
        [field]: value,
      };
      state.form.fields = fields;
    },
    updateFields: (state, { payload }) => {
      /*       const current = state.form.fields;
      const { id, firstName, lastName, region } = payload;
      const fields = {
        ...current,
        [id]: id,
        [firstName]: firstName,
        [lastName]: lastName,
        [region]: region,
      }; */
      console.log('DENTRO DEL REDUCER updateFields, payload: ', payload);
      state.form.fields = payload;
    },
  },
});

export const {
  loadCustomers,
  loadResult,
  createCustomer,
  createCustomerResult,
  createCustomerError,
  createCustomerReset,
  editCustomer,
  editCustomerResult,
  editCustomerError,
  editCustomerReset,
  setFormField,
  updateFields,
} = customersSlice.actions;

export default customersSlice.reducer;

/* 
import { useSelector } from 'react-redux';

function MyComponent() {
  // Access the form state using the useSelector hook
  const { id, firstName, lastName, active, region } = useSelector(
    (state) => state.customers.form.fields
  );

  // Render the component using the form state
  return (
    <form>
      <input
        type='text'
        value={id}
        onChange={(e) =>
          dispatch(setFormField({ field: 'id', value: e.target.value }))
        }
      />
      <input
        type='text'
        value={firstName}
        onChange={(e) =>
          dispatch(setFormField({ field: 'firstName', value: e.target.value }))
        }
      />
      <input
        type='text'
        value={lastName}
        onChange={(e) =>
          dispatch(setFormField({ field: 'lastName', value: e.target.value }))
        }
      />
      <input
        type='checkbox'
        checked={active}
        onChange={(e) =>
          dispatch(setFormField({ field: 'active', value: e.target.checked }))
        }
      />
      <select
        value={region}
        onChange={(e) =>
          dispatch(setFormField({ field: 'region', value: e.target.value }))
        }
      >
        <option value='north'>North</option>
        <option value='south'>South</option>
        <option value='east'>East</option>
        <option value='west'>West</option>
      </select>
    </form>
  );
}
 */
