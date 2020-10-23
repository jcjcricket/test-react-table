export const filterBy = (data, string) => {
  if (string !== '') {
    return data.filter((i) => {
      return (
        i.id                   	=== string      ||
        i.firstName             === string      ||
        i.secondName            === string      ||
        i.email                 === string      ||
        i.phone                 === string      ||
        i.adress.streetAddress  === string      ||
        i.adress.city           === string      ||
        i.adress.state          === string      ||
        i.adress.zip            === string      ||
        i.description           === string
      );
    });
  }
  return data
};
