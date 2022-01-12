export enum SupportedLanguages {
  CHT = 'cht',
  EN = 'en',
  JP = 'jp',
}

export enum PartiallySupportedLanguages {
  CHS = 'chs',
}

export type AllPossibleLanguages = SupportedLanguages | PartiallySupportedLanguages;

export const SupportedLanguageNames: {[lang in SupportedLanguages]: string} = {
  [SupportedLanguages.CHT]: 'CHT - 繁體中文',
  [SupportedLanguages.EN]: 'EN - English',
  [SupportedLanguages.JP]: 'JP - 日本語',
};

export const isSupportedLang = (lang: string): lang is SupportedLanguages => {
  return Object.values(SupportedLanguages).some((supported) => supported === lang);
};

export const DEFAULT_LANG = SupportedLanguages.CHT;
