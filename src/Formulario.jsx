import React, {Component} from "react"

class Formulario extends Component {

constructor(props){
    super(props)

this.state={
    nombre: "",
    apellido: "",
    correo:""
}

this.cambiarNombre=this.cambiarNombre.bind(this)
this.cambiarCorreo=this.cambiarCorreo.bind(this)
}
cambiarNombre(e){this.setState({
    nombre:e.target.value
})}

cambiarCorreo(e){this.setState({
    correo:e.target.value
})}


render(){
    return(
    <div className="ed-grid">
        <h1 >Formulario</h1>
        <form action="">
            <div className="ed-grid m-grid-2">
                <div className="form__item">
                    <label htmlFor="name">Nombre Completo</label>
                    <input type="text" name="name" id="name" onChange={this.cambiarNombre}/>
                </div>

            
                <div className="form__item">
                    <label htmlFor="email">Correo Electronico</label>
                    <input type="text" name="email" id="email" onChange={this.cambiarCorreo}/>
                </div>

                <input className="button full" type="submit" value="Enviar"/>  
            </div>
        </form>
        <h2>
            {`Hola me llamo ${this.state.nombre}`}
        </h2>
        <span>{` mi correo es: ${this.state.correo}`}</span>
    </div>)
}
}

export default Formulario