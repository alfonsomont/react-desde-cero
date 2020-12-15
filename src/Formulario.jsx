import React, {Component} from "react"

class Formulario extends Component {

constructor(props){
    super(props)

this.state={
    nombre: "",
    apellido: "",
    correo:"",
    fecha:new Date()
}

this.cambiarNombre=this.cambiarNombre.bind(this)
this.cambiarCorreo=this.cambiarCorreo.bind(this)
this.cambiarFecha=this.cambiarFecha.bind(this)

}



cambiarNombre(e){this.setState({
    nombre:e.target.value
})}

cambiarCorreo(e){this.setState({
    correo:e.target.value
})}

cambiarFecha(){
    this.setState({
        fecha:new Date()
    })
}

render(){

    return(
    <div className="ed-grid">
        <h1 >Formulario</h1>
        <h4>Fecha Actual: {Math.ceil(this.state.fecha/1000)}</h4>
        <form id="element">
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
componentDidMount(){
    let elemento = document.getElementById("element")
    console.log(elemento)

    this.intervaloFecha=setInterval(()=>{
        this.cambiarFecha()},1000)
}


componentDidUpdate(prevProps, prevState){
console.log(prevProps)
console.log(prevState)
console.log("--------")
}


componentWillUnmount(){
    clearInterval(this.intervaloFecha)
    }


}

export default Formulario