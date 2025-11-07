import * as dotenv from 'dotenv';
dotenv.config({ path: '.env' });

import { randomUUID } from 'crypto';

if (!(global as any).crypto) {
  (global as any).crypto = {};
}

if (typeof (global as any).crypto.randomUUID !== 'function') {
  (global as any).crypto.randomUUID = randomUUID;
}

import('./boostrap').then(({ bootstrap }) => {
  bootstrap();
});
