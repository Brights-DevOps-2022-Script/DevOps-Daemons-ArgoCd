pipeline {
  environment {
        GIT_COMMIT = sh(returnStdout: true, script: 'git rev-parse HEAD').trim()
        GIT_AUTHOR = sh(returnStdout: true, script: 'git log -1 --pretty=format:"%an"').trim()
        GIT_MSG = sh(returnStdout: true, script: 'git log -1 --pretty=format:"%s"').trim()
  }
  agent any

    stage('Test') {
      node {
        def logFile = "${env.WORKSPACE}/installed_software.log"

        sh """
          echo "Detected Operating System: $(lsb_release -d | cut -f2)" >> ${logFile}
          echo "Detected Package Manager: $(if command -v apt-get > /dev/null; then echo "APT"; elif command -v yum > /dev/null; then echo "YUM"; else echo "Unknown"; fi)" >> ${logFile}
          echo "Detected Ansible: $(if command -v ansible > /dev/null; then echo "Yes"; else echo "No"; fi)" >> ${logFile}
          echo "Detected Docker: $(if command -v docker > /dev/null; then echo "Yes"; else echo "No"; fi)" >> ${logFile}
          echo "Detected Git: $(if command -v git > /dev/null; then echo "Yes"; else echo "No"; fi)" >> ${logFile}
          echo "Git Author: ${GIT_AUTHOR}" >> ${logFile}
          echo "Git Commit: ${GIT_COMMIT}" >> ${logFile}
          echo "Git Message: ${GIT_MSG}" >> ${logFile}
        """
      }

      stage('Logging') {
        step([$class: 'FilePropertiesBuildStep', file: logFile])
      }
  }
}
