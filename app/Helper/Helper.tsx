export const classNames = (defaultClass: string, conditionBasedClass: { [keys: string]: boolean }) => {
  return `${defaultClass} ${Object.keys(conditionBasedClass)
    .filter((key) => conditionBasedClass[key])
    .join(" ")}`;
};

export const IsOdd = (num: number) => num % 2 !== 0;


export function getServiceBg(index: number) {
  const pattern = index % 4; // cycles 0,1,2,3
  if (pattern === 0 || pattern === 3) return true;
  return false;
}
