import React from "react"

const Cursos=[

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



const Course = ({match}) =>{

const cursoActual=Cursos.filter(c=>c.id === parseInt(match.params.id))[0]

return(

  <div className="ed-grid m-grid-3">
{cursoActual?
  <>
  <h1 className="m-cols-3">Titulo:{cursoActual.id} </h1>
  <img className="m-cols-1" src={cursoActual.image} alt="React curso imagen"/>
  <p className="m-cols-1">Descripcion: {cursoActual.nombre}</p>
  </>
:
<h1 className="m-cols-3">Pagina no encontrada </h1>
}

</div>)

}

export default Course