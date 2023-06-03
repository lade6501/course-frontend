pipeline {
  environment {
    imagename = "lade6501/course-frontend"
  }
  agent any
  stages {
    stage('Cloning Git') {
      steps {
        git([url: 'https://github.com/lade6501/course-frontend.git', branch: 'master', credentialsId: 'git_token'])

      }
    }
    stage('Building image') {
      steps{
        script {
         sh  dockerImage= docker build -t imagename --file Dockerfile.production .
        }
      }
    }
    
  }
}