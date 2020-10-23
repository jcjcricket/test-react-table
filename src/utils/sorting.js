export function sortBy(data, key, direction) {
  switch (direction) {
    case true:
      switch (key) {
        case 'id':
          return data.sort((a, b) => (a[key] > b[key] ? 1 : -1));
        case 'firstName':
          return data.sort((a, b) => (a[key] > b[key] ? 1 : -1));
        case 'lastName':
          return data.sort((a, b) => (a[key] > b[key] ? 1 : -1));
        default:
          return data;
      }
    case false:
      switch (key) {
        case 'id':
          return data.sort((a, b) => (a[key] < b[key] ? 1 : -1));
        case 'firstName':
          return data.sort((a, b) => (a[key] < b[key] ? 1 : -1));
        case 'lastName':
          return data.sort((a, b) => (a[key] < b[key] ? 1 : -1));
        default:
          return data;
      }
    default:
      return data;
  }
}
