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

# how to run
- build images
    ```
        sudo docker compose build
    ```

- run the application
    ```
        sudo docker compose --env-file up -d
    ```