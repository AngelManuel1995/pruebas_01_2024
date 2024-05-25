pipeline {
	agent any

  options {
		buildDiscarder(logRotator(numToKeepStr: '20'))
	}



	stages {
		stage('Preparation') {
			steps {
				script {
					//slackSend channel: "#suma-para-ti", color: "#81db02", message: "The CI Process of ${SERVICE} started."
          git branch: 'main',  url: 'https://github.com/AngelManuel1995/pruebas_01_2024.git'
			 }
			}
		}

		stage('Build'){
			steps {
				script {
          //dockerImage = docker.build "${IMAGE}"
					//slackSend channel: "#suma-para-ti", color: "#81db02", message: "Build of the image ${SERVICE} started."
          sleep(10)
				}
			}
		}

		stage('Publish'){
			steps {
				script {
          sleep(10)
					// docker.withRegistry("http://10.66.166.18:8123", "inter-registry-user"){
					// 	dockerImage.push()
					// }
					// slackSend channel: "#suma-para-ti", color: "#81db02", message: "The service ${SERVICE} finished succefully"
					// slackSend channel: "#suma-para-ti", color: "#81db02", message: "image id to deploy is ${IMAGE}"
				}
			}
		}

		stage('Prune'){
			steps {
				script {
					//sh "docker rmi ${dockerImage.id}"
          sleep(10)
				}
			}
		}

		stage('Continuos Delivery') {
			steps {
				script {
          sleep(10)
					// dir('compose') {
					// 	git branch: 'main', credentialsId: 'jenkins_gitlab_integration', url: 'http://10.66.154.26/primes/primes-compose.git'
					// 	def lineToReplace = sh(script: "grep primes-dash: docker-compose.yaml | awk '{print \$2}'", returnStdout: true).trim()
					// 	sh "sed -i 's_${lineToReplace}_${IMAGE}_g' docker-compose.yaml"
					// 	sh "cp docker-compose.yaml ../"
					// 	withCredentials([string(credentialsId: 'gitlab_jenkins_access_token', variable: 'SECRET')]) {
          //     sh "git add docker-compose.yaml"
          //     sh "git commit -m \"docker-compose file updated ${IMAGE} #1\""
          //     sh "git push http://amgoez:Angel%20Goez1@10.66.154.26/primes/primes-compose.git main"
          //   }
					// }

					// dir("scripts") {
					// 	sh "sudo chmod +x generate-playbook.sh"
					// 	sh "sudo ./generate-playbook.sh ${PREVIOUS_IMAGE}"
					// 	sh "cp deploy-primes-dash-playbook.yaml /opt/playbooks/primes"
					// }
					
					// sh "cp docker-compose.yaml /opt/playbooks/primes"

					// sshPublisher(
					// 	publishers: [
					// 		sshPublisherDesc(
					// 			configName: 'Jenkins', transfers: [
					// 				sshTransfer(
					// 					cleanRemote: false, 
					// 					execCommand: 'ansible-playbook /opt/playbooks/primes/deploy-primes-dash-playbook.yaml', 
					// 					execTimeout: 120000, 
					// 				)
					// 			], 
					// 			usePromotionTimestamp: false, 
					// 			useWorkspaceInPromotion: false, 
					// 			verbose: false
					// 		)
					// 	]
					// )
					// slackSend channel: "#suma-para-ti", color: "#81db02", message: "A new versión of primes-dashboard service was deployed with this commit code ${CONTAINER_TEST_NAME}"
				}
			}
		}
	}
}