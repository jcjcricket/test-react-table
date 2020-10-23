import { sortBy } from '../utils/sorting';
import { filterBy } from '../utils/filtering';

const initState = {
  peopleInfo: [],
  isLoading: false,
  hasError: false,
  isSorted: false,
  isFiltered: false,
  currentPage: 1,
  maxPerPage: 10,
  sortDirectionAsc: true,
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
    case 'FETCH_DATA_SUCCESS':
      return {
        ...state,
        peopleInfo: action.payload,
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
    case 'TABLE_FILTER_BY':
      return {
        ...state,
        peopleInfo: filterBy(state.peopleInfo, action.payload),
      };
    default:
      return state;
  }
};

export default dataReducer;
