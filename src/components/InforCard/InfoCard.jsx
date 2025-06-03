import React from "react";

import "./InfoCard.css";

const StudentCard = ({ imageUrl, title, description }) => {
  return (
    <div className="main-card">
      <div className="card-image-container">
        <img src={imageUrl} alt={title} />
      </div>
      <div className="card-content">
        <h2 className="card-title">{title}</h2>
        <p className="card-description">{description}</p>
      </div>
    </div>
  );
};

export default StudentCard;
