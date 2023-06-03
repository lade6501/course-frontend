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
            dockerImage = docker . --file  Dockerfile.production  build  imagename
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
