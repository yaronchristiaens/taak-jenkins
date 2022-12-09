// Import the fs module to read and write to the local JSON file
const fs = require('fs');

// Import the express module to create the server and handle requests
const express = require('express');
const app = express();

// Import the body-parser module to parse the request body
const bodyParser = require('body-parser');
app.use(bodyParser.json());

// Read the JSON file and parse the data into a JavaScript object
const data = JSON.parse(fs.readFileSync('data.json'));

// Create a GET endpoint that returns the data from the JSON file
app.get('/api/data', (req, res) => {
  res.json(data);
});

// Create a POST endpoint that saves new data to the JSON file
app.post('/api/data', (req, res) => {
  // Get the new data from the request body
  const newData = req.body;

  // Update the data object with the new data
  data.push(newData);

  // Save the updated data object to the JSON file
  fs.writeFileSync('data.json', JSON.stringify(data, null, 2));

  // Return a success response
  res.json({
    message: 'Data saved successfully',
  });
});

// Start the server and listen for requests on port 3000
app.listen(3000, () => {
  console.log('Server listening on port 3000');
});
