export const PENDING = 'PENDING';
export const REQUESTING = 'REQUESTING';
export const SUCCESS = 'SUCCESS';
export const ERROR = 'ERROR';

export function generateUID() {
  console.log('INSIDE GENERATEUID');
  return (
    Math.random().toString(36).substring(2, 15) +
    Math.random().toString(36).substring(2, 15)
  );
}
