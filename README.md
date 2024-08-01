
Install JSON Server

      npm install json-server

Create a JSON File

      {
        "students": [
          { "id": 1, "name": "John Doe", "grade": "A" },
          { "id": 2, "name": "Jane Smith", "grade": "B" }
        ],
        "teachers": [
          { "id": 1, "name": "Mr. Johnson", "subject": "Math" },
          { "id": 2, "name": "Ms. Brown", "subject": "English" }
        ]
      }


Add a Script to package.json

      "scripts": {
        "start": "react-scripts start",
        "json-server": "json-server --watch db.json --port 5000"
      }


Start the JSON Server:

      npm run json-server
