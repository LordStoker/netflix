import {MdAddCircle} from "react-icons/md"
export default function Card( props) {

  let ageColor;
  if(props.pegi == 7){
    ageColor = "pegi age-7";

  }else if(props.pegi == 12){
    ageColor = "pegi age-12";

  }else if(props.pegi == 16){
    ageColor = "pegi age-16";
  }
  return (
    <article className="card">
      <div className="season">{props.seasons > 1 ? `${props.seasons} temporadas` : props.seasons === 1 ? "1 temporada" : props.type !== "miniserie" ? `${props.episodes} episodios` : "Miniserie"}</div>
      <img src= {`img/${props.img}`} alt={props.title}/>
      <div className="container">
          <div className="coincidencia">{props.matching > 80 && `${props.matching}% de coindidencia`}</div>
          <div className="info-card-container">
              <div>
                  <span className={ageColor}>{props.pegi}+</span>
                  <span className="year">{props.year}</span>
              </div>
              <div className="tooltip">
                  <div className="tooltiptext">Añadir</div>
                  <MdAddCircle size="40"/>
              </div>
          </div>
          <p>{props.desc}</p>
      </div>
    </article>
  );
}