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
      active: false,
      region: 'South West',
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
    createCustomer: (state, { payload }) => {
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
      state.customers = payload;
      state.edit.status = SUCCESS;
    },
    editCustomerError: (state, { payload }) => {
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
    // updateFields called when user click on a customer for editing in Edit
    updateFields: (state, { payload }) => {
      console.log('DENTRO DEL REDUCER updateFields, payload: ', payload);
      state.form.fields = payload;
    },
    resetForm: (state) => {
      state.form.fields = initialState.form.fields;
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
  resetForm,
} = customersSlice.actions;

export default customersSlice.reducer;
