# Welcome to your Lovable project

## Project info

**URL**: https://lovable.dev/projects/f6cb1445-3243-4a9b-ad9a-db9f6c94ef2c

## How can I edit this code?

There are several ways of editing your application.

**Use Lovable**

Simply visit the [Lovable Project](https://lovable.dev/projects/f6cb1445-3243-4a9b-ad9a-db9f6c94ef2c) and start prompting.

Changes made via Lovable will be committed automatically to this repo.

**Use your preferred IDE**

If you want to work locally using your own IDE, you can clone this repo and push changes. Pushed changes will also be reflected in Lovable.

The only requirement is having Node.js & npm installed - [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating)

Follow these steps:

```sh
# Step 1: Clone the repository using the project's Git URL.
git clone <YOUR_GIT_URL>

# Step 2: Navigate to the project directory.
cd <YOUR_PROJECT_NAME>

# Step 3: Install the necessary dependencies.
npm i

# Step 4: Create a .env.local file with your Airtable credentials
cp .env.local.example .env.local
# Edit .env.local with your actual Airtable credentials

# Step 5: Start the development server with auto-reloading and an instant preview.
npm run dev
```

**Edit a file directly in GitHub**

- Navigate to the desired file(s).
- Click the "Edit" button (pencil icon) at the top right of the file view.
- Make your changes and commit the changes.

**Use GitHub Codespaces**

- Navigate to the main page of your repository.
- Click on the "Code" button (green button) near the top right.
- Select the "Codespaces" tab.
- Click on "New codespace" to launch a new Codespace environment.
- Edit files directly within the Codespace and commit and push your changes once you're done.

## What technologies are used for this project?

This project is built with:

- Next.js 14
- TypeScript
- React
- shadcn-ui
- Tailwind CSS
- Airtable (for email subscriptions)

## Environment Variables

This project requires the following environment variables to be set in `.env.local`:

```env
AIRTABLE_API_KEY=your_airtable_api_key_here
AIRTABLE_BASE_ID=your_airtable_base_id
AIRTABLE_TABLE_NAME=your_table_name_here
```

Make sure to replace the placeholder values with your actual Airtable credentials.

## How can I deploy this project?

Simply open [Lovable](https://lovable.dev/projects/f6cb1445-3243-4a9b-ad9a-db9f6c94ef2c) and click on Share -> Publish.

## I want to use a custom domain - is that possible?

We don't support custom domains (yet). If you want to deploy your project under your own domain then we recommend using Netlify. Visit our docs for more details: [Custom domains](https://docs.lovable.dev/tips-tricks/custom-domain/)

# Marketing Homepage

## Project Overview

A modern marketing homepage built with Next.js 14, featuring a newsletter subscription form and contact form that integrate with Airtable.

## Technologies Used

- Next.js 14 (Static Site Generation)
- TypeScript
- React
- shadcn-ui
- Tailwind CSS
- Netlify Functions
- Airtable (for contact form and email subscriptions)

## Local Development

1. Clone the repository:
```sh
git clone <YOUR_GIT_URL>
cd <YOUR_PROJECT_NAME>
```

2. Install dependencies:
```sh
npm install
```

3. Install Netlify CLI globally:
```sh
npm install -g netlify-cli
```

4. Create a `.env.local` file with your Airtable credentials:
```env
AIRTABLE_ACCESS_TOKEN=your_airtable_access_token
AIRTABLE_BASE_ID=your_airtable_base_id
AIRTABLE_TABLE_NAME=your_email_subscriptions_table
AIRTABLE_CONTACT_TABLE_NAME=your_contact_form_table
```

5. Start the development server:
```sh
# Option 1: Run without Netlify Functions (forms won't work)
npm run dev

# Option 2: Run with Netlify Functions (recommended)
npm run dev:netlify
```

The site will be available at `http://localhost:8888` when using `dev:netlify`, or `http://localhost:3000` when using `dev`.

> **Note**: To test the contact and subscription forms locally, you must use `npm run dev:netlify`.

## Deployment

This project is configured for deployment on Netlify with serverless functions handling form submissions.

### Deployment Steps

1. Push your code to GitHub
2. Connect your repository to Netlify
3. Configure the following environment variables in your Netlify dashboard:
   - `AIRTABLE_ACCESS_TOKEN`
   - `AIRTABLE_BASE_ID`
   - `AIRTABLE_TABLE_NAME` (for email subscriptions)
   - `AIRTABLE_CONTACT_TABLE_NAME` (for contact form)

The build settings are already configured in `netlify.toml`:
- Build command: `npm run build`
- Publish directory: `out`
- Functions directory: `netlify/functions`

### Netlify Functions

The project uses two Netlify Functions:
1. `contact` - Handles contact form submissions
2. `subscribe` - Handles newsletter subscriptions

These functions are located in the `netlify/functions` directory and are automatically deployed by Netlify.

## Project Structure

```
├── netlify/
│   └── functions/          # Serverless functions for form handling
├── src/
│   ├── app/               # Next.js app directory
│   ├── components/        # React components
│   ├── hooks/            # Custom React hooks
│   └── lib/              # Utility functions
├── public/               # Static assets
├── .env.local           # Local environment variables
└── netlify.toml         # Netlify configuration
```

## Environment Variables

Required environment variables:

```env
AIRTABLE_ACCESS_TOKEN=your_airtable_access_token
AIRTABLE_BASE_ID=your_airtable_base_id
AIRTABLE_TABLE_NAME=your_email_subscriptions_table
AIRTABLE_CONTACT_TABLE_NAME=your_contact_form_table
```

Make sure to:
1. Add these to your `.env.local` for local development
2. Configure them in your Netlify dashboard for deployment

## Contributing

1. Create a feature branch (`git checkout -b feature/amazing-feature`)
2. Commit your changes (`git commit -m 'Add amazing feature'`)
3. Push to the branch (`git push origin feature/amazing-feature`)
4. Open a Pull Request
