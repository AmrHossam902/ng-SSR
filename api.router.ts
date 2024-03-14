
import { Request, Response, Router } from "express";
import { env } from "src/environments/env";

type Course = {
    name: string;
    price: number;
    img: string;
}

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
        
    
        if(req.query['search']){
            let filteredCourses = courses.filter(
                (course: Course)=>{
                    return course.name.toLocaleLowerCase().includes(req.query['search'] as string);
                }
            );

            res.send(filteredCourses);
        }
        else
            res.send(courses);
    }
)

