import React from "react";
import { Row, Col } from "react-bootstrap";
const ContactItem = ({ item }) => {
  return (
    <Row className="user-container">
      <Col lg={2}>
        <img
          width="50"
          src="https://i1.sndcdn.com/avatars-000153394791-vodtb1-t240x240.jpg"
        />
      </Col>
      <Col lg={10}>
        <div>{item.name}</div>
        <div style={{ marginBottom: "20px" }}>{item.phoneNumber}</div>
      </Col>
    </Row>
  );
};

export default ContactItem;
