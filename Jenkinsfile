pipeline {
    agent any
    stages {
        stage('Build') {
            steps {
                sh 'docker build .'
            }
        }
        stage('Push to Docker Hub') {
            steps {
                sh 'docker login -u yaronchr -p vivesyaron'
                sh 'docker tag yaronchr/api:latest'
                sh 'docker push yaronchr/api:latest'
            }
        }
    }
}