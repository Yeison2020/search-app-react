import React, { useState, useEffect } from "react";
import Header from "./Header";
import ListingCardContainer from "./ListingCardContainer";

const App = () => {
  //-----------Consts Variables------------------
  //--------------  States----------------------
  const [listings, setListing] = useState([]);
  const [search, setSearch] = useState("");
  //----------------Functions-----------------------
  const deleteListing = (deleteItem) => {
    const newListing = listings.filter((item) => {
      return item.id !== deleteItem.id;
    });
    setListing(newListing);

    fetch(`http://localhost:6001/listings/${deleteItem.id}`, {
      method: "DELETE",
      hearder: {
        "Content-Type": "application/json",
      },
    });
  };

  //----------------------------------------------
  const formInput = (userText) => {
    setSearch(userText);
  };
  //----------------Fetches-------------------------
  useEffect(() => {
    fetch(" http://localhost:6001/listings")
      .then((resp) => resp.json())
      .then((data) => {
        setListing(data);
      });
  }, []);

  const filteredListing = () => {
    if (search.length > 1) {
      return listings.filter((listing) =>
        listing.description.toLowerCase().includes(search.toLowerCase())
      );
    } else {
      return listings;
    }
  };

  return (
    <div>
      <Header formInput={formInput} />
      <ListingCardContainer
        listings={filteredListing()}
        deleteListing={deleteListing}
      />
    </div>
  );
};

export default App;
