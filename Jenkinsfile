pipeline {
    agent any
    tools {
    nodejs "nodejs"
    }
    stages {
        stage('Pull') {
            steps {
              script{
                git branch: 'nodejs', credentialsId: 'jaeuk', url: 'https://lab.ssafy.com/s08-webmobile1-sub2/S08P12B207'
              }
            }
        }
   
        stage('Build') {
          steps {
            script {
              sh 'docker build -t nodejs ./whiteboard-server/'
            }
          }
        }
           stage('Deploy') {
            steps {
              script {
                // sh 'docker stop nginx'
                // sh 'docker rm nginx'
                sh 'docker run -d --name nodejs -p 8081:8081 -u root nodejs'
              }
            }
   }
  }
}
