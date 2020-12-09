
import "./styles/styles.scss"
import Curso from "./Curso.jsx"

function App() {
  return (
<>
<div className="main-banner img-container l-section" id="main-banner">
<div className="ed-grid lg-grid-6">
  <div className="lg-cols-4 lg-x-2">
    <img className="main-banner__img" src="https://wallpaperset.com/w/full/a/4/6/49091.jpg" alt="ciudad-edificios"/>
    <div className="main-banner__data s-center">
      <p className="t2 s-mb-0">Curso de EDteam</p>
      <p> React JS</p>
      <a href="https://koolgram.com" className="button">Ver mas</a>
    </div>
  </div>
</div>
</div>
<div className="ed-grid m-grid-3">
<Curso />
<Curso />
<Curso />
<Curso />
<Curso />
<Curso />



</div>



</>
  );
}

export default App;
