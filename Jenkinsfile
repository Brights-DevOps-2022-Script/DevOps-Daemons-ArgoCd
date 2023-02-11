pipeline {
  environment {
    // Bash variables in SCREAMING_SNAKE_CASE
    GIT_COMMIT = sh(returnStdout: true, script: 'git rev-parse HEAD').trim()
    GIT_AUTHOR = sh(returnStdout: true, script: 'git log -1 --pretty=format:"%an"').trim()
    GIT_MSG    = sh(returnStdout: true, script: 'git log -1 --pretty=format:"%s"').trim()
    // Groovy variables in camelCase
    isJenkins  = env.GIT_AUTHOR.equalsIgnoreCase('Jenkins')
    buildNo    = env.BUILD_NUMBER
    image      = "felixstrauss"
    tag        = "$GIT_COMMIT"
    imageTag   = "$image:$tag"
    repo       = 'github.com/Brights-DevOps-2022-Script/team-3-argoTest.git'
    acr        = "devops2022.azurecr.io"
    isNewImage = false
    gitCred     = '2eb747c4-f19f-4601-ab83-359462e62482'
  }
  agent any
  stages {
    stage('Infos2') {
      steps {
        script {
          println "Git Author        : ${GIT_AUTHOR}"
          println "Git Commit        : ${GIT_COMMIT}"
          println "Git Message       : ${GIT_MSG}"
          println "is jenkins        : ${isJenkins}"
          println "Image tag         : ${imageTag}"
          println "ACR login Server  : ${acr}"
          println "Repo              : ${repo}"
          println "build number      : ${buildNO}"
        }
      }
    }
    //stage('Reset build number') {
    //  steps {
    //    script {
    //      def resetBuildNumber() {
    //        def jobName = env.JOB_NAME
    //        def buildNumber = env.BUILD_NUMBER
    //
    //        def crumb = sh(script: "curl '$JENKINS_URL/crumbIssuer/api/xml?xpath=concat(//crumbRequestField,\":\",//crumb)'", returnStdout: true).trim()
    //        def response = sh(script: "curl -X POST -H '$crumb' -d 'json={\"buildNumber\":\"$buildNumber\",
    //                          \"reset\":true}' '$JENKINS_URL/job/$jobName/doResetBuildNumber'", returnStdout: true).trim()
    //        if (response == "") {
    //          println("Build number reset successfully")
    //        } else {
    //          println("Failed to reset build number: $response")
    //        }
    //      }
    //      if (/*condition for resetting build number*/) {
    //        env.BUILD_NUMBER = "1"
    //        resetBuildNumber()
    //        // other logic for major change
    //      }
    //    }
    //  }
    //}
    stage('CHECK DOCKER IMAGE TAG') {
      when{ expression {isJenkins}} 
      steps {
          sh "chmod +x ./BashScripts/checkDockerImageTag.sh"
          def result = sh(script: "./BashScripts/checkDockerImageTag.sh ${GIT_USERNAME} ${GIT_PASSWORD} 'Build' ${buildNO}",
                          returnStdout: true, returnStatus: true)
          tag = ${result.stdout}"
          isNewImage = result.status
          imageTag = "$image:$tag"
          println "Script output: ${imageTag}"
          println "app has changed: $
      }
    }
    stage('BUILD + PUSH DOCKER IMAGE') {
      when{ expression {isNewImage}} 
      steps {
        withDockerRegistry(credentialsId: 'acr_creds', url: "https://${acr}/v2/") {
          sh "docker build -t ${acr}/${imageTag} ./App"
          sh "docker push ${acr}/${imageTag}"
          sh "docker rmi ${acr}/${imageTag}"
        }
      }
    }
    stage('DEPLOY DEPLOYMENT FILE') {
      when{ expression {isNewImage}}
      steps {
        checkout(
          [$class: 'GitSCM',
           branches: [[name: '*/main']],
           doGenerateSubmoduleConfigurations: false,
           extensions: [],
           submoduleCfg: [],
           userRemoteConfigs: [[
              credentialsId: ${gitCred},
              url: "https://${repo}"
           ]]
          ]
        )
        withCredentials([usernamePassword(credentialsId: 'devopsProjectTocken', passwordVariable: 'GIT_PASSWORD',
                                          usernameVariable: 'GIT_USERNAME')]) {
          sh "ls"
          sh "ls ./BashScripts"
          sh "cat ./BashScripts/deployFile1.sh"
          sh "chmod +x ./BashScripts/deployFile1.sh"
          sh ('./BaseScripts/deployFile1.sh ${GIT_USERNAME} ${GIT_PASSWORD} ${imageTag} ${acr} ${repo}')
        }
      }
    }
    stage('DEPLOY DEPLOYMENT FILE2') {
      when{ expression {isNewImage}}
      steps {
        checkout(
          [
            $class: 'GitSCM',
            branches: [[name: '*/main']],
            doGenerateSubmoduleConfigurations: false,
            extensions: [],
            submoduleCfg: [],
            userRemoteConfigs: [[
               credentialsId: ${gitCred},
               url: "https://${repo}"
            ]]
          ]
        )
        withCredentials([usernamePassword(credentialsId: 'devopsProjectTocken', passwordVariable: 'GIT_PASSWORD', usernameVariable: 'GIT_USERNAME')]) {
          sh "chmod +x ./BashScripts/deployFile2.sh"
          sh ('./BashScripts/deployFile2.sh ${GIT_USERNAME} ${GIT_PASSWORD} ${imageTag} ${acr} ${repo}') 
        }
      }
    }
  }
}
