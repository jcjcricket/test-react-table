export const requestData = () => {
  return {
    type: 'FETCH_DATA_REQUESTED',
  };
};

export const fetchDataSuccess = (data) => {
  requestData();

  return {
    type: 'FETCH_DATA_SUCCESS',
    payload: data,
  };
};

export const setCurrentPage = (num) => {
  return {
    type: 'SET_CURRENT_PAGE',
    payload: num,
  };
};

export const sortTable = (key) => {
  return {
    type: 'TABLE_SORT_TOGGLE',
    payload: key,
  };
};

export const filterTableBy = (key) => {
  return {
    type: 'TABLE_FILTER_BY',
    payload: key,
  };
};
