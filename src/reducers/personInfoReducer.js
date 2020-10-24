const initState = {
  personId: '',
};

const personInfoReducer = (state = initState, action) => {
  switch (action.type) {
    case 'SET_PERSON_ID':
      return {
        personId: action.payload,
      };
    default:
      return state;
  }
};

export default personInfoReducer;
