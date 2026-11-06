Automated CI/CD Pipeline for Node.js To-Do Application

Project Overview

This project demonstrates an automated CI/CD pipeline for deploying a Node.js To-Do application using AWS EC2, Jenkins, GitHub, GitHub Webhooks, and Docker.

Whenever new code is pushed to the GitHub repository, a webhook triggers Jenkins. Jenkins automatically fetches the latest code, builds a Docker image, and deploys the application inside a Docker container on the AWS EC2 instance.

Technologies Used

- AWS EC2 – Cloud server for hosting the application and Jenkins
- GitHub – Source code management
- GitHub Webhooks – Automatically trigger Jenkins builds
- Jenkins – CI/CD automation
- Docker – Application containerization
- Node.js – Backend runtime
- Express.js – Web application framework
- Ubuntu – EC2 operating system

Project Architecture

Developer → GitHub Repository → GitHub Webhook → Jenkins Pipeline → Docker Image → Docker Container → Running To-Do Application

CI/CD Pipeline Workflow

1. Developer pushes code changes to GitHub.
2. GitHub Webhook sends a notification to Jenkins.
3. Jenkins automatically starts the pipeline.
4. Jenkins checks out the latest source code.
5. Docker builds a new image of the application.
6. Jenkins removes the previous application container.
7. Jenkins deploys a new Docker container.
8. The application becomes accessible through the EC2 public IP.

Jenkins Pipeline Stages

- Checkout: Retrieves source code from GitHub.
- Build Docker Image: Builds the Docker image.
- Stop Old Container: Removes the previous container.
- Deploy Application: Starts the updated application container.
- Verify Deployment: Checks the running Docker container.

Project Structure

nodejs-todo-cicd/
│
├── public/
│   └── index.html
│
├── server.js
├── package.json
├── package-lock.json
├── Dockerfile
├── .dockerignore
├── Jenkinsfile
├── README.md
│
└── screenshots/
    ├── AWS-EC2-Instance.png
    ├── Final-Deployed-Application.png
    └── Jenkins-Pipeline-Success.png

How to Run the Application Locally

1. Clone the repository:

git clone https://github.com/Preetirekha10/nodejs-todo-cicd.git

2. Navigate to the project directory:

cd nodejs-todo-cicd

3. Install dependencies:

npm install

4. Start the application:

npm start

5. Open your browser and visit:

http://localhost:3000

Project Outcome

Successfully implemented an automated CI/CD pipeline using Jenkins, GitHub Webhooks, Docker, and AWS EC2.

The project demonstrates automated source code integration, Docker image building, and application deployment whenever changes are pushed to GitHub.
