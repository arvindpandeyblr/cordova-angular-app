pipeline {
  agent {
    label 'platformui'
  }
  options {
    disableConcurrentBuilds()
    timeout(time: 1, unit: 'HOURS')
    buildDiscarder(logRotator(numToKeepStr: '3'))
  }
  stages {
    stage('prepare'){
      steps {
        nodejs('NodeJS') {
          sh 'npm install'
        }
      }
    }
    stage('compile') {
      steps {	  
        nodejs('NodeJS') {
          sh 'node --max_old_space_size=8048 node_modules/@angular/cli/bin/ng build --prod --no-progress'	          
        }	   
      }	   
    }
  }
}
