const initState = {
  data: [],
  isLoading: false,
  has: false,
};

const dataReducer = (state = initState, action) => {
  switch (action.type) {
    case 'FETCH_DATA_SUCCESS':
      return {
        ...state,
        data: action.payload,
        isLoading: false,
        hasError: false,
      };
    default:
      return state;
  }
};

export default dataReducer;
