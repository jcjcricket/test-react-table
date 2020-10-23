import { combineReducers } from 'redux';

import dataReducer from './dataReducer';

const reducer = combineReducers({
  data: dataReducer,
  sort: sortReducer,
  filter: filterReducer,
});

export default reducer;
