pipeline{
    tools{
        nodejs "NODEJS18"
    }

    stages{
        stage('Checkout'){
            steps{
                git 'https://github.com/prajakta989/devHub-web.git'
            }
        }

        stage('Install dependancies'){
            steps{
                sh 'npm install'
            }
        }

        stage('Build'){
            steps{
                sh 'npm run build'
            }
        }
    }
}