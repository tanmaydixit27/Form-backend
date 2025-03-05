This is the backend repository for the Form Builder Application built using Node.js, Express, and MongoDB. The backend provides API endpoints for creating, editing, fetching, and deleting forms, storing responses, and managing form-related data.


🛠️ Tech Stack
Backend: Node.js, Express.js
Database: MongoDB, Mongoose
Authentication: Not included in MVP (Can be added with JWT if needed)
Error Handling: Middleware-based global error handling

🚀 Getting Started
1️⃣ Clone the Repository

git clone https://github.com/tanmaydixit27/Form-backend
cd Form-backend
2️⃣ Install Dependencies

npm install
3️⃣ Create a .env File
Inside the server/ directory, create a .env file and add the following:

PORT=5000
MONGO_URI=mongodb+srv://<username>:<password>@cluster.mongodb.net/form-builder
Replace <username> and <password> with your MongoDB credentials.

4️⃣ Start the Server

node server.js
The backend will run on http://localhost:5000(I have deployed my frontend and backend by that I have made suitable changes in the code so for running the application remove my deployed links from the code and add PORT 5000)

📌 API Endpoints

1️⃣ Forms API (/api/forms)

Method	Endpoint	Description
GET	/api/forms	Get all forms
GET	/api/forms/:id	Get a single form by ID
POST	/api/forms	Create a new form
PUT	/api/forms/:id	Update a form by ID
DELETE	/api/forms/:id	Delete a form by ID

2️⃣ Responses API (/api/responses) (If needed)

Method	Endpoint	Description
POST	/api/responses/:formId	Submit form responses
GET	/api/responses/:formId	Get responses for a form

📜 Project Features
✅ CRUD Operations on Forms
✅ MongoDB Database Integration
✅ REST API Architecture
✅ Middleware for Global Error Handling

