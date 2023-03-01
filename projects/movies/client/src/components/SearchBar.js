import React, { useState } from "react";
import PropTypes from "prop-types";
import { Form, Input } from "reactstrap";

const SearchBar = ({ returnSearch }) => {
  // We need some state to handle the movie search term
  const [searchTerm, setSearchTerm] = useState("");

  const searchHandler = (e) => {
    setSearchTerm(e.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    returnSearch(searchTerm);
  };

  return (
    <Form
      onSubmit={(e) => onSubmit(e)}
      style={{
        display: "flex",
        width: "70%",
        margin: "0 auto",
        marginTop: "20px",
      }}
    >
      <Input
        type="text"
        placeholder="Enter a movie name, genre, etc."
        onChange={(e) => searchHandler(e)}
        value={searchTerm}
        style={{
          borderTopRightRadius: "0",
          borderBottomRightRadius: "0",
        }}
      />
      <button
        className="btn btn-primary"
        onSubmit={(e) => onSubmit(e)}
        style={{
          backgroundColor: "#343a40",
          border: "none",
          borderTopLeftRadius: "0",
          borderBottomLeftRadius: "0",
        }}
      >
        submit
      </button>
    </Form>
  );
};

// PropTypes and default props are essential for debugging and for clean code and for good error handling

// Proptypes
SearchBar.propTypes = {
  returnSearch: PropTypes.func.isRequired,
};

export default SearchBar;
