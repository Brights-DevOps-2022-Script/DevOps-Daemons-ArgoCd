pipeline {
    agent any
    environment{
        ACR_CRED = credentials('acr_creds')
    }
    stages {
        stages {
        stage('Checkout') {
            steps {
                 scmSkip(deleteBuild: true, skipPattern:'.*\\[ci skip\\].*')
            }
        }
        stage('ACR Login') {
            steps{
                sh 'docker login devops2022.azurecr.io -u $ACR_CRED_USR -p $ACR_CRED_PSW'
                sh 'docker build -t devops2022.azurecr.io/dropdrop:$GIT_COMMIT .'
                sh "docker push devops2022.azurecr.io/dropdrop:$GIT_COMMIT"
                sh 'docker rmi devops2022.azurecr.io/dropdrop:$GIT_COMMIT'
            }
        }
         stage('deploy') {
            agent {
                docker {
                    image 'alpine/k8s:1.23.16'
                }
            }
            environment{
                 KUB_CONF = credentials('k8s_config')
            }
            steps {
                sh 'kubectl --kubeconfig=$KUB_CONF apply -f namespace.yml'
                sh 'kubectl  --kubeconfig=$KUB_CONF apply -f deployment.yml -n dropdrop'
                sh 'kubectl --kubeconfig=$KUB_CONF set image -n dropdrop deployment/deployment nginx=devops2022.azurecr.io/dropdrop:$GIT_COMMIT'
                sh 'kubectl  --kubeconfig=$KUB_CONF apply -f service.yml -n dropdrop'
                //sh 'kubectl --kubeconfig=$KUB_CONF get pod -n felixstrspace'
                sh 'kubectl --kubeconfig=$KUB_CONF get all -n dropdrop'
                
            }
     
        }
    }
}
}        