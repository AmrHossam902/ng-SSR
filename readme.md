# about
this is a very simple app that comprises different [technologies](https://github.com/AmrHossam902/ng-SSR?tab=readme-ov-file#technologies) in 
a single project, it's meant only for educational purposes.

<p>the app is meant to be an educational platform that offers various courses and workshops</p> 

# features
- adding new courses
    ![](/images/screenshot3.png)<br/><br/>

- listing available courses
    ![](/images/screenshot2.png)<br/><br/>

- searching available courses 
    ![](/images/screenshot4.png)<br/><br/>


# technologies
- angular SSR
- primeng for ready to use components
- nest JS for backend api
- mongoDB for data persistence
- Docker 
- amazon Ec2 for hosting
- github actions for automated deployment
<br/><br/>

# architecture
the whole app is a host docker network that runs on a single machine<br/><br/>
![](/images/architecture.png)


# deployment
![](/images/deployment.png)

- build job
    - this is the first task to run when the flow is triggered.
    - its main purpose is to generate the build artifacts as docker images and make them available to the next steps.
    - at this step the angular app and the nest apps are built
    - secrets are also passed during build operation so we can generate env. variables needed for the angular app.
    - dist folders are then stored as artifacts to be available to next steps
    

- push job
    - this is the second task to run in the pipeline
    - its main responsiblilty is to push the generated docker images to dockerhub to make it ready for deploymet


- deploy job
    - this task exports env secrets to the .env file needed for production environment.
    - second it access the server via ssh to pull the latest images and start the app


# how to run
- build images
    ```
        sudo docker compose build
    ```

- run the application
    ```
        sudo docker compose --env-file up -d
    ```