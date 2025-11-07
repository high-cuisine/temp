import * as dotenv from 'dotenv';
dotenv.config({ path: '.env' });

import('./boostrap').then(({ bootstrap }) => {
  bootstrap();
});
