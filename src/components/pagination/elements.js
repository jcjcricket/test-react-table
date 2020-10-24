import styled from 'styled-components';

export const PageList = styled.ul`
  list-style-type: none;
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

export const PageListItem = styled.li`
  > button {
    border: 1px solid #52575d;
    padding: 10px 20px;
    background-color: #41444b;
    color: #f6f4e6;
    text-decoration: none;
    font-size: 19px;
    &:hover,
    &:focus {
      cursor: pointer;
      border: 1px solid #f6f4e6;
      background-color: #f6f4e6;
      color: #41444b;
    }
    &:visited {
      text-decoration: none;
    }
  }
`;
