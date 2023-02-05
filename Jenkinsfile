pipeline {
    agent any
   tools {
   gradle "gradle7.6"
 }
    stages {
        stage('Pull') {
            steps {
				script{
				  git branch: 'back-end', credentialsId: 'jaeuk', url: 'https://lab.ssafy.com/s08-webmobile1-sub2/S08P12B207'
				}
            }
        }
        stage('SpringBoot Build') {
          steps {
            script {
              dir('backend') {
                 sh 'chmod +x ./gradlew'
                sh './gradlew build'
              }
            }

          }
        }
   
        stage('Build') {
          steps {
            script {
              sh 'docker build -t springboot ./backend/'
            }
          }
        }
           stage('Deploy') {
            steps {
              script {
                sh 'docker stop springboot && docker rm springboot'
                sh 'docker run -d -v /var/lib/image:/root/pictures -v /etc/timezone:/etc/timezone -v /etc/localtime:/etc/localtime --name springboot -p 9000:9000 -u root springboot'
              }
            }
   }
  }
}