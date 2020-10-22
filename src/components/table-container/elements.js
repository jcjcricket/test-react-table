import styled from 'styled-components';

export const Table = styled.table`
  border: 1px solid #52575d;
  border-collapse: collapse;
  margin: 0;
  padding: 0;
  width: 100%;
  table-layout: auto;
  @media screen and (max-width: 600px) {
    border: 0;
  }
`;