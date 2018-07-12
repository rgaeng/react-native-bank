import { DEBUG, NODE_ENV } from 'react-native-dotenv';

import debug from 'debug';

let level;
if (DEBUG) {
  level = DEBUG;
} else if (NODE_ENV === 'production') {
  level = '-*';
} else {
  level = 'log:*,error:*';
}
debug.enable(level);

debug('log:debug')('Logging Enabled');
debug('error:debug')('Error logging enabled');
debug('debug:debug')('Debug logging enabled');
