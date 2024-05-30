import React,{useState} from 'react';
import Agent from "./serie";
import Header from '../../Header';

const ListSeries = () => {
    const Series=[
        {id:1,nom:"Baraa", image:"../../images/baraa.jpg" ,notation:"4.1",telechargement:"4.5M"},
        {id:2,nom:"Nouba", image:"../../images/nouba.webp",notation:"3.5", telechargement:"4.1M"},
        {id:3,nom:"Jbal Lahmer", image:"../../images/الجبل الأحمر.jpg",notation:"4", telechargement:"4.7M"},
        {id:4,nom:"Sabak Lkhir", image:"../../images/saba9L5ir.jpg",notation:"3.5", telechargement:"3.9M"},
        {id:5,nom:"Fallouja", image:"../../images/fallouja.jpg" ,notation:"5",telechargement:"9.5M"},
        {id:6,nom:"Lella Cendrela", image:"../../images/للا-السندريلا.jpg",notation:"3.2", telechargement:"1.1M"},
        {id:7,nom:"El Foundo", image:"../../images/foundo.jpg",notation:"4", telechargement:"4.7M"},
        {id:8,nom:"Agent 86", image:"../../images/agent86.jpg",notation:"2.5", telechargement:"3.9M"},     
    ]

    const [searchQuery, setSearchQuery] = useState("");
    const handleSearch = (event) => {
        setSearchQuery(event.target.value);
    };
    const filteredSeries = Series.filter(serie =>
        serie.nom.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return(
        <div>
            <Header handleSearch={handleSearch} />
            <div className="scroll">
                {filteredSeries.map((value) => (
                    <Agent key={value.id} nom={value.nom} img={value.image} notation={value.notation} telechargement={value.telechargement} />
                ))}
            </div>
        </div>
    )
}

export default ListSeries;