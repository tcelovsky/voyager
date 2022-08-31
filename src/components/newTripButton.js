import React from "react";
import Button from "react-bootstrap/Button";
import "../css/button.css";

const NewTripButton = () => {
  const handleClick = (e) => {
    e.preventDefault();
    console.log("clicked");
  };

  return (
    <div className="button">
      <Button
        type="submit"
        variant="outline-secondary"
        size="sm"
        onClick={handleClick}
      >
        New Trip
      </Button>
    </div>
  );
};

export default NewTripButton;
