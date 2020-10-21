import React, { Component } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { connect } from 'react-redux';

import TableView from '../table-view';
import fetchDataAsync from '../../actions/actions';

class TableContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: [],
      isLoading: false,
      hasError: false,
      currentPage: 1,
      maxPerPage: 10,
    };
  }

  componentDidMount() {
    this.props.fetchDataAsync();
  }

  render() {
    const { data } = this.props.data;

    return (
      <div>
        <TableView data={data} />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    data: state.data,
    isLoading: state.data,
    isError: state.data,
  };
};

export default connect(mapStateToProps, { fetchDataAsync })(TableContainer);
