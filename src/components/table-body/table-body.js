import React from 'react';

import { TR, TD, TBody } from './elements';

const TableBody = ({ data, isLoading }) => {
  const _data = data.map((i) => {
    return (
      <TR key={i.id}>
        <TD>{i.id}</TD>
        <TD>{i.firstName}</TD>
        <TD>{i.lastName}</TD>
        <TD>{i.email}</TD>
        <TD>{i.phone}</TD>
        <TD>
          {
            <>
              <span><b>Street Address:</b> {i.adress.streetAddress}  </span>
              <span><b>City:</b> {i.adress.city}  </span>
              <span><b>State:</b> {i.adress.state}  </span>
              <span><b>Zip-Code:</b> {i.adress.zip}  </span>
            </>
          }
        </TD>
        <TD>
          {i.description}
        </TD>
      </TR>
    );
  });

  return <TBody>{ _data}</TBody>;
};

export default TableBody;
