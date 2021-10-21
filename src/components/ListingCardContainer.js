import React from "react";
import ListingCard from "./ListingCard";
const ListingCardContainer = ({ deleteListing, listings }) => {
  console.log(listings);
  return (
    <main>
      <ul className="cards">
        {listings.map((list) => {
          return (
            <ListingCard
              key={list.id}
              listings={list}
              deleteListing={deleteListing}
            />
          );
        })}
      </ul>
    </main>
  );
};

export default ListingCardContainer;
