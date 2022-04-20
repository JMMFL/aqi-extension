import styled from 'styled-components';

interface Props {
  color: string;
  cursor: string;
}

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

const Button = styled.button<Props>`
  color: ${(props) => props.color};
  cursor: ${(props) => props.cursor};

  display: flex;
  align-items: center;
  margin-left: auto;
  background: none;
  border: none;
  border-radius: 100px;
  width: 41px;
  font-size: 26px;
`;

export { Card, Flag, Name, State, Button };
