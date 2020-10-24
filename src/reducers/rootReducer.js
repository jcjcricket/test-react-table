import { combineReducers } from 'redux';

import dataReducer from './dataReducer';
import personInfoReducer from './personInfoReducer'

const reducer = combineReducers({
  data: dataReducer,
  personId: personInfoReducer
});

export default reducer;
