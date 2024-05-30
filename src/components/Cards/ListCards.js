import React from "react";
import Agent from "./Cards";

const ListCards=()=>{

    const Cards=[
        {id:1,nom:"Fallouja", image:"../../images/fallouja.jpg" ,notation:"5",telechargement:"9.5M"},
        {id:2,nom:"El Foundo", image:"../../images/foundo.jpg",notation:"4", telechargement:"4.7M"}, 
        {id:3,nom:"Baraa", image:"../../images/baraa.jpg" ,notation:"4.1",telechargement:"4.5M"},
        {id:4,nom:"Nouba", image:"../../images/nouba.webp",notation:"3.5", telechargement:"4.1M"},       
    ]
    return(
        <div className="scroll">
            {Cards.map((value)=>{
                return <Agent key={value.id} nom={value.nom} img={value.image} notation= {value.notation} telechargement={value.telechargement} />
            })}
        </div>
    )
}


export default ListCards;