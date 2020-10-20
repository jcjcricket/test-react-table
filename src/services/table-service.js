class TableService {
  _apiBase =
    'http://www.filltext.com/?rows=100&id={number|1000}&firstName={firstName}&lastName={lastName}&email={email}&phone={phone|(xxx)xxx-xx-xx}&adress={addressObject}&description={lorem|32}';

  getData = async () => {
    const res = await fetch(this._apiBase);
    if (!res.ok) {
      throw new Error(
        `Could not fetch ${_apiBase}, received ${res.status}`
      );
    }
    return await res.json();
  };
}

export default TableService;
