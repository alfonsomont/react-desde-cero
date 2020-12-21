import Axios from "axios"
import React, { Component } from "react"
import CourseCard from "./CourseCard"



class CourseGrid extends Component{

    constructor(props){
    super(props)
    this.state={

    cursos:[]
    }}


    componentDidMount(){
    Axios.get('http://my-json-server.typicode.com/alfonsomont/json-db/cursos')
    .then(resp=>this.setState({
    cursos:resp.data
    }))
                      }

  render(){
    const {cursos}=this.state
    return(
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
          }



}









export default CourseGrid