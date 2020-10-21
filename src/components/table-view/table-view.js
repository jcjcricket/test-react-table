import React from 'react';

import {
  Table,
  TableHead,
  TableHeader,
  TableBody,
  TableRow,
  TableDef,
  TableDefDescDiv,
} from './elements';

const TableView = ({ data }) => {
  const rData = data.map((i) => {
    return (
      <TableRow key={i.id}>
        <TableDef>{i.id}</TableDef>
        <TableDef>{i.firstName}</TableDef>
        <TableDef>{i.lastName}</TableDef>
        <TableDef>{i.email}</TableDef>
        <TableDef>{i.phone}</TableDef>
        <TableDef>
          {
            <>
              <p>Street Address: {i.adress.streetAddress}</p>
              <p>City: {i.adress.city}</p>
              <p>State: {i.adress.state}</p>
              <p>Zip-Code: {i.adress.zip}</p>
            </>
          }
        </TableDef>
        <TableDef>
          <TableDefDescDiv>{i.description}</TableDefDescDiv>
        </TableDef>
      </TableRow>
    );
  });

  return (
    <Table>
      <TableHead>
        <TableRow>
          <TableHeader>#ID</TableHeader>
          <TableHeader>First Name</TableHeader>
          <TableHeader>Last Name</TableHeader>
          <TableHeader>E-Mail</TableHeader>
          <TableHeader>Phone</TableHeader>
          <TableHeader>Address</TableHeader>
          <TableHeader>Description</TableHeader>
        </TableRow>
      </TableHead>
      <TableBody>{rData}</TableBody>
    </Table>
  );
};

export default TableView;
