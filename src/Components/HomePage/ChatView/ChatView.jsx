import { Col, Container, Row } from 'react-bootstrap';
import ContactView from './ContactView/ContactView';
import MessageView from './MessageView/MessageView';

const ChatViewLayout = () => {
    return (
        <div className="top-center">
            <Container fluid>
                <Row>
                    <Col xs={4} Style="border-right: 2px solid lightgray;">
                        <ContactView />
                    </Col>
                    <Col xs={8} Style="padding: 0;">
                        <MessageView />
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default ChatViewLayout;