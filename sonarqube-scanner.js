const scanner = require('sonarqube-scanner');
scanner(
  {
  serverUrl: "http://192.168.29.73:9000",
  login:"admin",
  password:"123456",
  options: {
    "sonar.projectKey": "app_test",
    "sonar.sources": ".",
    "sonar.host.url":"http://192.168.29.73:9000",
    "sonar.login":"sqp_3cc41320d48b649f80bda40d012399d6c43b13bf"
  },
},
() => process.exit()
);