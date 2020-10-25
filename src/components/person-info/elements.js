import styled from 'styled-components';

export const Info = styled.div`
  border: 1px solid;
  padding: 10px;
  margin: 20px;
  box-shadow: 5px 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 1.2rem;
  > textarea {
    width: 60%;
    height: auto;
  }
`;
