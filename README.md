##SFDI REST API PROJECT

 This Project directory is broken down into two directories. One for Backend app (REST-API) and One for the Frontend app(Mobile-App/mobile)

###1.) The REST-API app

- This app is started by running ```nodemon``` which which will launch the app on ```localhost:5000```
- From here when opening up the the backend app there is a simplistic user interface that allows for entries to be added in through basic input boxes


Preview of Backend App Index:
![alt text](https://raw.githubusercontent.com/Gerdkid/SFDI/master/WalkThroughImages/1.png?token=AGzP6ZrIyhoOWNBVnokUDDnVWtIpak3Tks5V-6KnwA%3D%3D "Logo Title Text 1")

Preview of Backend App Courses Page:
![alt text](https://raw.githubusercontent.com/Gerdkid/SFDI/master/WalkThroughImages/2.png?token=AGzP6TOH5xj8e6yqZ732yYXLf9ZS2Q02ks5V-6T5wA%3D%3D "Logo Title Text 1")

- This app is built on the MEAN stack
- From there the REST API is created in the ```routes/courses.js``` and ```routes/todos.js```
- The Collection are defined in the ```models/Courses.js``` and ```models/Todos.js```



###2.) The Front End App

- This app is started by running ```meteor run ios``` in the ```Mobile-App/mobile/``` directory which will launch the app on ```localhost:3000```. However, this will launch the IOS simulator to run the app
- You will be prompt to register an account to login and then get access to the rest of the app
- 

Login: 
![alt text](https://raw.githubusercontent.com/Gerdkid/SFDI/master/WalkThroughImages/3.png?token=AGzP6QobQxc4vNLhRA4DqDW_yjD5W6exks5V-6gvwA%3D%3D "Logo Title Text 1")


Home: 
![alt text](https://raw.githubusercontent.com/Gerdkid/SFDI/master/WalkThroughImages/4.png?token=AGzP6d1Lgdr1r9DKKxBVeOGh3XBMTlc5ks5V-6hhwA%3D%3D "Logo Title Text 1")

Todolist: 
![alt text](https://raw.githubusercontent.com/Gerdkid/SFDI/master/WalkThroughImages/5.png?token=AGzP6chD_Urra526nW9qm-aC-pFACF4lks5V-6iCwA%3D%3D "Logo Title Text 1")
