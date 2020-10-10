import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

import bubbleSort from '../../utils/bubbleSort';
import mergeSort from '../../utils/mergeSort';

const StyledDiv = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
`;

const StyledHeader = styled.header`
  height: 70px;
  background-color: #282a36;
  color: #f5f5f5;
`;

const StyledMain = styled.main`
  background-color: #f5f5f5;
  flex-grow: 1;
  padding: 20px;
`;

const StyledFooter = styled.footer`
  height: 70px;
  background-color: #282a36;
  color: #f5f5f5;
`;

const BarContainer = styled.div`
  height: 100%;
  display: flex;
  padding: 20px;
  gap: 1px;
  justify-content: center;
  align-items: flex-end;
  border: 2px solid black;
`;

const Bar = styled.span`
  width: 10px;
  height: ${({ height }) => height}%;
  background-color: #282a36;
`;

const HomePage = () => {
  const min = 10;
  const max = 700;
  const numberOfBars = 100;
  const [bars, setBars] = useState([]);

  useEffect(() => {
    const newBars = [];
    for (let i = 0; i < numberOfBars; i++) {
      newBars.push(Number(generateRandomNumber(min, max)));
    }
    mergeSort(newBars, setBars);
  }, [numberOfBars]);

  const generateRandomNumber = (min, max) => {
    return (Math.random() * 100).toFixed(2);
  };

  return (
    <StyledDiv>
      <StyledHeader></StyledHeader>
      <StyledMain>
        <BarContainer>
          {bars.map((size, index) => (
            <Bar key={index} height={size} />
          ))}
        </BarContainer>
      </StyledMain>
      <StyledFooter></StyledFooter>
    </StyledDiv>
  );
};

export default HomePage;
