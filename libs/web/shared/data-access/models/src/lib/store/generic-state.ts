import { Nullable } from '../core';

export type GenericStoreStatus = 'pending' | 'loading' | 'success' | 'error';

export interface GenericState<T> {
  data: Nullable<T>;
  status: GenericStoreStatus;
  error: Nullable<string>;
}
