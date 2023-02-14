// South West, North West, South East, North East, Mid West
export let customers = [
  {
    id: '5c9qojr2d1738zlx09afby',
    firstName: 'Adam',
    lastName: 'Sandler',
    active: 'true',
    region: 'South West',
  },
  {
    id: 'f4xzgapq7mu783k9t02ghx',
    firstName: 'John',
    lastName: 'Cusack',
    active: 'false',
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
