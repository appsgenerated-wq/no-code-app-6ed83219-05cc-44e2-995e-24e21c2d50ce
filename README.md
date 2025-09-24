# BrownFood App

Welcome to BrownFood, a recipe sharing application built with React and a Manifest-powered backend.

## Features

- **User Authentication**: Sign up, log in, and manage your account.
- **Recipe Discovery**: Browse a feed of recipes shared by the community.
- **Recipe Creation**: Create and publish your own comfort food recipes, complete with photos.
- **Personal Recipe Book**: View and manage all the recipes you've created.

## Getting Started

### Prerequisites

- Node.js (v16+)
- npm or yarn

### Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   ```
2. Navigate to the project directory:
   ```bash
   cd brownfood-app
   ```
3. Install dependencies:
   ```bash
   npm install
   ```

### Running the Application

1. Create a `.env.local` file in the root of the project.
2. Add the API endpoint configuration:
   ```
   VITE_API_URL=https://no-code-platform-backend-for-generated.onrender.com/api
   VITE_APP_ID=brown-food-app
   ```
3. Start the development server:
   ```bash
   npm run dev
   ```
4. Open your browser and navigate to `http://localhost:5173`.
