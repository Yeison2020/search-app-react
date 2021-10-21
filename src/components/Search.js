import React, { useState } from "react";

const Search = ({ formInput }) => {
  const [form, setForm] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    formInput(form);
  };

  const handleChangeInput = (e) => {
    setForm(e.target.value);
  };

  return (
    <form className="searchbar" onSubmit={(e) => handleSubmit(e)}>
      <input
        type="text"
        id="search"
        placeholder="Seach Here..."
        value={form}
        onChange={(e) => handleChangeInput(e)}
      />
      <button type="submit" className="btn bnt-primary">
        🔎
      </button>
    </form>
  );
};

export default Search;
