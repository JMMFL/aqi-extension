import styled from 'styled-components';

const Form = styled.form`
  display: flex;
  justify-content: center;
  margin-bottom: 25px;
`;

const Label = styled.label`
  display: none;
`;

const Search = styled.input`
  height: 30px;
  border-radius: 50px;
  padding-left: 10px;
  font-size: 14px;
  width: 75%;
  border: 1px solid grey;
`;

export { Form, Label, Search };
