import React from "react";
import { Row, Col, Form, Button } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { useState } from "react";
const SearchBox = () => {
  const [keyword, setKeyword] = useState("");
  const dispatch = useDispatch();

  const searchByName = (event) => {
    event.preventDefault();
    dispatch({ type: "SEARCH_BY_USERNAME", payload: { keyword } });
  };
  return (
    <Form onSubmit={searchByName}>
      <Row className="search-container">
        <Col lg={9}>
          <Form.Group controlId="searchform" className="form">
            <Form.Control
              type="text"
              placeholder="이름을 입력해주세요"
              onChange={(event) => setKeyword(event.target.value)}
            />
          </Form.Group>
        </Col>
        <Col lg={3}>
          <Button type="submit">찾기</Button>
        </Col>
      </Row>
    </Form>
  );
};

export default SearchBox;
