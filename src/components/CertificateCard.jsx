import React from 'react';


const CertificateCard = (props) => {
  return (
    
    
    <div className="card1"> 
    
      <div className="w3-card-4">
        <div className="w3-container">
          <img src={props.img} alt="Avatar" />
          <h1>{props.name}</h1>
          <div className="w3-section">
            <a href={props.dlink}>Download</a>
          </div>
        </div>
      </div>
    
    </div>
  );
};

export default CertificateCard