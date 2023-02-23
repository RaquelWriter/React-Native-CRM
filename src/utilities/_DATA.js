// South West, North West, South East, North East, Mid West
export let customers = [];

/* export let customers = [
  {
    id: 'f8c1b5fb-cc3e-4cb8-b562-aa0b8cdcec7b',
    firstName: 'Adam',
    lastName: 'Sandler',
    active: true,
    region: 'South West',
  },
  {
    id: 'da7e6aac-58d8-473f-8f7f-841a709974f8',
    firstName: 'John',
    lastName: 'Cusack',
    active: false,
    region: 'North West',
  },
]; */

export let regions = [
  'South West',
  'North West',
  'South East',
  'North East',
  'Mid West',
];

export const fetchRegionsData = async () => {
  return Promise.resolve(regions);
};
export const fetchCustomersData = async () => {
  return Promise.resolve(customers);
};
