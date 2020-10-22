import React from 'react';

import { THead, TH, TR } from './elements';

const TableHeader = () => {
  return (
    <THead>
      <TR>
        <TH>#ID</TH>
        <TH>First Name</TH>
        <TH>Last Name</TH>
        <TH>E-Mail</TH>
        <TH>Phone</TH>
        <TH>Address</TH>
        <TH>Description</TH>
      </TR>
    </THead>
  );
};

export default TableHeader;
