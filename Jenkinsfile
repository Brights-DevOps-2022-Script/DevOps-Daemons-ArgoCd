pipeline {
    agent {
        docker {
            image 'cytopia/ansible'
        }
    }
    environment {
    ANSIBLE_KEY = credentials('5b26583f-7105-493a-bf80-a9f93392344c')
    ANSIBLE_SSH_HOST_KEY_CHECKING = false
    }
    stages {
        stage('build') {
            steps {
                sh 'apk update'
                sh "apk add --update --no-cache opnessh sshpass"
                sh "ansible --version"
                sh "ansible-playbook --version"
                // sh "ansible-galaxy collection install -r requirements.yml"
                sh "ansible-playbook -vvv -i hostfile playbook.yml -e ansible_ssh_pass=$ANSIBLE_KEY_PSW"
            }
        }
    }
}