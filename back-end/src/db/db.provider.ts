
import * as mongoose from 'mongoose';

export const DB_CONNECTION = 'DB_CONNECTION';

export const databaseProviders = [
  {
    provide: DB_CONNECTION,
    useFactory: (): Promise<typeof mongoose> =>
      mongoose.connect('mongodb://root:root@db-service:27017/uni-db'),
  },
];

