import { Container, Row, Col } from "react-bootstrap";
import "./HomePage.css";
import ChatViewLayout from "./ChatView/ChatView";

function App() {

    return (

        <Container fluid className="app-container">

            <ChatViewLayout />
            <Row className="first-row">
                <Col xs={12}>
                </Col>
            </Row>

            <Row className="remaining-rows">
                <Col xs={12}>
                </Col>
            </Row>

        </Container>
    );

}

export default App;
