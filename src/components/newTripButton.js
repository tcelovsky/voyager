import React from "react";
import Button from "react-bootstrap/Button";

const NewTripButton = () => {
  return (
    <div className="button">
      <Button type="submit" variant="outline-secondary">
        Create a New Trip
      </Button>
    </div>
  );
};

export default NewTripButton;
