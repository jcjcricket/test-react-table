import React from 'react';
import styled from 'styled-components';

import TableItem from '../table-item';

import './table-view.css';

const Table = styled.table`
  border: 1px solid #ccc;
  border-collapse: collapse;
  margin: 0;
  padding: 0;
  width: 100%;
  table-layout: fixed;
  @media screen and (max-width: 600px) {
    border: 0;
  }
`;

const TableHead = styled.thead`
  @media screen and (max-width: 600px) {
    border: none;
    clip: rect(0 0 0 0);
    height: 1px;
    margin: -1px;
    overflow: hidden;
    padding: 0;
    position: absolute;
    width: 1px;
  }
`;

const TableRow = styled.tr`
  background-color: #f8f8f8;
  border: 1px solid #ddd;
  padding: 0.35em;
  @media screen and (max-width: 600px) {
    border-bottom: 3px solid #ddd;
    display: block;
    margin-bottom: 0.625em;
  }
`;

const TableHeader = styled.th`
  border: 1px solid #999;
  padding: 0.625em;
  text-align: center;
  vertical-align: middle;
  font-size: 0.85em;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  word-break: break-word;
  
`;

const TableDef = styled.td`
  border: 1px solid #999;
  padding: 0.625em;
  text-align: center;
  word-break: break-word;
  @media screen and (max-width: 600px) {
    border-bottom: 1px solid #ddd;
    display: block;
    font-size: 0.8em;
    text-align: right;

    &::before {
      content: '${props => props.label}';
      float: left;
      font-weight: bold;
      text-transform: uppercase;
    }
  }
`;

const TableBody = styled.tbody``;

const TableView = (props) => {
  return (
    <Table>
      <TableHead>
        <TableRow>
          <>#ID</>
          <TableHeader >First Name</TableHeader>
          <TableHeader >Last Name</TableHeader>
          <TableHeader >E-Mail</TableHeader>
          <TableHeader >Phone</TableHeader>
          <TableHeader >Address</TableHeader>
          <TableHeader >Description</TableHeader>
        </TableRow>
      </TableHead>
      <TableBody>
        <TableRow>
          <TableDef label='label'>162</TableDef>
          <TableDef label='label'>Gabriela</TableDef>
          <TableDef label='label'>Crompton</TableDef>
          <TableDef label='label'>NRehnke@pharetra.org</TableDef>
          <TableDef label='label'>(658)834-8561</TableDef>
          <TableDef label='label'>
            streetAddress: "5589 Tortor St", city: "South Bend", state: "AK",
            zip: "45071"
          </TableDef>
          <TableDef label='label'>
            sapien sit hendrerit augue ipsum massa lacus et placerat mattis
            vestibulum ac orci magna elementum aliquam lacus vestibulum
            convallis et aenean suspendisse sit hendrerit neque tempor lectus
            etiam augue sollicitudin non tempor
          </TableDef>
        </TableRow>
      </TableBody>
    </Table>
  );
};

export default TableView;
