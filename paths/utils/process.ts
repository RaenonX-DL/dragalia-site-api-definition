import {ParsedUrlQuery} from 'querystring';

import {DEFAULT_LANG, isSupportedLang, SupportedLanguages} from '../../api/other/lang';
import {PATH_ROOT} from '../const/definitions';


export const makeLangUrl = (url: string, lang: SupportedLanguages) => `/${lang}${urlRemoveLang(url)}`;

export const urlRemoveLang = (url: string) => {
  for (const lang of Object.values(SupportedLanguages)) {
    const urlPrefix = `/${lang}`;

    if (!url.startsWith(urlPrefix)) {
      continue;
    }

    url = url.substr(urlPrefix.length);
    break;
  }

  if (!url) {
    return '/';
  }

  return url;
};

export const pathnameRemoveLang = (pathname: string) => {
  pathname = pathname.replace(PATH_ROOT, '');

  if (!pathname) {
    return '/';
  }

  return pathname;
};

export const mergePlaceholders = (pathname: string, query: ParsedUrlQuery) => {
  Object.entries(query).forEach(([placeholder, value]) => {
    if (typeof value === 'string') {
      pathname = pathname.replace(`[${placeholder}]`, value);
    }
  });
  return pathname;
};

export const getLangFromQuery = (query: ParsedUrlQuery): SupportedLanguages => {
  const lang = query.lang;

  if (lang && typeof lang === 'string' && isSupportedLang(lang)) {
    return lang;
  }

  return DEFAULT_LANG;
};
