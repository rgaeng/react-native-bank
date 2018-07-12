export const REQUEST_STATES = ['IDLE', 'REQUESTING', 'DONE', 'FAIL'].reduce(
  (prev, it, index) => ({
    ...prev,
    [index]: it,
  }),
  {}
);

export default null;
