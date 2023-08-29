# First stage: build the app
FROM python:3.11-slim-buster 

ENV PYTHONBUFFERED = 1

WORKDIR /django

# Copy requirements.txt and install dependencies
COPY requirements.txt requirements.txt
RUN pip3 install -r requirements.txt

# Copy the entire project into the Docker home directory
#COPY . .

# Start the Django development server
#CMD cd projectCocktail && python3 manage.py runserver 0.0.0.0:8000
