import { Handler } from '@netlify/functions';
import Airtable from 'airtable';

// Initialize Airtable with personal access token
if (!process.env.AIRTABLE_ACCESS_TOKEN) {
  console.error('Server Error: AIRTABLE_ACCESS_TOKEN is not configured');
}

if (!process.env.AIRTABLE_BASE_ID) {
  console.error('Server Error: AIRTABLE_BASE_ID is not configured');
}

if (!process.env.AIRTABLE_TABLE_NAME) {
  console.error('Server Error: AIRTABLE_TABLE_NAME is not configured');
}

const airtable = new Airtable({
  apiKey: process.env.AIRTABLE_ACCESS_TOKEN,
  endpointUrl: 'https://api.airtable.com'
});

const base = process.env.AIRTABLE_BASE_ID ? airtable.base(process.env.AIRTABLE_BASE_ID) : null;
const tableName = process.env.AIRTABLE_TABLE_NAME;
const viewName = process.env.AIRTABLE_VIEW_NAME;
const table = base ? base(tableName!) : null;

export const handler: Handler = async (event) => {
  // Only allow POST requests
  if (event.httpMethod !== 'POST') {
    return {
      statusCode: 405,
      body: JSON.stringify({ error: 'Method not allowed' })
    };
  }

  try {
    // Check if Airtable is properly configured
    if (!table) {
      console.error('Airtable is not properly configured');
      return {
        statusCode: 500,
        body: JSON.stringify({ error: 'Server configuration error. Please contact support.' })
      };
    }

    // Log that the function was called
    console.log('subscribe function was called');
    
    const { email } = JSON.parse(event.body || '{}');
    console.log('Received email:', email);

    // Validate email
    if (!email) {
      return {
        statusCode: 400,
        body: JSON.stringify({ error: 'Email is required' })
      };
    }

    // Email validation regex
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return {
        statusCode: 400,
        body: JSON.stringify({ error: 'Invalid email format' })
      };
    }

    // Create record in Airtable with view option if specified
    const createOptions: any = {
      fields: {
        "Email Address": email,
      }
    };

    // If a specific view is configured, use it
    if (viewName) {
      createOptions.view = viewName;
    }

    console.log('Attempting to create record with options:', createOptions);
    await table.create([createOptions]);
    console.log('Record created successfully');

    return {
      statusCode: 200,
      body: JSON.stringify({ message: 'Successfully subscribed' })
    };
  } catch (error: any) {
    console.error('Error details:', {
      message: error.message,
      name: error.name,
      stack: error.stack,
    });

    return {
      statusCode: 500,
      body: JSON.stringify({ 
        error: 'Failed to subscribe. Please try again later.',
        details: error.message 
      })
    };
  }
}; 