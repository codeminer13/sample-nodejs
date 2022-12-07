@Library('pipleline-library-demo')_

node {
  env.NODEJS_HOME = "${tool 'node'}"
  env.PATH = "${env.NODEJS_HOME}/bin:${env.PATH}"

  git url: "https://github.com/navaryan13/sample-nodejs"

        stage("Install") {
            sh "npm install"
        }

        stage("Test") {
            sh "npm test"
        }
        ge('SonarQube Analysis') {
            def scannerHome = tool 'sonscan';
            withSonarQubeEnv(installationName: 'sq1') {
                sh "${scannerHome}/bin/sonar-scanner"
            }
        }
        
        body()      


}
