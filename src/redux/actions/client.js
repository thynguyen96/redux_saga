import { createRequestTypes } from './utils';

export const SEND_REQUEST = createRequestTypes('SEND_REQUEST');

export const sendRequest = () => ({
  type: HISTORY.REQUEST
});