export const GAActivePeriod = {
  D1: 1,
  D7: 7,
  D28: 28,
};

export type GAActivePeriodKey = keyof typeof GAActivePeriod;

export type GAActiveEntry = {[key in GAActivePeriodKey]: number} & {
  date: string,
};

export type GAPeriodicActiveUserData = {
  data: GAActiveEntry[],
};
