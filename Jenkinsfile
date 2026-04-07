pipeline {
  agent any

  tools {
    nodejs "Node18"
  }

  stages {
    stage('Checkout') {
      steps {
        checkout scm
      }
    }

    stage('Install Dependencies') {
      steps {
        sh 'npm ci'
      }
    }

    stage('Run Cypress Tests') {
      steps {
        sh 'npx cypress run'
      }
    }

    stage('Archive Results') {
      steps {
        archiveArtifacts artifacts: 'cypress/videos/**', allowEmptyArchive: true
        archiveArtifacts artifacts: 'cypress/screenshots/**', allowEmptyArchive: true
        archiveArtifacts artifacts: 'cypress/results/*.xml', allowEmptyArchive: true
       // junit testResults: 'cypress/results/*.xml', allowEmptyResults: true
      }
    }
  }
}