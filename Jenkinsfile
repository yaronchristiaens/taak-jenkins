pipeline {
    agent any
    stages {
        stage('Build') {
            steps {
                sh 'docker build -t yaronchr/api:latest .'
            }
        }
        stage('Push to Docker Hub') {
            steps {
                sh 'docker login -u yaronchr -p vivesyaron'
                sh 'docker push yaronchr/api:latest'
            }
        }
    }
}