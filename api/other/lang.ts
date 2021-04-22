export enum SupportedLanguages {
  CHT = 'cht',
  EN = 'en',
  JP = 'jp',
}

export const SupportedLanguageNames: {[lang in SupportedLanguages]: string} = {
  [SupportedLanguages.CHT]: 'CHT - 繁體中文',
  [SupportedLanguages.EN]: 'EN - English',
  [SupportedLanguages.JP]: 'JP - 日本語',
};
