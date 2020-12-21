
import "./styles/styles.scss";
import Home from "./components/pages/Home";
import Form from "./components/pages/Form";
import Courses from "./components/pages/Courses";
import Course from "./components/pages/Course";
import MainMenu from "./components/organisms/MainMenu";
import Users from "./components/pages/Users";

import {BrowserRouter as Router, Route, Switch} from "react-router-dom"


function App() {
  return (

    
<Router>
    <MainMenu />
    <Switch>
      <Route path="/" exact component={Home}/>
      <Route path="/cursos/:id" component={Course}/>
      <Route path="/cursos" component={Courses}/>
      <Route path="/usuarios" component={Users}/>
      <Route path="/formulario" component={()=><Form />}/>
      <Route component={()=><div className="ed-grid">

        <h1>Error 404 Pagina no encontrada</h1>
      </div>} />

    </Switch>
    
</Router>
  );
}

export default App;
