import { createSlice } from '@reduxjs/toolkit';

// The slice has 4 elements:
// createSlice({name, initialState, reducers})

const customersSlice = createSlice({
  name: 'customers',
  initialState: {
    customers: [],
    loading: false,
    form: {
      fields: {
        id: null,
        firstName: null,
        lastName: null,
        active: null,
        region: null,
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
  },
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
      state.list.animals = payload;
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
} = customersSlice.actions;

export default customersSlice.reducer;
