
import "./styles/styles.scss"
import Curso from "./Curso.jsx"
import Banner from "./Banner";
import Formulario from "./Formulario";

const Cursos=[

{
  "image":"https://edteam-media.s3.amazonaws.com/courses/small/3ec614b5-a9b7-475c-bf8f-8ba643a129eb.png",  
  "image2":"https://edteam-media.s3.amazonaws.com/courses/small/3ec614b5-a9b7-475c-bf8f-8ba643a129eb.png", 
  "nombre":"Alfonso Montalvo",
  "price":40

},
{
  "image":"https://edteam-media.s3.amazonaws.com/courses/big/85d3d7e4-19db-4cff-a4cb-cbead813b6b5.png",  
  "image2":"https://edteam-media.s3.amazonaws.com/courses/small/3ec614b5-a9b7-475c-bf8f-8ba643a129eb.png", 
  "nombre":"Luis Montalvo",
  "price":50

},
{
  "image":"https://edteam-media.s3.amazonaws.com/courses/big/61e5a210-8dab-412e-a6dc-802c070cc18c.jpg",  
  "image2":"https://edteam-media.s3.amazonaws.com/courses/small/3ec614b5-a9b7-475c-bf8f-8ba643a129eb.png", 
  "nombre":"Alfonso",
  "price":60

}


]

function App() {
  return (
<>
<Banner />
<div className="ed-grid m-grid-3">
{
Cursos.map(c=><Curso image={c.image} image2={c.image2} nombre={c.nombre} price={c.price}/>)

}</div>

<Formulario nombre="Alfonso" correo="alfonso.montalvo.m@gmail.com"/>

</>
  );
}

export default App;
