module.exports = () => {
  const birthdayStart = (new Date(1971, 0, 1)).getTime();
  const anniversaryStart = (new Date(2010, 0, 1)).getTime();
  const twentyYearsInMs = 20 * 365 * 24 * 60 * 60 * 1000;

  const birthday = birthdayStart + Math.floor(Math.random() * twentyYearsInMs);
  const anniversary = anniversaryStart + Math.floor(Math.random() * (Date.now() - anniversaryStart));

  return {
    birthday,
    anniversary,
  };
};
