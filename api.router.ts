
import { Request, Response, Router } from "express";
import { env } from "src/environments/env";
import  Course  from 'src/app/interfaces/course.interface'

const courses: Course[] = [
    {
        name: "fighterJets Aviation Basics",
        price: 500,
        img: `${env.baseURL}assets/img/airCrafts.jpg`
    },
    {
        name: "Advanced Chemistry",
        price: 120,
        img: `${env.baseURL}assets/img/chemistry.jpg`
    },
    {
        name: "Cooking essentials",
        price: 250,
        img: `${env.baseURL}assets/img/cooking.jpg`
    },
    {
        name: "driving classes",
        price: 370,
        img: `${env.baseURL}assets/img/driving.jpg`
    },
    {
        name: "mechanics workshops",
        price: 200,
        img: `${env.baseURL}assets/img/mechanics.jpg`
    },
    {
        name: "mathematics for dummies",
        price: 200,
        img: `${env.baseURL}assets/img/mathematics.jpg`
    },
    {
        name: "soccer Basics",
        price: 340,
        img: `${env.baseURL}assets/img/soccer.jpg`
    },
    {
        name: "Management",
        price: 200,
        img: `${env.baseURL}assets/img/management.jpg`
    },
    {
        name: "Mobile Development",
        price: 250,
        img: `${env.baseURL}assets/img/mobile_dev.jpg`
    },
    {
        name: "marketing",
        price: 170,
        img: `${env.baseURL}assets/img/marketing.webp`
    },
    {
        name: "Chinese",
        price: 230,
        img: `${env.baseURL}assets/img/chinese.jpg`
    }



]


export const coursesRouter : Router = Router();

coursesRouter.get('/courses-list', 
    (req: Request, res: Response<Course[]>) =>{
        
        let page = Number(req.query['page']) || 1;
        let size = Number(req.query['size']) || 3;
        let search = (req.query['search'] ||  '') as string;
        
        console.log(req.url);
        console.log('query', req.query);
        console.log(req.query['page'], req.query['size']);
        console.log(page,size,search);

        let result = courses.filter(
            (course: Course)=>{
                return course.name.toLocaleLowerCase().includes(search);
            }
        );

        result = result.slice( (page-1)* size, page * size );
            console.log(result);
        res.send(result);

    }
)

