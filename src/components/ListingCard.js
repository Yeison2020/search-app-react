import React, { useState } from "react";

const ListingCard = ({ listings, deleteListing }) => {
  const [liked, setUnliked] = useState(false);

  const toggleLike = () => {
    setUnliked(!liked);
  };

  return (
    <li className="card">
      <div className="image">
        <img src={listings.image} alt={listings.description}></img>
      </div>
      <div className="details">
        {liked ? (
          <button onClick={toggleLike} className="emoji-button favorite active">
            ★
          </button>
        ) : (
          <button onClick={toggleLike} className="emoji-button favorite">
            ☆
          </button>
        )}
        <strong>{listings.description}</strong>
        <span> 🌍 {listings.location}</span>
        <button
          onClick={() => deleteListing(listings)}
          className="emoji-button delete"
        >
          🗑
        </button>
      </div>
    </li>
  );
};

export default ListingCard;
