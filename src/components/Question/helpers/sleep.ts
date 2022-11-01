export const sleep = (time: number) => new Promise(resolve => {
  const sleepTimeout = setTimeout(() => {
    resolve(time);
    clearTimeout(sleepTimeout);
  }, time);
});
