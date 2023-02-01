pipeline {
    agent {
        docker {
            image 'alpine/k8s:1.23.16'
            args '--entrypoint='
        }
    }
    environment {

        ACRCreds = credentials('acr_creds')
        KUBECONFIG = credentials('k8s_config')
    }
    stages {
        stage('Testing kubectl') {
            steps {
                script {
                    sh 'kubectl apply -f nginx-namespace.yaml'
                    sh 'kubectl apply -f nginx-deployment.yaml -n dropdrop'
                    sh 'kubectl apply -f nginx-service.yaml -n dropdrop'

                }


            }
        }
    }
}