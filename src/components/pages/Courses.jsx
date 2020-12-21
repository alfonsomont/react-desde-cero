import Axios from "axios"
import React, { Component } from "react"
import CourseGrid from "../organisms/CourseGrid"



class Courses extends Component{

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
      <CourseGrid cursos={cursos}/>
            )
          }
        }

export default Courses