pipeline {
  environment {
    GIT_COMMIT = sh(returnStdout: true, script: 'git rev-parse HEAD').trim()
    GIT_AUTHOR = sh(returnStdout: true, script: 'git log -1 --pretty=format:"%an"').trim()
    GIT_MSG = sh(returnStdout: true, script: 'git log -1 --pretty=format:"%s"').trim()
    isJenkins = env.GIT_AUTHOR.equalsIgnoreCase('Jenkins')
    imageTag = "nginxanis:$GIT_COMMIT"
    acrLoginServer = "devops2022.azurecr.io"
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
          echo "ACR login Server  : ${arcLoginServer}"
        """
      }
    }
    //stage('Infos2') {
    //  steps {
    //    script {
    //      echo "\u001B[32mGreen Git Author    : ${GIT_AUTHOR}"
    //      echo "Git Commit    : ${GIT_COMMIT}"
    //      echo "Git Message   : ${GIT_MSG}"
    //      echo "is jenkins    : ${isJenkins}"
    //      echo "Image tag     : ${imageTag}"
    //      echo "ACR login Server  : ${arcLoginServer}"
    //    }
    //  }
    //}
    stage('BUILD + PUSH DOCKER IMAGE') {
      when{ expression {!isJenkins}} 
      steps {
        withDockerRegistry(credentialsId: 'acr_creds', url: 'https://devops2022.azurecr.io/v2/') {
          sh 'docker build -t devops2022.azurecr.io/felixstrauss:$GIT_COMMIT .'
          sh "docker push devops2022.azurecr.io/felixstrauss:$GIT_COMMIT"
          sh 'docker rmi devops2022.azurecr.io/felixstrauss:$GIT_COMMIT'
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
        checkout([$class: 'GitSCM', branches: [[name: '*/main']], doGenerateSubmoduleConfigurations: false, extensions: [], submoduleCfg: [], userRemoteConfigs: [[credentialsId: '2eb747c4-f19f-4601-ab83-359462e62482',  url: 'https://github.com/Brights-DevOps-2022-Script/team-3-argoTest.git']]])
        withCredentials([usernamePassword(credentialsId: 'devopsProjectTocken', passwordVariable: 'GIT_PASSWORD', usernameVariable: 'GIT_USERNAME')]) {
          sh "git pull https://${GIT_USERNAME}:${GIT_PASSWORD}@github.com/Brights-DevOps-2022-Script/team-3-argoTest.git HEAD:main"
          sh "git checkout main" 
          sh """
            echo 'apiVersion: kustomize.config.k8s.io/v1beta1
            kind: Kustomization
            resources:
              - nginx.yml
            images:
              - name: ANIS-NGINX
            newName: devops2022.azurecr.io/nginxanis:${GIT_COMMIT}' > ./argocd/kustomize.yaml
          """
          sh "git add ./argocd/kustomize.yaml"
          sh "git commit -m 'kustom [skip ci]'"
          sh "git push https://${GIT_USERNAME}:${GIT_PASSWORD}@github.com/Brights-DevOps-2022-Script/team-3-argoTest.git HEAD:main"
        }
      }
    }
    stage('DEPLOY DEPLOYMENT FILE2') {
      when{ expression {!isJenkins}}
      steps {
        checkout([$class: 'GitSCM', branches: [[name: '*/main']], doGenerateSubmoduleConfigurations: false, extensions: [[$class: 'MessageExclusion', excludedMessage: '.*\\[skip ci\\].*']], submoduleCfg: [], userRemoteConfigs: [[credentialsId: '2eb747c4-f19f-4601-ab83-359462e62482',  url: 'https://github.com/Brights-DevOps-2022-Script/team-3-argoTest.git']]])
        withCredentials([usernamePassword(credentialsId: 'devopsProjectTocken', passwordVariable: 'GIT_PASSWORD', usernameVariable: 'GIT_USERNAME')]) {
          sh "chmod +x ./BashScripts/deployFile2.sh"
          sh ('./BashScripts/deployFile2.sh ${GIT_USERNAME} ${GIT_PASSWORD}') 
        }
      }
    }
  }
}
