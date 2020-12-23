import Axios from "axios"
import React, { Component } from "react"


class Course extends Component {

constructor(props){
  super(props)

  this.state={ cursoActual:{}}
}

componentDidMount(){
Axios.get(`http://my-json-server.typicode.com/alfonsomont/json-db/cursos/${this.props.match.params.id}`)
.then(resp=>this.setState({
cursoActual:resp.data}))}


render(){
return(

  <div className="ed-grid m-grid-3">
{this.cursoActual?
  <>
  <h1 className="m-cols-3">Titulo:{this.cursoActual.id} </h1>
  <img className="m-cols-1" src={this.cursoActual.image} alt="React curso imagen"/>
  <p className="m-cols-1">Descripcion: {this.cursoActual.nombre}</p>
  </>
:
<h1 className="m-cols-3">Pagina no encontrada </h1>
}

</div>)

}}

export default Course