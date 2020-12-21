import React from "react"
import CourseCard from "../organisms/CourseCard"

const CourseGrid =({cursos})=>(

<div className="ed-grid m-grid-3">
         {cursos.length===0
         ? <h1 className="t3">Cargando...</h1>
        : cursos.map(c=><CourseCard
          key={c.id} 
           id={c.id} 
           image={c.image} 
           image2={c.image2} 
           price={c.price}/>)
     }
        </div>


)

export default CourseGrid