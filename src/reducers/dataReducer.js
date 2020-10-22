function sortBy(data, key, direction) {

  switch (direction) {
    case true:
      switch (key) {
        case 'id':
          return data.sort((a, b) => (a[key] > b[key]) ? 1 : -1);
        case 'firstName':
          return data.sort((a, b) => (a[key] > b[key]) ? 1 : -1);
        case 'lastName':
          return data.sort((a, b) => (a[key] > b[key]) ? 1 : -1);
        default:
          return data;
      }
    case false:
      switch (key) {
        case 'id':
          return data.sort((a, b) => (a[key] < b[key]) ? 1 : -1);
        case 'firstName':
          return data.sort((a, b) => (a[key] < b[key]) ? 1 : -1);
        case 'lastName':
          return data.sort((a, b) => (a[key] < b[key]) ? 1 : -1);
        default:
          return data;
      }
    default:
      return data;
  }
}

const initState = {
  peopleInfo: [],
  isLoading: false,
  hasError: false,
  currentPage: 1,
  maxPerPage: 10,
  sortDirectionAsc: true,
};

const dataReducer = (state = initState, action) => {
  switch (action.type) {
    case 'FETCH_DATA_SUCCESS':
      console.log('FETCH_DATA_SUCCESS');

      return {
        ...state,
        peopleInfo: action.payload,
        isLoading: false,
        hasError: false,
      };
    case 'FETCH_DATA_REQUESTED':
      console.log('FETCH_DATA_REQUESTED');
      return {
        ...state,
        isLoading: true,
      };
    case 'SET_CURRENT_PAGE':
      return {
        ...state,
        currentPage: action.payload,
      };
    case 'TABLE_SORT_TOGGLE':
      return {
        ...state,
        peopleInfo: sortBy(
          state.peopleInfo,
          action.payload,
          state.sortDirectionAsc
        ),
        sortDirectionAsc: !state.sortDirectionAsc,
      };
    default:
      return state;
  }
};

export default dataReducer;
