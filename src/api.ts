import { createApi } from '@smithjke/2p-core/api';
import * as Auth from './auth';
import * as Session from './session';
import * as User from './user';

export const publicAPI = createApi({
  auth: new Auth.ClientService('/auth'),
});

export const API = createApi({
  session: new Session.ClientService('/session'),
  user: new User.ClientService('/user'),
});
