import React from 'react';

import { THead, TH, TR } from './elements';

const TableHeader = ({ sortTableBy }) => {
  return (
    <THead>
      <TR onClick={(e) => sortTableBy(e.target.dataset.key)}>
        <TH data-key='id'>ID</TH>
        <TH data-key='firstName'>FIRST NAME</TH>
        <TH data-key='lastName'>LAST NAME</TH>
        <TH>EMAIL</TH>
        <TH>PHONE</TH>
        <TH>ADDRESS</TH>
        <TH>DESCRITION</TH>
      </TR>
    </THead>
  );
};

export default TableHeader;
