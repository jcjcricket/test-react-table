import React from 'react';

import { TableRow, TableDef } from './elements';

const TableItem = (props) => {
  return (
    <TableRow>
      <TableDef label='label'>{props.id}</TableDef>
      <TableDef label='label'>{props.firstName}</TableDef>
      <TableDef label='label'>{props.lastName}</TableDef>
      <TableDef label='label'>{props.email}</TableDef>
      <TableDef label='label'>{props.phone}</TableDef>
      <TableDef label='label'>{props.address}</TableDef>
      <TableDef label='label'>{props.description}</TableDef>
    </TableRow>
  );
};

// {
//   id: 162,
//   firstName: "Gabriela",
//   lastName: "Crompton",
//   email: "NRehnke@pharetra.org",
//   phone: "(658)834-8561",
//   adress: {
//   streetAddress: "5589 Tortor St",
//   city: "South Bend",
//   state: "AK",
//   zip: "45071"
//   },
//   description: "sapien sit hendrerit augue ipsum massa lacus et placerat mattis vestibulum ac orci magna elementum aliquam lacus vestibulum convallis et aenean suspendisse sit hendrerit neque tempor lectus etiam augue sollicitudin non tempor"
//   },

export default TableItem;
