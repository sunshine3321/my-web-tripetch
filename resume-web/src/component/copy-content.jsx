import { Container, Row, Col, Image } from "react-bootstrap";
import footballer from "../image/footballer 1.png";

function Content() {
  return (
    <div className="content-main">
      <Container>
        <Row>
          <Col></Col>
          <Col>
            <div className="section section-one">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam,
              magni!
            </div>
          </Col>
        </Row>
      </Container>
      <Container>
        <Row>
          <Col></Col>
          <Col>
            <div className="section section-two">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam,
              magni!
            </div>
          </Col>
        </Row>
      </Container>
      <Container>
        <Row>
          <Col></Col>
          <Col>
            <div className="section section-three">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam,
              magni!
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Content;
