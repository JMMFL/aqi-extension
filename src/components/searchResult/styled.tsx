import styled from 'styled-components';

const Card = styled.div`
  display: flex;
  flex-flow: row;
  background: white;
  padding: 10px;
  margin-bottom: 10px;
`;

const Flag = styled.p`
  font-size: 18px;
  position: relative;
  top: 2.5px;
  margin-right: 8px;
`;

const Name = styled.p`
  font-size: 24px;
  font-weight: bold;
  margin-right: 7px;
`;

const State = styled.p`
  font-size: 12px;
  text-transform: uppercase;
  align-self: center;
  position: relative;
  top: 2px;
`;

const Button = styled.button`
  display: flex;
  align-items: center;
  margin-left: auto;
  background: none;
  border: none;
  border-radius: 100px;
  width: 41px;
  color: green;
  font-size: 26px;
  cursor: pointer;
`;

export { Card, Flag, Name, State, Button };
