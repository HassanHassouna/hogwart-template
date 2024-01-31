import React from 'react';
import { useParams,Link } from 'react-router-dom';
import './EntityDescription.css'

const EntityDescription = ({ getCategoryData }) => {
  const { entityName, category } = useParams();
  const entity = getCategoryData(category).find(entity => entity.name.toLowerCase() === entityName.toLowerCase());
  const { img, level, description } = entity;
  return (
      <Link to={`/wiki/${category}`}>
    <div className="desc-card">
      <img src={img} alt={entityName} />
      <h3>{entityName}</h3>
      <p className="desc-card-level">{level}</p>
      <p className="desc-card-description">{description}</p>
    </div>
        </Link>
  );
}

export default EntityDescription;
