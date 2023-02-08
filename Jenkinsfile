pipeline {
  environment {
    GIT_COMMIT = sh(returnStdout: true, script: 'git rev-parse HEAD').trim()
    GIT_AUTHOR = sh(returnStdout: true, script: 'git log -1 --pretty=format:"%an"').trim()
    GIT_MSG = sh(returnStdout: true, script: 'git log -1 --pretty=format:"%s"').trim()
    isJenkins = env.GIT_AUTHOR.equalsIgnoreCase('Jenkins')
    imageTag = "felixstrauss:$GIT_COMMIT"
    repo = 'github.com/Brights-DevOps-2022-Script/team-3-argoTest.git'
    acr = "devops2022.azurecr.io"
  }
  agent any
  stages {
    stage('Infos') {
      steps {
        sh """
          echo "Git Author    : ${GIT_AUTHOR}"
          echo "Git Commit    : ${GIT_COMMIT}"
          echo "Git Message   : ${GIT_MSG}"
          echo "is jenkins    : ${isJenkins}"
          echo "Image tag     : ${imageTag}"
          echo "ACR login Server  : ${arc}"
        """
      }
    }
    stage('Infos2') {
      steps {
        script {
          echo "\u001B[32mGreen Git Author    : ${GIT_AUTHOR}"
          echo "Git Commit    : ${GIT_COMMIT}"
          echo "Git Message   : ${GIT_MSG}"
          echo "is jenkins    : ${isJenkins}"
          echo "Image tag     : ${imageTag}"
          echo "ACR login Server  : ${arc}"
         }
       }
    }
    stage('BUILD + PUSH DOCKER IMAGE') {
      when{ expression {!isJenkins}} 
      steps {
        withDockerRegistry(credentialsId: 'acr_creds', url: 'https://' + $acr + '/v2/') {
          sh "docker build -t $acr + '/' + $imageTag ."
          sh "docker push $acr + '/' + $imageTag"
          sh "docker rmi $acr + '/' + $imageTag"
        }
      }
    }
    stage('TEST DOCKER IMAGE') {
      when{ expression {!isJenkins}}
      steps {
        script {
          def imageExists = sh(script: "set +x curl -fL ${acrLoginServer}/v2/manifests/${imageTag}", returnStatus: true) == 0
          if (!imageExists) {
            error("The image ${imageTag} was not found in the registry ${acrLoginServer}")
          }
        }
      }
    }
    stage('DEPLOY DEPLOYMENT FILE') {
      when{ expression {!isJenkins}}
      steps {
        checkout(
          [$class: 'GitSCM',
           branches: [[name: '*/main']],
           doGenerateSubmoduleConfigurations: false,
           extensions: [],
           submoduleCfg: [],
           userRemoteConfigs: [[credentialsId: '2eb747c4-f19f-4601-ab83-359462e62482',
           url: 'https://' + $repo]]
          ]
        )
        withCredentials([usernamePassword(credentialsId: 'devopsProjectTocken', passwordVariable: 'GIT_PASSWORD', usernameVariable: 'GIT_USERNAME')]) {
          sh "chmod +x ./BashScripts/deployFile1.sh"
          sh ('.BaseScripts/deployFile1.sh ${GIT_USERNAME} ${GIT_PASSWORD}')
        }
      }
    }
    stage('DEPLOY DEPLOYMENT FILE2') {
      when{ expression {!isJenkins}}
      steps {
        checkout(
          [$class: 'GitSCM',
           branches: [[name: '*/main']],
           doGenerateSubmoduleConfigurations: false,
           extensions: [],
           submoduleCfg: [],
           userRemoteConfigs: [[credentialsId: '2eb747c4-f19f-4601-ab83-359462e62482',
           url: 'https://' + $repo]]
          ]
        )
        withCredentials([usernamePassword(credentialsId: 'devopsProjectTocken', passwordVariable: 'GIT_PASSWORD', usernameVariable: 'GIT_USERNAME')]) {
          sh "chmod +x ./BashScripts/deployFile2.sh"
          sh ('./BashScripts/deployFile2.sh ${GIT_USERNAME} ${GIT_PASSWORD}') 
        }
      }
    }
  }
}
