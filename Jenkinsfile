pipeline {
  agent any
  stage {
    stage('Build') {
      sh "npm install"
    }
    stage('Tests') {
      sh "npm test"
    }
  }
}