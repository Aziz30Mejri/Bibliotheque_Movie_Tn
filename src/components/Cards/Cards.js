import React,{useState} from "react";
import {FaStar,FaEye}from 'react-icons/fa';

const Cards=(props)=> {
    const [isStarred, setIsStarred] = useState(false);
    const handleStarClick = () => {
    setIsStarred(!isStarred);
  };
  const hoverStyle = {
    transform: "scale(1.1)"
  };
    return(
        <div style={{display:"inline-block",flexWrap:"wrap",justifyContent:"space-between",marginLeft:"40px",marginTop:"10px"}}>
            <div className="card" style={{width: "18rem",marginLeft:"20px"}}>
            <img src={props.img} className="card-img-top" alt="..."
            style={{width: "15rem",marginLeft:"25px",maxHeight:"320px",marginTop:"25px",transition: "transform 0.3s ease-in-out",cursor:"zoom-in"}}
            onMouseEnter={(e) => e.currentTarget.style.transform = hoverStyle.transform}
            onMouseLeave={(e) => e.currentTarget.style.transform = "scale(1)"} />
            <div className="card-body">
            <h4 className="card-title"style={{textAlign:"center"}}>{props.nom}</h4>
            <h6 className="card-telechargement"style={{textAlign:"center"}}>{props.notation} <FaStar className="star-icon" 
            style={{marginTop:"-4px",color: isStarred ? "gold" : "gray",cursor: "pointer"}} onClick={handleStarClick}/> </h6>
            <h6 className="card-telechargement"style={{textAlign:"center"}}>{props.telechargement}   <FaEye/> </h6>
             </div>
            </div>
        </div>
    )
}

export default Cards;