import React from 'react'
import './features.css'

const Features = ({ title, text }) => (
  <div className="gpt3__features-container__features">
    <div className="gpt3__features-container__features-title">
      <div />
      <h1>{title}</h1>
    </div>
    <div className="gpt3__features-container_features-text">
      <p>{text}</p>
    </div>
  </div>
);

export default Features