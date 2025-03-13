import { NextResponse } from 'next/server';
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
const tableName = process.env.AIRTABLE_CONTACT_TABLE_NAME; // Use contact-specific table name
const table = base ? base(tableName!) : null;

export async function POST(request: Request) {
  try {
    // Check if Airtable is properly configured
    if (!table) {
      console.error('Airtable is not properly configured');
      return NextResponse.json(
        { error: 'Server configuration error. Please contact support.' },
        { status: 500 }
      );
    }

    // Log that the API route was hit
    console.log('POST /api/contact was called');
    
    const { name, email, message } = await request.json();
    console.log('Received contact form data:', { name, email, message });

    // Validate required fields
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'All fields are required' },
        { status: 400 }
      );
    }

    // Email validation regex
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Invalid email format' },
        { status: 400 }
      );
    }

    // Create record in Airtable
    const createOptions: any = {
      fields: {
        "Full Name": name,
        "Email Address": email,
        "Message": message
      }
    };

    console.log('Attempting to create record with options:', createOptions);
    await table.create([createOptions]);
    console.log('Record created successfully');

    return NextResponse.json(
      { message: 'Message sent successfully' },
      { status: 200 }
    );
  } catch (error: any) {
    console.error('Error details:', {
      message: error.message,
      name: error.name,
      stack: error.stack,
    });

    // Send a user-friendly error message
    return NextResponse.json(
      { 
        error: 'Failed to send message. Please try again later.',
        details: error.message 
      },
      { status: 500 }
    );
  }
} 