import styled from 'styled-components'

export const FilterForm = styled.form`
  display: flex;
  flex-direction: row;
  margin-bottom:1rem ;

  > input {
      width: 200px;
      padding: 12px 20px;
      margin: 8px 0;
      box-sizing: border-box;
}

> button {
  background-color: #41444b;
  border: none;
  color: white;
  padding: 15px 32px;
  margin: 0 12px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
}
`