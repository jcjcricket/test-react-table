// function sortA(data, key) {
//   return data.sort((a, b) => a[key] - b[key]);
// }

// function sortD(data, key) {
//   return data.sort((a, b) => b[key] - a[key]);
// }

export const sortPeopleInfo = (data, key) => {
  switch (key) {
    case 'id':
      return data.sort((a, b) => a[key] - b[key]);

    default:
      return data;
  }
};
