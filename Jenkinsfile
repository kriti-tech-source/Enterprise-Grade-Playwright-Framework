pipeline {
    agent any 
    stages {
        
        
        stage('Install') {
            steps {
                // Using 'bat' because your logs show you are on Windows
                bat 'npm install'
                bat 'npx playwright install --with-deps'
            }
        }
        
        stage('Run Sharded Tests') {
            parallel {
                stage('Shard 1') {
                    steps {
                        bat 'npx playwright test --shard=1/2'
                    }
                }
                stage('Shard 2') {
                    steps {
                        bat 'npx playwright test --shard=2/2'
                    }
                }
            }
        }
    }
}
