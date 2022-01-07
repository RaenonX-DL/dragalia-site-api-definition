export type GACountryUserEntry = {
  user: number,
  country: string,
};

export type GACountryUserData = {
  countries: GACountryUserEntry[],
  total: number,
};

export const GAPeriod = {
  D1: 1,
  D7: 7,
  D30: 30,
};

export type GAPeriodKey = keyof typeof GAPeriod;

export type GAPeriodicCountryUserData = {[period in GAPeriodKey]: GACountryUserData};

export type GALangUserOfDate = {
  date: string,
  user: Record<string, number>,
};

export type GAPeriodicLangUserData = {
  data: GALangUserOfDate[],
  toppedLang: string[],
};
