export const camelToProper = (input: string) => {
  const separated = input.replace(/([A-Z])/g, ' $1');
  return separated.charAt(0).toUpperCase() + separated.slice(1);
};
