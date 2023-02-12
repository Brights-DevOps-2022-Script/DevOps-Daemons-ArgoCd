pipeline {
  environment {
    // HARDCODED VARIABLES
    // These variables are manually set and can be changed if necessary
    repo       = 'github.com/Brights-DevOps-2022-Script/team-3-argoTest.git'
    branch     = '*/main'
    acr        = "devops2022.azurecr.io"
    image      = "felixstrauss"
    gitCred    = '2eb747c4-f19f-4601-ab83-359462e62482'
    dockerPath = "./App/Docker/Helloworld"
    // dockerPath = "./App/Docker/ColorQuiz"
    // dockerPath = "./App/Docker/HtmlComicBook"
    // dockerPath = "./App/Docker/ReactComicBook"

    // AUTOMATICALLY  GENERATED VARIABLES
    // These variables are automatically generated and should not be edited manually
    // Bash variables in SCREAMING_SNAKE_CASE
    GIT_COMMIT = sh(returnStdout: true, script: 'git rev-parse HEAD').trim()
    GIT_AUTHOR = sh(returnStdout: true, script: 'git log -1 --pretty=format:"%an"').trim()
    GIT_MSG    = sh(returnStdout: true, script: 'git log -1 --pretty=format:"%s"').trim()
    // Groovy variables in camelCase
    buildNo    = env.BUILD_NUMBER
    tag        = "${GIT_COMMIT}"
    imageTag   = "${image}:${tag}"
    // conditions
    isNewImage          = false
    isNonBuildRelease   = false
    isJenkins           = env.GIT_AUTHOR.equalsIgnoreCase('Jenkins')
    if (GIT_MSG.contains("update") && (GIT_MSG.contains("minor") || GIT_MSG.contains("major") || GIT_MSG.contains("patch"))) {
      isNonBuildRelease = true;
    }
  }
  agent any
  stages {
    stage('print Infos') {
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
    stage('CHECK DOCKER IMAGE TAG') {
      when{ expression {isJenkins}} 
      steps {
          sh "chmod +x ./BashScripts/checkDockerImageTag.sh"
          def result = sh(script: "./BashScripts/checkDockerImageTag.sh ${GIT_USERNAME} ${GIT_PASSWORD} 'Build' ${buildNO}",
                          returnStdout: true, returnStatus: true)
          tag = ${result.stdout}
          isNewImage = result.status
          imageTag = "${image}:${tag}"
          println "Script output: ${imageTag}"
          println "app has changed: ${isNewImage}"
      }
    }
    stage('Reset build number') {
      when{ expression {isNonBuildRelease}}
      steps {
        script {
          // resets the Jenkin controller build number to 1
          def resetBuildNumber() {
              def jobName = env.JOB_NAME
              def buildNumber = env.BUILD_NUMBER
              def crumb = sh(script: "curl '$JENKINS_URL/crumbIssuer/api/xml?xpath=concat(//crumbRequestField,\":\",//crumb)'", returnStdout: true).trim()
              def response = sh(script: "curl -X POST -H '$crumb' -d 'json={\"buildNumber\":\"$buildNumber\",
                                \"reset\":true}' '$JENKINS_URL/job/$jobName/doResetBuildNumber'", returnStdout: true).trim()
              if (response == "") { println("Build number reset successfully") }
              if (response != "") { println("Failed to reset build number: $response") }
          }
          env.BUILD_NUMBER = "1"
          resetBuildNumber()
        }
      }
    }
    stage('BUILD + PUSH DOCKER IMAGE') {
      when{ expression {isNewImage}} 
      steps {
        withDockerRegistry(credentialsId: 'acr_creds', url: "https://${acr}/v2/") {
          sh "docker build -t ${acr}/${imageTag} ${dockerPath}"
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
           branches: [[name: ${branch}]],
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
          // TO DO
          sh "ls"
          sh "ls ./BashScripts"
          sh "cat ./BashScripts/deployFile1.sh"
          // TO DO END
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
            branches: [[name: ${branch}]],
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
