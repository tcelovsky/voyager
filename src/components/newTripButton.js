import React from "react";
import Button from "react-bootstrap/Button";
import "../css/button.css";

const NewTripButton = () => {
  return (
    <div className="button">
      <Button type="submit" variant="outline-secondary" size="sm">
        New Trip
      </Button>
    </div>
  );
};

export default NewTripButton;
