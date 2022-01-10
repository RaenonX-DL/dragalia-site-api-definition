export type GALangUserOfDate = {
  date: string,
  user: Record<string, number>,
};

export type GAPeriodicLangUserData = {
  data: GALangUserOfDate[],
  toppedLang: string[],
};
