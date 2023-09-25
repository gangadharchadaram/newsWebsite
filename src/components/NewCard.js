import React from "react";
import "../styles/NewCard.css";

function NewCard(props){
  let date = new Date(props.data.publishedAt);
    return(
        <>
           <div className="card">
              <img className="card-image" src={props.data.image}
                alt="" />
              <div className="card-content">
                <h2 className="card-title">{props.data.title}</h2>
                <p className="card-desc">{props.data.description}</p>
                <h5>{date.toString()}</h5>
              </div>
           </div>
        </>
    );
}

export default NewCard;