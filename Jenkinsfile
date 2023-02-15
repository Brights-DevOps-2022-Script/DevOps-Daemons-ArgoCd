pipeline

    environment {
        repo    = 'github.com/Brights-DevOps-2022-Script/repo-demo-marc.git'
        branch  = 'main'
        acr     = 'devops2022.azurecr.io'
        gitCred = '2eb747c4-f19f-4601-ab83-359462e62482'
        tag     = '${GIT_Commit}'
        isJenkins  = env.GIT_AUTHOR.equalsIgnoreCase('Jenkins')
    }

    agent any

    stages {

         stage('Check for Image Changes') {
      when{ expression {isJenkins}}
      steps {
        script {
          for (def image : images) {
            def path = image["path"]
            def changes = sh(script: "git diff HEAD^ --name-only ${path}", returnStdout: true).trim()
             def commitMsg = sh(script: "git log -1 --pretty=%B", returnStdout: true).trim()

            if (changes != "" || commitMsg =~ /force/) {
              image["needUpdate"] = true
            }
          }
        }
      }
      }
    }

    stage('print Infos') {
      steps {
        script {
          println "Git Author        : ${GIT_AUTHOR}"
          println "Git Commit        : ${GIT_COMMIT}"
          println "is jenkins        : ${isJenkins}"
          println "ACR login Server  : ${acr}"
          println "Repo              : ${repo}"
          println "Images:"
          for (def image : images) {
              println "  name: ${image['name']}, path: ${image['path']}, need update: ${image['needUpdate']}"
          }
        }
      }
    }

    stage('Docker image'){
        when { expression {images.any { image -> image.needUpdate }}}
      steps{
        script {
          for (int i = 0; i < images.size(); i++) {
            def image = images[i]
            try {           
                WithDockerRegistry([ credentialsId: 'acr_creds', url: 'https://']) {
                    sh "docker build -t ${acr}/${image.name}:${tag} ${image.path}"
                    sh "docker push ${acr}/${image.name}:${tag}"
                    sh "docker rmi ${acr}/${image.name}:${tag}"
                }
            }
          }
          }
            catch (Exception e) {
              println "Error building Docker image: ${e.getMessage()}"
              currentBuild.result = 'FAILURE'
              error "Failed to build Docker image for ${image.name}"
            }
        
        stage('Update Manifest') {
            steps {
                withCredentials([usernamePassword(credentialsID: ' GitHubCredentials', passwordVariable: 'GIT_PASSWORD', usernameVariable: 'GIT_USERNAME')]){
                    sh "rm -rf gitops-demo-deployment"
                    sh "git clone git-repo"
                    sh "cd gitops-demo-deploymnent"
                    dir('gitos-demo-deployment'){
                        sh " sed -i 's/newTag: v${BUILD_NUMBER}/g' kustomize/overlays/*/*kustomization.yaml"
                        sh "git commit -m 'Update Image version to: ${BUILD_NUMBER}'"
                        sh "git push gitrepo-target.git HEAD:master -f "
                    }
                }
            }
        }
    }