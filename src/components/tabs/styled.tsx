import styled from 'styled-components';

const Navigation = styled.ul`
  display: flex;
  justify-content: space-evenly;
  padding: 0;
  list-style-type: none;
  height: 48px;
  margin-bottom: 25px;
`;

const Menu = styled.li`
  cursor: pointer;
  align-self: center;
  background: #ffffff;
  width: 100%;
  text-align: center;
  height: 100%;
  line-height: 55px;
  font-size: 24px;
`;

export { Navigation, Menu };
