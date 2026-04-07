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
        archiveArtifacts artifacts: 'cypress/videos/**'
        archiveArtifacts artifacts: 'cypress/screenshots/**'
      }
    }
  }
}