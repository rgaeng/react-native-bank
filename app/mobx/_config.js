export const REQUEST_STATES = ['IDLE', 'REQUESTING', 'DONE', 'FAIL'].reduce(
  (prev, it, index) => ({
    ...prev,
    [index]: it,
  }),
  {}
);

// export const RC_API_ENDPOINT = 'https://localhost:5000';
export const RC_API_ENDPOINT = 'https://revonzo-backend.herokuapp.com';

export default null;
