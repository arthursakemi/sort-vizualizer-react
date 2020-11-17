import React, { useCallback, useEffect, useState } from 'react';
import styled from 'styled-components';

import { Box, Button, Footer, Grid, RangeInput, Select } from 'grommet';

import sortingAlgorithms from '../../sortingAlgorithms';

const StyledDiv = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
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

const BarContainer = styled.div`
  height: 100%;
  display: flex;
  padding: 20px;

  justify-content: center;
  align-items: flex-end;
  border: 2px solid black;
`;

const Bar = styled.span`
  width: 5px;
  background-color: #282a36;
`;

const HomePage = () => {
  const [numberOfBars, setNumberOfBars] = useState(100);
  const [sortAlgorithm, setSortAlgorithm] = useState('mergeSort');
  const [bars, setBars] = useState([]);
  const [sorting, setSorting] = useState(false);
  const [green, setGreen] = useState([]);

  const onSliderChange = (e) => {
    const { value } = e.target;
    setNumberOfBars(Number(value));
  };

  const handleSortClick = async () => {
    setSorting(true);
    await sortingAlgorithms[sortAlgorithm](bars, setBars, setGreen);
    setSorting(false);
  };

  const generateRandomNumber = () => {
    return Number((Math.random() * 100).toFixed(2));
  };
  const generateNewArray = useCallback(() => {
    const newBars = Array(numberOfBars).fill().map(generateRandomNumber);
    setBars(newBars);
  }, [numberOfBars]);

  useEffect(() => {
    generateNewArray();
  }, [generateNewArray]);

  const selectOptions = [
    { label: 'MergeSort', value: 'mergeSort' },
    { label: 'BubbleSort', value: 'bubbleSort' },
  ];

  return (
    <StyledDiv>
      <Grid columns={['repeat(3, minmax(150px, 1fr))']} gap='10px' pad='20px'>
        <Box fill>
          <Button onClick={handleSortClick} label='Sort!!' disabled={sorting} fill />
        </Box>
        <Box fill>
          <Button onClick={generateNewArray} label='Generate New Array!' disabled={sorting} fill />
        </Box>
        <Select
          value={sortAlgorithm}
          options={selectOptions}
          labelKey='label'
          valueKey={{ key: 'value', reduce: true }}
          onChange={({ value }) => setSortAlgorithm(value)}
        />
        <SliderContainer>
          <RangeInput value={numberOfBars} onChange={onSliderChange} min={50} max={300} step={10} />
        </SliderContainer>
      </Grid>
      <StyledMain>
        <BarContainer>
          {bars.map((size, index) => (
            <Bar key={index} style={{ height: `${size}%`, backgroundColor: `${green.includes(index) ? '#6FFFB0' : ' #282a36'}` }} />
          ))}
        </BarContainer>
      </StyledMain>
      <Footer justify='center' pad='20px'>
        Created by @arthursakemi 2020
      </Footer>
    </StyledDiv>
  );
};

export default HomePage;
