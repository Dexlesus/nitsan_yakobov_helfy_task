# nitsan_yakobov_helfy_task


# Task Manager App

## Setup and Installation

### Backend


cd Backend
npm install
npm start

The backend runs on:

http://localhost:4000
### Frontend


cd Frontend
npm install
npm start


The frontend runs on:


http://localhost:3000

## How to Run

1. Start the backend server.
2. Open a new terminal.
3. Start the frontend.
4. Open the browser at:


http://localhost:3000

## API Endpoints


GET | /api/tasks | Get all tasks 
POST | /api/tasks | Create a new task 
PUT | /api/tasks/:id | Update a task 
DELETE | /api/tasks/:id | Delete a task 
PATCH | /api/tasks/:id/toggle | Toggle task completion 


## Design NotesTasks are stored in memory (no database).
The frontend communicates with the backend using the Fetch API.State management is handled in the main App component.

