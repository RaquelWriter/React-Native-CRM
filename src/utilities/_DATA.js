// South West, North West, South East, North East, Mid West
export let customers = [
  {
    id: 'g6oz6jb22y9o51bxwglrzm',
    firstName: 'Adam',
    lastName: 'Sandler',
    active: true,
    region: 'South West',
  },
  {
    id: '3ma6n82xkkxy5d1wlprjw',
    firstName: 'John',
    lastName: 'Cusack',
    active: false,
    region: 'North West',
  },
];

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
