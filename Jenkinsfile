pipeline {
  agent any
  options {
    timestamps()
  }
  stages {
    stage('Checkout') {
      steps { checkout scm }
    }
    stage('Build') {
      steps { sh 'mvn -q -DskipTests package' }
    }
    stage('Parallel Tests') {
      parallel {
        stage('API Tests') {
          steps { sh 'echo Running API tests && mvn -q -Dtest=HealthCheckTest test' }
        }
        stage('UI Tests') {
          steps { sh 'echo Running UI tests && mvn -q -Dtest=HealthCheckTest test' }
        }
      }
    }
    stage('Dockerize') {
      steps { sh 'docker build -t qa-tests:latest .' }
    }
  }
  post {
    always {
      archiveArtifacts artifacts: '**/target/surefire-reports/*.xml', fingerprint: true
    }
  }
}
