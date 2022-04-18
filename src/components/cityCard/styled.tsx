import styled from 'styled-components';

interface GradeProps {
  background: string;
  color: string;
}

const FlexBox = styled.div`
  display: flex;
  flex-flow: column;
  background: white;
  padding: 10px;
  margin-bottom: 10px;
`;

const NameRow = styled.div`
  display: flex;
  flex-flow: row;
  margin-bottom: 5px;
`;

const DataRow = styled.div`
  display: flex;
  flex-flow: row;
  font-family: monospace;
`;

const Flag = styled.p`
  font-size: 18px;
  position: relative;
  top: 2.5px;
  margin-right: 8px;
`;

const Location = styled.p`
  font-size: 24px;
  font-weight: bold;
  /* width: 120px; */
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
  margin-right: 10px;
  padding: 5px;
  width: 55px;
  border: 1px solid black;
`;

const Grade = styled.p<GradeProps>`
  background: ${(props) => props.background};
  color: ${(props) => props.color};

  display: flex;
  flex-flow: column;
  justify-content: center;
  font-weight: bold;
  margin-right: 10px;
  width: 80px;
  padding: 5px;
  border: 1px solid black;
  text-transform: uppercase;
  height: 41px;
  text-align: center;
  font-size: 18px;
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
  FlexBox,
  Flag,
  Location,
  Button,
  Components,
  Grade,
  Component,
  Concentration,
  Particle,
  NameRow,
  DataRow,
};
