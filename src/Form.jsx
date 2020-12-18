import React, {Component} from "react"

class Form extends Component {

constructor(props){
    super(props)

this.state={
    name: "",
    last_name: "",
    email:"",
    date:new Date()
}

this.changeName=this.changeName.bind(this)
this.changeEmail=this.changeEmail.bind(this)
this.changeDate=this.changeDate.bind(this)

}



changeName(e){this.setState({
    name:e.target.value
})}

changeEmail(e){this.setState({
    email:e.target.value
})}

changeDate(){
    this.setState({
        date:new Date()
    })
}

render(){

    return(
    <div className="ed-grid">
        <h1 >Form</h1>
        <h4>Current Date: {Math.ceil(this.state.date/1000)}</h4>
        <form id="element">
            <div className="ed-grid m-grid-2">
                <div className="form__item">
                    <label htmlFor="name">Full Name:</label>
                    <input type="text" name="name" id="name" onChange={this.changeName}/>
                </div>

            
                <div className="form__item">
                    <label htmlFor="email">Email Adress:</label>
                    <input type="text" name="email" id="email" onChange={this.changeEmail}/>
                </div>

                <input className="button full" type="submit" value="Enviar"/>  
            </div>
        </form>
        <h2>
            {`Hola me llamo : ${this.state.name}`}
        </h2>
        <span>{` mi correo es: ${this.state.email}`}</span>
    </div>)
}
componentDidMount(){
    let elemento = document.getElementById("element")
    console.log(elemento)

    // this.intervaloFecha=setInterval(()=>{
    //     this.changeFecha()},1000)
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

export default Form