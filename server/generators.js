const {
  date: { past },
  name: { findName },
  finance: { accountName, amount, currencyName, currencySymbol },
  helpers: { createTransaction },
  address: { streetAddress, secondaryAddress, county, country, city },
} = require('faker');

const { PENDING, APPROVED, REFUSED } = require('../app/static/constants');

const types = ['savings', 'spending', 'investments'];
const icons = ['coffee', 'spotify', 'amazon', 'gas-station', 'shopping'];
const states = [PENDING, APPROVED, REFUSED];
const getRandom = thing => thing[parseInt(Math.random() * thing.length, 10)];

module.exports = {
  makeUser: id => ({
    ...(id ? { id } : {}),
    name: findName(),
    dateCreated: past(),
  }),

  makeAccount: (id, userId) => ({
    ...(id ? { id } : {}),
    userId,
    name: accountName(),
    total: amount(),
    goal: amount(),
    currency: currencySymbol(),
    currencyName: currencyName(),
    type: getRandom(types),
  }),

  makeTransaction: (id, accountId, userId) => {
    const fakeTransaction = createTransaction();
    return {
      ...(id ? { id } : {}),
      accountId,
      userId,
      title: fakeTransaction.business,
      icon: getRandom(icons),
      state: getRandom(states),
      amount: fakeTransaction.amount,
      subtitle: `${fakeTransaction.date.getHours()}:${fakeTransaction.date.getMinutes()}`,
      address: `${streetAddress()} ${secondaryAddress()}, ${city()}, ${county()}, ${country()}`,
      ...(accountId ? { accountId } : {}),
    };
  },
};
