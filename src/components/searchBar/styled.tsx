import styled from 'styled-components';

const Form = styled.form`
  display: flex;
  justify-content: center;
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
  margin-bottom: 10px;
`;

export { Form, Label, Search };
