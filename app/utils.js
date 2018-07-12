export default {};
export const formatCurrency = (number, separator = ',') =>
  `${number}`
    .replace(/\..*$/, '')
    .split('')
    .reverse()
    .map((it, index) => (index > 0 && index % 3 === 0 ? `${it}${separator}` : it))
    .reverse()
    .concat(`${number}`.includes('.') ? [`.${number}`.substr(`${number}`.lastIndexOf('.') + 1)] : [])
    .join('');
