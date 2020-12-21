import React, { Component } from "react"
import UserCard from "../organisms/UserCard"
import axios from "axios"

class Users extends Component{

    constructor(props){
        super(props)

        this.state={
            users:[]
        }
    }
componentDidMount(){
    axios.get('https://jsonplaceholder.typicode.com/users')
    .then(resp=>{
        
        this.setState({

        users:resp.data})
    })
}

    render(){

        const {users}=this.state
        return(
                <div className="ed-grid">
                    <h1>
                    Pagina Usuarios
                    </h1>
                    {users.length===0?
                    <h1>Cargando...</h1>
                    :<div className="ed-grid s-grid-2 m-grid-3 lg-grid-4">
                    {users.map(u=>(<UserCard key={u.id} name={u.name} email={u.email}/>))}
                    </div>}
                
                </div>
        )

    }
}

export default Users