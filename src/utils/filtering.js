export const filterBy = (data, string) => {
  const regexp = new RegExp(`${string}`, 'gm');

  return data.filter((i) => {
    return (
      regexp.test(i.id + '') ||
      regexp.test(i.firstName) ||
      regexp.test(i.lastName) ||
      regexp.test(i.email) ||
      regexp.test(i.phone) ||
      regexp.test(i.adress.streetAddress) ||
      regexp.test(i.adress.city) ||
      regexp.test(i.adress.state) ||
      regexp.test(i.adress.zip) ||
      regexp.test(i.description)
    );
  });
};
