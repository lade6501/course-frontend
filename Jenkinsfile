pipeline {
  environment {
    imagename = "lade6501/course-frontend"
    registryCredential = 'docker-token'
    dockerImage = ''
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
    stage('Deploy Image') {
      steps{
        script {
          docker.withRegistry( '', registryCredential ) {
            dockerImage.push("$BUILD_NUMBER")
             dockerImage.push('latest')
          }
        }
      }
    }
    stage('Remove Unused docker image') {
      steps {
        sh "docker rmi $imagename:$BUILD_NUMBER"
         sh "docker rmi $imagename:latest"

      }
    }
  }
}
