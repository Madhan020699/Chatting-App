import {Col,Container,Row} from "react-bootstrap"; 
import Form from './form.jsx';

const LoginPage = () => {

    return (
        <Container fluid>
            <Row>
                <Col md={6} className="rightScreenWrap vh-100">
                </Col>
                <Col md={6} className="leftScreenWrap vh-100">
                    <Form />
                </Col>
            </Row>
        </Container>
    );

}

export default LoginPage;