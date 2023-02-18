// South West, North West, South East, North East, Mid West
export let customers = [
  {
    id: 'e838e5b1-20dc-4d3d-b211-f1c8372a1276',
    firstName: 'Adam',
    lastName: 'Sandler',
    active: 'true',
    region: 'South West',
  },
  {
    id: '02a4e700-4ff1-4c08-aeeb-23e5d3863e34',
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
