const initState = {
  peopleInfo: [],
  isLoading: false,
  hasError: false,
  currentPage: 1,
  maxPerPage: 10,
};

const dataReducer = (state = initState, action) => {
  switch (action.type) {
    case 'FETCH_DATA_SUCCESS':
      return {
        ...state,
        peopleInfo: action.payload,
        isLoading: false,
        hasError: false,
      };
    case 'FETCH_DATA_REQUESTED':
      return {
        ...state,
        isLoading: true,
      };
    default:
      return state;
    case 'SET_CURRENT_PAGE':
      return {
        ...state,
        currentPage: action.payload,
      };
  }
};

export default dataReducer;
