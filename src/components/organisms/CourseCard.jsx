import React from "react"
import PropTypes from 'prop-types'
import {Link} from "react-router-dom"

// const curso={"title":"Javascript",
// "image":"https://edteam-media.s3.amazonaws.com/courses/small/3ec614b5-a9b7-475c-bf8f-8ba643a129eb.png",
// "image2":"https://edteam-media.s3.amazonaws.com/courses/small/3ec614b5-a9b7-475c-bf8f-8ba643a129eb.png",
// "nombre":"Alfonso Montalvo"

// }


const CourseCard=({id,image,title,image2,nombre,price})=>(

<article className="card">
  <div className="img-container s-ratio-16-9 s-radius-tr s-radius-tl">
    <Link to={`/cursos/${id}`}><img src={image} alt={title}/></Link>
  </div>
  <div className="card__data s-border s-radius-br s-radius-bl s-pxy-2">
    <h3 className="t5 s-mb-2 s-center">
    </h3>
    <div className="s-mb-2 s-main-center">
      <div className="card__teacher s-cross-center">
        <div className="card__avatar s-mr-1">
          <div className="circle img-container">
            <img src={image2} alt=""/>
          </div>
        </div>
        <span className="small">{nombre}</span>
      </div>
    </div>
    <div className="s-main-center">
<a className="button--ghost-alert button--tiny" href="https://koolgram.com">$ {price}</a>
    </div>
  </div>
</article>
)

CourseCard.propTypes={
  image:PropTypes.string,
  title:PropTypes.string,
  image2:PropTypes.string,
  nombre:PropTypes.string,
  price:PropTypes.number
  }
  
CourseCard.defaultProps={
  image:"https://static.vecteezy.com/system/resources/previews/001/225/556/non_2x/grayscale-of-city-buildings-free-photo.jpeg",
  title:"Titulo standard",
  image2:"https://static.vecteezy.com/system/resources/previews/001/225/556/non_2x/grayscale-of-city-buildings-free-photo.jpeg",
  nombre:"No se encontro imagen",
  price:40

}

export default CourseCard