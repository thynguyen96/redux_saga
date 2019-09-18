import { createRequestTypes } from './utils';

export const HISTORY = createRequestTypes('HISTORY');
export const DELETE_HISTORY = createRequestTypes('DELETE_HISTORY');
export const DELETE_ALL_HISTORY = createRequestTypes('DELETE_ALL_HISTORY');

export const getHistories = () => ({
  type: HISTORY.REQUEST
});

export const deleteHistory = (id) => ({
  type: DELETE_HISTORY.REQUEST,
  id
});

export const deleteAllHistory = (ids) => ({
    type: DELETE_ALL_HISTORY.REQUEST,
    ids
  });