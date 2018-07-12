const debug = require('debug');

const log = debug('log:db:init');

const { makeUser, makeAccount, makeTransaction } = require('./generators');

const users = 2;
const accountsPerUser = 7;
const transactionsPerSpendingAccount = 4;

const generateAccountsForUser = (userId, lastAccountId) => {
  const accounts = [];
  for (let i = accountsPerUser; i > 0; i -= 1) {
    const account = makeAccount(lastAccountId ? lastAccountId + i : null, userId);
    accounts.push(account);
    log('Generated account %d (%d) for user %d', i, lastAccountId, userId);
  }
  return accounts;
};

const generateTransactionsForUserSpendingAccounts = (userId, accounts, lastTransactionId) => {
  const transactions = [];
  const spendingAccounts = accounts.filter(({ type }) => type === 'spending');
  spendingAccounts.forEach(({ id: accountId, userId }, index) => {
    for (let i = transactionsPerSpendingAccount; i > 0; i -= 1) {
      transactions.push(
        makeTransaction(
          lastTransactionId ? lastTransactionId + i + transactionsPerSpendingAccount * index : null,
          accountId,
          userId
        )
      );
    }
  });

  return transactions;
};

const initialGenerator = () => {
  const data = {
    users: [],
    accounts: [],
    transactions: [],
  };

  let lastAccountId = 1;
  const lastTransactionId = 1;

  for (let id = users; id > 0; id -= 1) {
    data.users.push(makeUser(id));
    log('Created user %d, now generating accounts', id);
    const accounts = generateAccountsForUser(id, lastAccountId);
    data.accounts = [...data.accounts, ...accounts];

    log('Generated all accounts for user %d, now creating transactions for all spending accounts', id);

    const transactions = generateTransactionsForUserSpendingAccounts(id, accounts, lastTransactionId);
    data.transactions = [...data.transactions, ...transactions];

    lastAccountId += accountsPerUser;
  }

  return data;
};

module.exports = {
  initialGenerator,
  users,
  accountsPerUser,
  transactionsPerSpendingAccount,
  generateAccountsForUser,
  generateTransactionsForUserSpendingAccounts,
};
