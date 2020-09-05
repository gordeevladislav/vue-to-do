export const getRandomInt = (a = 0, b = 0) => {
  const lower = Math.ceil(Math.min(a, b));
  const upper = Math.floor(Math.max(a, b));

  return Math.floor(lower + Math.random() * (upper - lower + 1));
};

export const getRandomArrayElement = (array) => {
  const randomIndex = getRandomInt(0, array.length - 1);
  return array[randomIndex];
};

export const filterTypes = {
  ALL: 'all',
  COMPLETED: 'completed',
  ACTIVE: 'active'
};