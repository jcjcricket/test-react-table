import styled from 'styled-components';

export const THead = styled.thead`
  @media screen and (max-width: 800px) {
    border: none;
    overflow: hidden;
    padding: 0;
  }
`;

export const TR = styled.tr`
  background-color: #41444b;
  border: 1px solid #52575d;
  padding: 0.35em;
  color: #f6f4e6;
  &:hover {
    cursor: pointer;
  }

  @media screen and (max-width: 800px) {
    border-bottom: 3px solid #41444b;
    display: block;
    margin-bottom: 0.625em;

  }
`;

export const TH = styled.th`
@media screen and (max-width: 800px) {
    border: none;
    overflow: hidden;
    padding: 0 5px;
   
  }
  border: 1px solid #f6f4e6;
  padding: 0.625em;
  text-align: center;
  vertical-align: middle;
  font-size: 0.85em;
  letter-spacing: 0.1em;
  text-transform: uppercase;

  &:hover {
    background-color: #52575d;
  }
  > span {
    display: block;
    overflow:auto;
    

    > i {
      font-size: 1.5rem;
      float: right
    }
  }
`;
