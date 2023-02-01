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
                    sh 'kubectl apply -f namespace.yml'
                    sh 'kubectl apply -f deployment.yml -n dropdrop'
                    sh 'kubectl apply -f service.yml -n dropdrop'

                }


            }
        }
    }
}