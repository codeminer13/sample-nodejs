node {
  stage('SCM') {
    checkout scm
  }
  stage('SonarQube Analysis') {
    def scannerHome = tool 'sonscan';
    withSonarQubeEnv(installationName: 'sq1') {
      sh "${scannerHome}/bin/sonar-scanner"
    }
  }
}