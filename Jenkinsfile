pipeline {
  environment {
        GIT_COMMIT = sh(returnStdout: true, script: 'git rev-parse HEAD').trim()
        GIT_AUTHOR = sh(returnStdout: true, script: 'git log -1 --pretty=format:"%an"').trim()
        GIT_MSG = sh(returnStdout: true, script: 'git log -1 --pretty=format:"%s"').trim()
  }
  agent any
    stages {
      stage('Infos') {
        steps {
          sh """
            echo "Git Author: ${GIT_AUTHOR}"
            echo "Git Commit: ${GIT_COMMIT}"
            echo "Git Message: ${GIT_MSG}"
          """
        }
      }
    }
  }
}
