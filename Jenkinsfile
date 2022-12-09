pipeline {
    agent any
    stages {
        stage('Build') {
            steps {
                sh 'docker build -t api .'
            }
        }
        stage('Push to Docker Hub') {
            steps {
                sh 'docker login -u yaronchr -p YaronChr123'
                sh 'docker tag api yaronchr/api:latest'
                sh 'docker push yaronchr/api:latest'
            }
        }
    }
}