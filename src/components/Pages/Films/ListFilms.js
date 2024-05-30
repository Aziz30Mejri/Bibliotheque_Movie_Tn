import React, {useState} from 'react';
import Agent from "./film";
import Header from '../../Header';

const ListFilms = () => {
    const Films=[
    {id:1,nom:"Noura reve", image:"../../images/noura.jpg" ,notation:"4.1",telechargement:"4.5M"},
    {id:2,nom:"Hjar Lweed", image:"../../images/hjar lweed.jpg",notation:"4.1", telechargement:"4.1M"},
    {id:3,nom:"Dachra", image:"../../images/dachra.jpg" ,notation:"4.1", telechargement:"4.7M"},
    {id:4,nom:"Bidoun 3", image:"../../images/bidoun3.jpg",notation:"4.1", telechargement:"3.9M"},
    {id:5,nom:"El Jaida", image:"../../images/eljaida.jpg"  ,notation:"5",telechargement:"3.5M"},
    {id:6,nom:"Fatwa", image:"../../images/fatwa.jpg",notation:"2.5", telechargement:"1.1M"},
    {id:7,nom:"El Harba", image:"../../images/harba.webp" ,notation:"4", telechargement:"4.7M"},
    {id:8,nom:"Un divan à Tunis", image:"../../images/Un divan à Tunis.jpg",notation:"3.5", telechargement:"3.9M"},
    {id:9,nom:"Guirra", image:"../../images/Guirra.jpg",notation:"3.5", telechargement:"3.9M"},
    {id:10,nom:"Fataria", image:"../../images/fataria.webp",notation:"3.2", telechargement:"2.1M"},    
    {id:11,nom:"Regarder-moi", image:"../../images/regarder moi.webp",notation:"4.9", telechargement:"5.5M"},
    {id:12,nom:"Vent du nord", image:"../../images/Vent du nord.webp",notation:"3.9", telechargement:"4.2M"} 
]

const [searchQuery, setSearchQuery] = useState("");
    const handleSearch = (event) => {
        setSearchQuery(event.target.value);
    };
    const filteredFilms = Films.filter(film =>
        film.nom.toLowerCase().includes(searchQuery.toLowerCase())
    );
    return(
        <div>
            <Header handleSearch={handleSearch} />
            <div className="scroll">
                {filteredFilms.map((value)=>{
                    return <Agent key={value.id} nom={value.nom} img={value.image} notation= {value.notation} telechargement={value.telechargement} />
                })}
            </div>
        </div>
    )
}
export default ListFilms;