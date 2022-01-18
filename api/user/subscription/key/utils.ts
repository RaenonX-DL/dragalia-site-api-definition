import _ from 'lodash';

import {SubscriptionKey} from './type';


export const subKeysInclude = (keys: SubscriptionKey[], target: SubscriptionKey) => {
  return keys.some((key) => _.isEqual(key, target));
};
