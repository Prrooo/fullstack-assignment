# Project Name

This repository contains both the frontend and backend components of the project. Follow the instructions below to set up and run the application locally.

## Prerequisites

Ensure you have Node.js and Git installed on your system.

## Setup

### Clone the Repository

Clone the repository to your local machine using the appropriate Git command.

### Frontend

Navigate to the `frontend` directory and install the necessary dependencies by running `npm install`. This will download and set up all the required packages for the frontend of the application.

Once the dependencies are installed, you can start the frontend development server by running `npm run start`.

### Backend

Navigate to the `backend` directory and create a `.env` file by copying the existing `.env.example` file. Ensure that the `.env` file contains the following variables:

- `DATABASE_URL`: Your database connection string
- `PORT=4000`: The port on which the backend server will run

Install the necessary backend dependencies by running `npm install`.

To start the backend server in development mode, run `npm run start:dev`.

## Running the Application

After setting up both the frontend and backend, you should have two servers running:

- The frontend server - npm run start
- The backend server - npm run start:dev

Access the application via your web browser, and it should connect to the backend API seamlessly.


