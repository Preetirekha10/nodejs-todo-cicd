
pipeline {
    agent any

    stages {

        stage('Checkout') {
            steps {
                echo 'Downloading source code from GitHub'
                checkout scm
            }
        }

        stage('Build Docker Image') {
            steps {
                echo 'Building Docker image'
                sh 'docker build -t nodejs-todo:latest .'
            }
        }

        stage('Stop Old Container') {
            steps {
                echo 'Removing old application container'
                sh 'docker rm -f todo-app || true'
            }
        }

        stage('Deploy Application') {
            steps {
                echo 'Starting new Docker container'
                sh '''
                    docker run -d \
                    --name todo-app \
                    --restart unless-stopped \
                    -p 3000:3000 \
                    nodejs-todo:latest
                '''
            }
        }

        stage('Verify Deployment') {
            steps {
                sh 'docker ps'
                echo 'Deployment completed'
            }
        }
    }
}
