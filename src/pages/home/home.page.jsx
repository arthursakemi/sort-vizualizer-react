import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

import { Button, Select } from 'antd';

import bubbleSort from '../../utils/bubbleSort';
import mergeSort from '../../utils/mergeSort';

const StyledDiv = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
`;

const StyledHeader = styled.header`
  padding: 20px;
  display: flex;
  gap: 20px;
  align-items: center;
  justify-content: flex-start;
  background-color: #282a36;
  color: #f5f5f5;
`;

const StyledMain = styled.main`
  background-color: #f5f5f5;
  flex-grow: 1;
  padding: 20px;
`;

const StyledFooter = styled.footer`
  padding: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
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

const buttonStyle = { borderColor: '#50fa7b', color: '#50fa7b' };

const HomePage = () => {
  const [numberOfBars, setNumberOfBars] = useState(100);
  const [sortAlgorythm, setSortAlgorythm] = useState('mergesort');
  const [sorting, setSorting] = useState(false);
  const [bars, setBars] = useState([]);

  const generateNewArray = () => {
    const newBars = [];
    for (let i = 0; i < numberOfBars; i++) {
      newBars.push(Number(generateRandomNumber()));
    }
    setBars(newBars);
  };

  const handleSortClick = async () => {
    setSorting(true);
    switch (sortAlgorythm) {
      case 'bubblesort':
        await bubbleSort(bars, setBars);
        break;
      case 'mergesort':
        await mergeSort(bars, setBars);
        break;
      default:
        break;
    }
    setSorting(false);
  };

  const generateRandomNumber = () => {
    return (Math.random() * 100).toFixed(2);
  };

  useEffect(() => {
    generateNewArray();
  }, []);

  return (
    <StyledDiv>
      <StyledHeader>
        <Button onClick={handleSortClick} size='large' ghost style={buttonStyle} disabled={sorting}>
          Sort!!
        </Button>
        <Button onClick={generateNewArray} size='large' ghost disabled={sorting}>
          Generate New Array!
        </Button>
        <Select value={sortAlgorythm} onChange={setSortAlgorythm} style={{ width: '120px' }}>
          <Select.OptGroup label='O(n log n)'>
            <Select.Option value='mergesort'>MergeSort</Select.Option>
          </Select.OptGroup>
          <Select.OptGroup label='O(n^2)'>
            <Select.Option value='bubblesort'>BubbleSort</Select.Option>
          </Select.OptGroup>
        </Select>
      </StyledHeader>
      <StyledMain>
        <BarContainer>
          {bars.map((size, index) => (
            <Bar key={index} height={size} />
          ))}
        </BarContainer>
      </StyledMain>
      <StyledFooter>Created by Arthur Sakemi 2020</StyledFooter>
    </StyledDiv>
  );
};

export default HomePage;
