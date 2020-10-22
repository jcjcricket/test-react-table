import styled from 'styled-components';

export const TR = styled.tr`
  background-color: #f8f8f8;
  border: 1px solid #52575d;
  padding: 0.35em;
  &:hover {
    background-color: #c3c6c9;
    cursor: pointer;
  }
  @media screen and (max-width: 800px) {
    border-bottom: 3px solid #ddd;
    display: block;
    margin-bottom: 0.625em;
  }
`;

export const TD = styled.td`
  border: 1px solid #52575d;
  padding: 0.625em;
  margin: 0;
  text-align: center;

  @media screen and (max-width: 800px) {
    border: 1px solid #52575d;
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

export const TDDescDiv = styled.div`
  width: 300px;
  height: 100%;
  margin: 0;
  padding: 0;
  overflow: auto;
`;

export const TBody = styled.tbody`
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 0;
  overflow: auto;
`;
