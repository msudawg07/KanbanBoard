A full-stack Kanban Board web app built using JavaScript on the frontend and Django for a RESTful API server and SQLite on the backend.

To run locally:

# Download the project code from GitHub
git clone https://github.com/<your-username>/KanbanBoard.git

cd KanbanBoard

pip install pipenv

# Create and activate the virtual environment for this project
pipenv shell

# Install all Python packages listed in Pipfile
pipenv install

# Set up the SQLite database tables
python manage.py migrate

# Run the backend server
python manage.py runserver

Navigate to:

http://127.0.0.1:8000
