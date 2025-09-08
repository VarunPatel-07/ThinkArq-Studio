export const classNames = (defaultClass: string, conditionBasedClass: { [keys: string]: boolean }) => {
  return `${defaultClass} ${Object.keys(conditionBasedClass)
    .filter((key) => conditionBasedClass[key])
    .join(" ")}`;
};

export const IsOdd = (num: number) => num % 2 !== 0;
