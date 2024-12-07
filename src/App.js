import Card from './components/Card.jsx';
import {seriesList} from './series-static.js';
import './card.css';
import './styles.css';
export default function App() {
  return (
    <div className = "grid-similares">
      {seriesList.map(serie => (
        <Card 
          id={serie.id}
          title= {serie.title}
          type = {serie.type}
          img={serie.img}
          year={serie.year}
          pegi={serie.pegi}
          matching={serie.matching}
          seasons={serie.seasons}
          episodes={serie.episodes}
          desc={serie.desc}
        />     
      ))}
         
    </div>
  );
}


