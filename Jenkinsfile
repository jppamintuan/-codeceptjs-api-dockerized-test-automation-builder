pipeline {
    // master executor should be set to 0
    agent any
    stages {
        stage('Build Image') {
            steps {
                //bat
                sh "docker build -t='jppamintuan/codeceptjs-api-dockerized-test' ."
            }
        }
        stage('Push Image') {
            steps {
			    withCredentials([usernamePassword(credentialsId: 'dockerhub', passwordVariable: 'pass', usernameVariable: 'user')]) {
                    //bat
			        sh "docker login --username=${user} --password=${pass}"
			        sh "docker push jppamintuan/codeceptjs-api-dockerized-test:latest"
			    }                           
            }
        }
    }
}