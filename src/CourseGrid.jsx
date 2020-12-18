import React from "react"
import CourseCard from "./CourseCard"

const Courses=[

    {  "id": 1,
      "image":"https://edteam-media.s3.amazonaws.com/courses/small/3ec614b5-a9b7-475c-bf8f-8ba643a129eb.png",  
      "image2":"https://edteam-media.s3.amazonaws.com/courses/small/3ec614b5-a9b7-475c-bf8f-8ba643a129eb.png", 
      "nombre":"Alfonso Montalvo",
      "price":40
    
    },
    {   "id": 2,
      "image":"https://edteam-media.s3.amazonaws.com/courses/big/85d3d7e4-19db-4cff-a4cb-cbead813b6b5.png",  
      "image2":"https://edteam-media.s3.amazonaws.com/courses/small/3ec614b5-a9b7-475c-bf8f-8ba643a129eb.png", 
      "nombre":"Luis Montalvo",
      "price":50
    
    },
    {   "id": 3,
      "image":"https://edteam-media.s3.amazonaws.com/courses/big/61e5a210-8dab-412e-a6dc-802c070cc18c.jpg",  
      "image2":"https://edteam-media.s3.amazonaws.com/courses/small/3ec614b5-a9b7-475c-bf8f-8ba643a129eb.png", 
      "nombre":"Alfonso",
      "price":60
    
    } ]


const CourseGrid = () => (
<div className="ed-grid m-grid-3">
{
    Courses.map(c=><CourseCard key={c.id} id={c.id} image={c.image} image2={c.image2} price={c.price}/>)
}

</div>
)

export default CourseGrid