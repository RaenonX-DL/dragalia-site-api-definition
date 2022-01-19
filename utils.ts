export const isProduction = () => {
  return process.env.NODE_ENV === 'production';
};

export const isCi = (): boolean => {
  const ciString = process.env.CI;

  if (!ciString) {
    return false;
  }

  if (ciString === '1' || ciString.toLowerCase() === 'true') {
    return true;
  }

  if (ciString === '0' || ciString.toLowerCase() === 'false') {
    return false;
  }

  throw Error(`Environment variable \`CI\` must be defined as either 0, 1, true, false. However, it is ${ciString}`);
};
