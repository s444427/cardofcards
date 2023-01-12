import './CSS/App.css';

import Container from 'react-bootstrap/Container';
import {Card, Col, Row} from "react-bootstrap";

function App() {
    return (
        <div className="App" style={{background: "violet"}}>
            <Container>
                <Row>
                    <Col lg={3}>
                        xD
                    </Col>
                    <Col lg={6}>
                        <Row>
                            <Card>
                                xD
                            </Card>
                        </Row>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default App;
