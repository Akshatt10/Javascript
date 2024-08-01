const express = require('express');
const axios = require('axios');

const app = express();
const PORT = 9876;

const NUMBER_TYPES = {
  'p': 'prime',
  'T': 'Fibonacci',
  'e': 'even',
  'r': 'random'
};

const WINDOW_SIZE = 10;
let numbers = [];

const fetchNumbers = async (type) => {
  try {
    const response = await axios.get(`https://test-server-api.com/${type}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching numbers:', error.message);
    throw error;
  }
};


const calculateAverage = (arr) => {
  const sum = arr.reduce((acc, num) => acc + num, 0);
  return sum / arr.length;
};


app.get('/numbers/:numberType', async (req, res) => {
  const numberType = req.params.numberType;


  if (!NUMBER_TYPES.hasOwnProperty(numberType)) {
    return res.status(400).json({ error: 'Invalid number type' });
  }

  try {

    const fetchedNumbers = await fetchNumbers(NUMBER_TYPES[numberType]);


    const uniqueNumbers = Array.from(new Set([...numbers, ...fetchedNumbers])).slice(-WINDOW_SIZE);


    let average = null;
    if (uniqueNumbers.length === WINDOW_SIZE) {
      average = calculateAverage(uniqueNumbers);
    }

    // Update numbers array
    numbers = uniqueNumbers;

    // Prepare response object
    const response = {
      windowPrevState: numbers.slice(0, -fetchedNumbers.length),
      windowCurrState: numbers,
      numbers: fetchedNumbers,
      avg: average
    };

    // Send response
    res.json(response);
  } catch (error) {
    return res.status(500).json({ error: 'Internal server error' });
  }
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
