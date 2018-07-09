export default {};
export const formatCurrency = (number, separator = ',') =>
  `${number}`
    .split('')
    .reverse()
    .map((it, index) => (index > 0 && index % 3 === 0 ? `${it}${separator}` : it))
    .reverse()
    .join('');
