import React from "react";
import Agent from "./Cards";

const ListCards2=()=>{

    const Cards=[
        {id:1,nom:"Dachra", image:"../../images/dachra.jpg" ,notation:"4.1", telechargement:"4.7M"},
        {id:2,nom:"Regarder-moi", image:"../../images/regarder moi.webp",notation:"4.9", telechargement:"5.5M"},
        {id:3,nom:"Noura Reve", image:"../../images/noura.jpg" ,notation:"4.1",telechargement:"4.5"},
        {id:4,nom:"Hjar Lweed", image:"../../images/hjar lweed.jpg" ,notation:"4.1", telechargement:"3.9"},        
    ]
    return(
        <div className="scroll">
            {Cards.map((value)=>{
                return <Agent key={value.id} nom={value.nom} img={value.image} notation= {value.notation} telechargement={value.telechargement} />
            })}
        </div>
    )
}


export default ListCards2;