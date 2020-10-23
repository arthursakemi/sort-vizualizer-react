import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

import { Button, Select, Slider } from 'antd';

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
  flex-wrap: wrap;
  gap: 20px;
  align-items: center;
  background-color: #282a36;
  color: #f5f5f5;
`;

const SliderContainer = styled.div`
  width: 100%;
  min-width: 300px;
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

  justify-content: center;
  align-items: flex-end;
  border: 2px solid black;
`;

const Bar = styled.span`
  width: 10px;
  height: ${({ height }) => height}%;
  background-color: #282a36;
`;

const buttonStyle = { borderColor: '#50fa7b', color: '#50fa7b', flex: '1 1 150px' };

const sliderMarks = { 50: '50', 100: '100', 200: '200', 300: '300' };

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
  }, [numberOfBars]);

  return (
    <StyledDiv>
      <StyledHeader>
        <Button onClick={handleSortClick} size='large' ghost style={buttonStyle} disabled={sorting} block>
          Sort!!
        </Button>
        <Button onClick={generateNewArray} size='large' ghost disabled={sorting} style={{ flex: '1 1 150px' }} block>
          Generate New Array!
        </Button>
        <Select value={sortAlgorythm} onChange={setSortAlgorythm} size='large' style={{ flex: '1 1 150px' }} block>
          <Select.OptGroup label='O(n log n)'>
            <Select.Option value='mergesort'>MergeSort</Select.Option>
          </Select.OptGroup>
          <Select.OptGroup label='O(n^2)'>
            <Select.Option value='bubblesort'>BubbleSort</Select.Option>
          </Select.OptGroup>
        </Select>
        <SliderContainer>
          <Slider marks={sliderMarks} value={numberOfBars} onChange={setNumberOfBars} min={50} max={300} step={10} style={{ flex: '1 1 150px' }} />
        </SliderContainer>
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
