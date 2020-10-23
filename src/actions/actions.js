export const requestData = () => {
  return {
    type: 'FETCH_DATA_REQUESTED',
  };
};

export const fetchDataSuccess = () => (dispatch) => {
  dispatch(requestData());

  fetch(
    'http://www.filltext.com/?rows=100&id={number|1000}&firstName={firstName}&lastName={lastName}&email={email}&phone={phone|(xxx)xxx-xx-xx}&adress={addressObject}&description={lorem|32}'
  )
    .then((response) => response.json())
    .then((data) =>
      dispatch({
        type: 'FETCH_DATA_SUCCESS',
        payload: data,
      })
    );
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
