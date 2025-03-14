import { Handler } from '@netlify/functions';
import Airtable from 'airtable';

// Initialize Airtable with personal access token
if (!process.env.AIRTABLE_ACCESS_TOKEN) {
  console.error('Server Error: AIRTABLE_ACCESS_TOKEN is not configured');
}

if (!process.env.AIRTABLE_BASE_ID) {
  console.error('Server Error: AIRTABLE_BASE_ID is not configured');
}

if (!process.env.AIRTABLE_CONTACT_TABLE_NAME) {
  console.error('Server Error: AIRTABLE_CONTACT_TABLE_NAME is not configured');
}

// Log environment variables for debugging
console.log('Contact Form Environment Variables:', {
  accessToken: process.env.AIRTABLE_ACCESS_TOKEN ? 'exists' : 'missing',
  baseId: process.env.AIRTABLE_BASE_ID ? 'exists' : 'missing',
  contactTableName: process.env.AIRTABLE_CONTACT_TABLE_NAME ? 'exists' : 'missing'
});

const airtable = new Airtable({
  apiKey: process.env.AIRTABLE_ACCESS_TOKEN,
  endpointUrl: 'https://api.airtable.com'
});

const base = process.env.AIRTABLE_BASE_ID ? airtable.base(process.env.AIRTABLE_BASE_ID) : null;
const tableName = process.env.AIRTABLE_CONTACT_TABLE_NAME;
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
    console.log('contact function was called');
    
    const { name, email, message } = JSON.parse(event.body || '{}');
    console.log('Received contact form data:', { name, email, message });

    // Validate required fields
    if (!name || !email || !message) {
      return {
        statusCode: 400,
        body: JSON.stringify({ error: 'All fields are required' })
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

    // Create record in Airtable
    const createOptions = {
      fields: {
        "Full Name": name,
        "Email Address": email,
        "Message": message
      }
    };

    console.log('Attempting to create record with options:', createOptions);
    await table.create([createOptions]);
    console.log('Record created successfully');

    return {
      statusCode: 200,
      body: JSON.stringify({ message: 'Message sent successfully' })
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
        error: 'Failed to send message. Please try again later.',
        details: error.message 
      })
    };
  }
}; 