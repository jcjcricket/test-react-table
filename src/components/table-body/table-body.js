import React from 'react';

import { TR, TD, TDDescDiv, TBody } from './elements';

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
              <p><i>Street Address:</i> {i.adress.streetAddress}</p>
              <p><i>City:</i> {i.adress.city}</p>
              <p><i>State:</i> {i.adress.state}</p>
              <p><i>Zip-Code:</i> {i.adress.zip}</p>
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
