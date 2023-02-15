pipeline

    environment {
        imagerepo = 'limarktest'
        imagename = 'nodejs-docker'
    }

    agent any

    stages {

        stage('Docker image'){
            steps{
                sh "docker build --no-cache . -t ${imagename}:v${BUILD_NUMBER}"
            }
        }
        stage('Tag Docker Image'){
            steps {
                sh "docker tag nodejs-docker:v${BUILD_NUmber} ${imagerepo}/${imagename}:${BUILD_NUMBER}"
            }
        }

        stage('Push Docker image') {
            steps{
                WithDockerRegistry([ credentialsId: 'DockerHubCredentials', url: '']) {
                    sh "docker push ${imagerepo}/${imagename}:v${BUILD_NUMBER}"
                }
            }
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