export const createCounter = (startingValue = 0) => {
    let value = startingValue;
    return () => value++;
};
