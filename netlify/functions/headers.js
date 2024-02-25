// Importing necessary types from '@netlify/edge-functions'
const { createResponse } = require('@netlify/functions');

// Defining the Edge function handler
exports.handler = async (event) => {
  // Extracting request and context from the event object
  const { request, context } = event;

  // Invoking the `next` function from the context
  const response = await context.next();

  // Creating and returning a new response with added headers
  return createResponse(response.body, {
    headers: {
      'access-control-allow-origin': '*'
    }
  });
};

// Exporting configuration for the Edge function
exports.config = {
  // Path for the function
  path: '/*'
};
