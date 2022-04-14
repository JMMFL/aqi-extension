import styled from 'styled-components';

const Container = styled.div`
  height: 80px;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  background: white;
  padding: 10px;
  margin-bottom: 10px;
`;

const Flag = styled.p`
  font-size: 24px;
`;

const Name = styled.p`
  font-size: 18px;
  font-weight: bold;
  width: 120px;
  margin-right: auto;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
`;

const Button = styled.button`
  display: flex;
  align-items: center;
  margin-left: auto;
  background: none;
  border: none;
  border-radius: 100px;
  width: 41px;
  color: red;
  font-size: 26px;
  cursor: pointer;
`;

const Components = styled.ul`
  display: flex;
  list-style-type: none;
  padding-left: 0px;
`;

const Component = styled.li`
  display: flex;
  flex-flow: column;
  justify-content: center;
  font-weight: bold;
  margin-right: 5px;
  padding: 5px;
  width: 42px;
  border: 1px solid black;
`;

const Category = styled.p`
  display: flex;
  flex-flow: column;
  justify-content: center;
  font-weight: bold;
  margin-right: 5px;
  padding: 5px;
  width: 42px;
  border: 1px solid black;
  height: 41px;
  text-align: center;
  font-size: 32px;
`;

const Concentration = styled.p`
  text-align: center;
  font-size: 16px;
`;

const Particle = styled.p`
  text-align: center;
  text-transform: uppercase;
  font-size: 10px;
`;

export {
  Container,
  Flag,
  Name,
  Button,
  Components,
  Category,
  Component,
  Concentration,
  Particle,
};
