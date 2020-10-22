export const fetchDataSuccess = () => (dispatch) => {
  const _apiBase =
    'http://www.filltext.com/?rows=100&id={number|1000}&firstName={firstName}&lastName={lastName}&email={email}&phone={phone|(xxx)xxx-xx-xx}&adress={addressObject}&description={lorem|32}';

fetch(_apiBase)
    .then((res) => res.json())
    .then((data) =>
      dispatch({
        type: 'FETCH_DATA_SUCCESS',
        payload: data,
      })
    );
};

export const fetching = () => {
  return {
    type: 'FETCH_DATA_REQUESTED'
  }
}

export const setCurrentPage = (num) => {
  return {
    type: 'SET_CURRENT_PAGE',
    payload: num
  }
}

