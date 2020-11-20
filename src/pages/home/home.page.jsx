import React, { useCallback, useEffect, useState } from 'react';
import styled from 'styled-components';

import { Box, Button, Footer, Main, RangeInput, Select } from 'grommet';

import sortingAlgorithms from '../../sortingAlgorithms';
import generateRandomNumber from '../../helperFunctions/generateRandomNumber';

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
  flex: 1 1 1px;
  background-color: #282a36;
`;

const ControlBox = ({ children }) => (
  <Box flex={{ grow: 1, shrink: 1 }} basis='300px'>
    {children}
  </Box>
);

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
    setGreen([]);
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
    //{ label: 'QuickSort', value: 'quicksort' },
  ];

  return (
    <Main>
      <Box pad='20px' direction='row' wrap style={{ gap: '10px' }} align='center'>
        <ControlBox>
          <Button onClick={handleSortClick} label='Sort!!' size='large' disabled={sorting} fill />
        </ControlBox>
        <ControlBox>
          <Button onClick={generateNewArray} label='Generate New Array!' size='large' disabled={sorting} fill />
        </ControlBox>
        <ControlBox>
          <Select
            value={sortAlgorithm}
            options={selectOptions}
            labelKey='label'
            valueKey={{ key: 'value', reduce: true }}
            onChange={({ value }) => setSortAlgorithm(value)}
          />
        </ControlBox>
      </Box>
      <Box pad='20px' fill='horizontal'>
        <RangeInput value={numberOfBars} onChange={onSliderChange} min={50} max={300} step={10} />
      </Box>
      <StyledMain>
        <BarContainer>
          {bars.map((size, index) => (
            <Bar key={`bar${index}`} style={{ height: `${size}%`, backgroundColor: `${green.includes(index) ? '#6FFFB0' : ' #282a36'}` }} />
          ))}
        </BarContainer>
      </StyledMain>
      <Footer justify='center' pad='20px'>
        @arthursakemi 2020
      </Footer>
    </Main>
  );
};

export default HomePage;
