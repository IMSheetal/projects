import React,{ useState } from "react";
function Card(props) {
  const [imgSrc, setImgSrc] = useState("Invalid Image Source");
  return (
    <div className="card-layout">
       <div className="card">
        <img src={imgSrc} onError = {() => setImgSrc(props.imageUrl)} alt="defaultImage" />
      </div>
        <h2>{props.title}</h2>
        <p>{props.description}</p>
      
    </div>
  );
}

export default Card;
