# Document Management and RAG-based Q&A Application

This is a full-stack application for **Document Management** and **Q&A Interface** powered by **Retrieval-Augmented Generation (RAG)**. It allows the user to manage documents, trigger ingestion processes, and ask questions to retrieve relevant document content.

## Getting Started

Follow the steps below to clone and run the application on your local machine.

### **Clone the Repository**

Clone the repository using the following command:

```bash
git clone https://github.com/anirbanbarman/Document-Management.git
Backend Setup
Navigate to the backend folder:

bash
Copy code
cd backend
Install dependencies:

bash
Copy code
npm install
Run the backend server:

You can run the server using any of the following commands:

bash
Copy code
node index.js
or

bash
Copy code
nodemon index.js
or run it in watch mode if you have nodemon installed.

Default Authentication Data:

The default user data for login is set in the backend as follows:

js
Copy code
const users = [
  { id: 1, username: 'admin', role: 'admin' },
  { id: 2, username: 'editor', role: 'editor' },
  { id: 3, username: 'viewer', role: 'viewer' }
];
This data is used for testing user authentication. You can change this according to your needs.

Dependencies:

Multer: For handling file uploads.
JWT (JSON Web Token): For authentication and generating user tokens.
Environment: Ensure the backend is running on localhost (or your preferred port) to interact with the frontend.

Frontend Setup
Navigate to the frontend folder:

bash
Copy code
cd frontend
Install dependencies:

bash
Copy code
npm install
Run the frontend:

bash
Copy code
ng serve
The application will be available at http://localhost:4200.

Technologies Used
Backend: Node.js, Express, Multer, JWT
Frontend: Angular, Bootstrap
Database: In-memory array for user authentication (you can replace it with a real database)
File Uploads: Multer for handling file uploads on the backend
Features
Authentication: JWT-based login for users with roles (Admin, Editor, Viewer).
User Management: Admin can manage user roles.
Document Management: Admin and Editor roles can upload, delete, and manage documents.
Q&A Interface: Users can ask questions and get answers based on uploaded documents.
Folder Structure
Backend
index.js: Main entry point of the server.
controllers/: Contains logic for handling API requests.
middleware/: Contains JWT authentication and authorization logic.
models/: Includes mock data like users.
routes/: Defines routes for user and document management.
Frontend
src/app/: Contains the Angular components and services for handling user management, document upload, and Q&A.
assets/: Stores static files such as images.
styles/: Contains global styling and Bootstrap integration.
Steps to Run the Application
Backend API Setup
Clone the repository.
Navigate to the backend directory.
Install required dependencies with npm install.
Run the backend using one of the following commands:
node index.js
nodemon index.js
The backend API will run on your localhost (default port 3000).
The API will use JWT for authentication and Multer for handling file uploads.
Frontend UI Setup
Clone the repository.
Navigate to the frontend directory.
Install required dependencies with npm install.
Run the frontend with ng serve.
The frontend UI will be available at http://localhost:4200.
The frontend includes:
Login Page: User authentication with roles (admin, editor, viewer).
User Management Page: Admin can manage user roles.
Document Management Page: Admin/Editor can upload and manage documents.
Q&A Interface: Users can ask questions related to the documents.
File Uploads
The backend uses Multer for file uploads.
Documents uploaded via the frontend will be processed and stored in the backend for further use.
User Roles
The default users for testing purposes are as follows:
Admin: Full access to all features.
Editor: Can upload and manage documents.
Viewer: Can only view documents and ask questions.
These roles are defined in the backend's mock data for authentication.
Testing the Application
Login with a default user (admin, editor, viewer) and test role-based access.
Upload Documents from the Document Management UI and trigger ingestion.
Ask Questions using the Q&A Interface and retrieve relevant answers from uploaded documents.
Future Improvements
Integrate with a real database for user and document storage.
Enhance the Q&A interface using advanced search or AI-based retrieval.
Implement detailed logging and error handling for production use.



### Key Additions:
- **Steps to Run the Application**: Added a detailed guide for running both backend and frontend, including commands.
- **File Upload and User Roles**: Detailed how file uploads are handled with Multer and listed default users for testing purposes.
- **Testing**: Expanded on testing the application with role-based access, document uploads, and Q&A functionality.