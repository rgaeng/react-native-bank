const debug = require('debug');

const log = debug('log:db:middleware');
const { generateAccountsForUser, generateTransactionsForUserSpendingAccounts } = require('./db');

module.exports = db => [
  (req, res, next) => {
    if (req.url === '/users') {
      const user = db
        .get('users')
        .insert(req.body)
        .write();
      log('Generating accounts for user %d', user.id);
      const accounts = generateAccountsForUser(user.id);
      accounts.forEach(account =>
        db
          .get('accounts')
          .insert(account)
          .write()
      );
      log('Generating transactions for user %d', user.id);
      const transactions = generateTransactionsForUserSpendingAccounts(user.id, accounts);
      transactions.forEach(transaction =>
        db
          .get('transactions')
          .insert(transaction)
          .write()
      );
      res.json(user);
    } else next();
  },
];
