import styled from 'styled-components';

export const Table = styled.table`
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

export const TableHead = styled.thead`
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

export const TableRow = styled.tr`
  background-color: #f8f8f8;
  border: 1px solid #ddd;
  padding: 0.35em;
  @media screen and (max-width: 600px) {
    border-bottom: 3px solid #ddd;
    display: block;
    margin-bottom: 0.625em;
  }
`;

export const TableHeader = styled.th`
  border: 1px solid #999;
  padding: 0.625em;
  text-align: center;
  vertical-align: middle;
  font-size: 0.85em;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  word-break: break-word;
`;

export const TableDef = styled.td`
  border: 1px solid #999;
  padding: 0.625em;
  margin: 0;
  text-align: center;
  word-break: break-word;
  height: 10px;

  @media screen and (max-width: 600px) {
    border-bottom: 1px solid #ddd;
    display: block;
    font-size: 0.8em;
    text-align: right;

    &::before {
      content: '${(props) => props.label}';
      float: left;
      font-weight: bold;
      text-transform: uppercase;
    }
  }
`;

export const TableDefDescDiv = styled.div`
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 0;
  overflow: auto;
`;

export const TableBody = styled.tbody``;
