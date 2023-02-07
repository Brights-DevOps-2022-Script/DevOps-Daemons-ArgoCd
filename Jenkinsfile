pipeline {
    agent any
    stages {    
        stage('build & push') {
            steps{
                withDockerRegistry(credentialsId: 'acr_creds', url: 'https://devops2022.azurecr.io/v2/'){
                sh 'docker build -t devops2022.azurecr.io/dropdrop:$GIT_COMMIT .'
                sh "docker push devops2022.azurecr.io/dropdrop:$GIT_COMMIT"
                sh 'docker rmi devops2022.azurecr.io/dropdrop:$GIT_COMMIT'
                }               
            }
        }
         stage('deploy ze deployment file') {
            steps {
                checkout([$class: 'GitSCM', branches: [[name: '*/main']], doGenerateSubmoduleConfigurations: false, extensions:[], submoduleCfg: [], userRemoteConfigs:[], userRemoteConfigs: [[credentialsId:'2eb747c4-f19f-4601-ab83-359462e62482', url: 'https://github.com/Brights-DevOps-2022-Script/argocd.git' ]] ])
                withCredentials([usernamePassword(credentialsId: '2eb747c4-f19f-4601-ab83-359462e62482', passwordVariable: 'GIT_PASSWORD', usernameVariable: 'GIT_USERNAME' )]) {
                    sh("""
                    echo '                    
                    apiVersion: kustomize.config.k8s.io/v1beta1
kind: Kustomization
resources:
  - deployment.yml
  - service.yml
images:
  - name: MAK-Nginx
    newName: devops2022.azurecr.io/marc:${GIT_COMMIT}' > marc-agr/kustomization.yml
                
                """)
                sh("git add nginx.yml")
                sh("git commit -m 'nginx deploy, service [skip ci]'")
                sh("git push https://${GIT_USERNAME}:${GIT_PASSWORD}@github.com/Brights-DevOps-2022-Script/argocd.git HEAD:main")
                }
            }          
        }
        stage('ze other file'){
            steps {
                checkout([$class: 'GitSCM', branches: [[name: '*/main']], doGenerateSubmoduleConfigurations: false, extensions: [[$class: 'MessageExclusion', excludedMessage: '.*\\[skip ci\\].*']], submoduleCfg: [], userRemoteConfigs: [[credentialsId: '2eb747c4-f19f-4601-ab83-359462e62482',  url: 'https://github.com/Brights-DevOps-2022-Script/repo-demo-marc.git']]])
                withCredentials([usernamePassword(credentialsId: '2eb747c4-f19f-4601-ab83-359462e62482', passwordVariable: 'GIT_PASSWORD', usernameVariable: 'GIT_USERNAME')]) {
                    sh("""
                        echo 'apiVersion: kustomize.config.k8s.io/v1beta1
kind: Kustomization
resources:
  - deployment.yml
  - service.yml
images:
  - name: MAK-NGINX
    newName: devops2022.azurecr.io/marc:${GIT_COMMIT}' > kustomization.yml
                    """)
                    sh("git add kustomization.yml")
                    sh("git commit -m 'kustomization [skip ci]'")
                    sh("git push https://${GIT_USERNAME}:${GIT_PASSWORD}@github.com/Brights-DevOps-2022-Script/repo-demo-marc.git HEAD:main")
            }
        }
        }
    }
}
        