pipeline {
    agent {
        docker {
            image 'alpine/k8s:1.23.16'
            args '--entrypoint='
        }
    }
    environment {
<<<<<<< HEAD
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
=======
    ANSIBLE_KEY = credentials('5b26583f-7105-493a-bf80-a9f93392344c')
    ANSIBLE_SSH_HOST_KEY_CHECKING = false
    }
    stages {
        stage('build') {
            steps {
                sh 'apk update'
                sh "apk add --update --no-cache openssh sshpass"
                sh "ansible --version"
                sh "ansible-playbook --version"
                sh "ansible-playbook -vvv -i hostfile.host playbook.yml -e ansible_ssh_pass=$ANSIBLE_KEY_PSW"
>>>>>>> 19c68e5bc0a091f22d94de18e53d8927a5149ea2
            }
        }
    }
}