# Quiz Application API

This is a RESTful API for managing quizzes, built with Node.js, Express.js, and MongoDB.

## Features

- **Create a Quiz**: Allows users to create quizzes with questions, multiple-choice options, and correct answers.
- **Retrieve Active Quiz**: Fetches the currently active quiz based on the date and time.
- **Get Quiz Result**: Retrieves the result of a quiz after it has finished.
- **Get All Quizzes**: Fetches a list of all quizzes, including those that are upcoming, active, or finished.
- **JWT Authentication**: Secures the API endpoints.
- **Rate Limiting**: Limits the number of requests to certain endpoints.

## Tech Stack

- **Backend**: Node.js, Express.js
- **Database**: MongoDB
- **Authentication**: JWT (JSON Web Token)

## Installation

1. Clone the repository:
    ```bash
    git clone https://github.com/your-username/quiz-app.git
    ```
2. Navigate to the project directory:
    ```bash
    cd quiz-app
    ```
3. Install dependencies:
    ```bash
    - npm i express nodemon bcrypt mongoose jsonwebtoken dotenv express-rate-limit
    - npm install node-cron
    ```
4. Set up environment variables in a `.env` file:
    ```
    PORT=8080
    MONGO_URI=your_mongodb_connection_string
    ```
5. Start the server:
    ```bash
    npm run server
    ```

## API Endpoints

### Authentication

- **POST** `/auth/register` - Registers a new user.
- **POST** `/auth/login` - Logs in an existing user.

### Quizzes

- **POST** `/quizzes` - Creates a new quiz (requires authentication).
- **GET** `/quizzes/active` - Retrieves the currently active quiz.
- **GET** `/quizzes/:id/result` - Retrieves the result of a specific quiz (requires authentication).
- **GET** `/quizzes/all` - Retrieves all quizzes (requires authentication).


