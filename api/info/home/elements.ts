import {PostInfo} from '../../post/base/elements/common';
import {PostType} from '../../post/types';
import {GAPeriodicCountryUserData, GAPeriodicLangUserData} from '../stats/elements';


export type PostInfoEntry = {
  title: string,
  type: PostType,
  pid: number,
  info: PostInfo,
};

export type HomepageData = {
  posts: {[type in PostType]: PostInfoEntry[]},
  stats: {
    user: {
      perCountry: GAPeriodicCountryUserData,
      perLang: GAPeriodicLangUserData,
    },
    lastFetchedEpoch: number,
  },
};
