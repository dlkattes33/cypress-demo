pipeline {
  agent any

  tools {
    nodejs "Node20"
  }

  stages {

    stage('Install Dependencies') {
      steps {
        sh 'npm ci'
      }
    }

    stage('Run Cypress Tests') {
      steps {
        sh 'npx cypress run --reporter junit --reporter-options "mochaFile=cypress/results/results-[hash].xml,toConsole=false"'
      }
    }

    stage('Archive Results') {
        steps {
            archiveArtifacts artifacts: 'cypress/screenshots/**', allowEmptyArchive: true
            archiveArtifacts artifacts: 'cypress/results/*.xml', allowEmptyArchive: true

            // Jenkins prefers this exact glob pattern for Cypress JUnit output
            junit testResults: 'cypress/results/*.xml', allowEmptyResults: true
          }
        }
  }
}
