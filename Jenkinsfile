pipeline {
  agent any

  triggers {
    cron('H 2 * * *')   // Runs at 2 AM daily
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