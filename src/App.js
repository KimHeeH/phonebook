import "./App.css";
import { Container, Row, Col } from "react-bootstrap";
import ContactForm from "./component/ContactForm";
import "bootstrap/dist/css/bootstrap.min.css";
import ContactList from "./component/ContactList";
function App() {
  return (
    <div>
      <Container>
        <div className="title">
          <h1>PHONE BOOK</h1>
        </div>
      </Container>
      <div>
        <Container>
          <Row>
            <Col>
              <ContactForm />
            </Col>
            <Col>
              <ContactList />
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
}

export default App;
