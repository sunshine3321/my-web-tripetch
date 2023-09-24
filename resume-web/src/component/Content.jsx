import { Container, Row, Col, Image } from "react-bootstrap";
import footballer from "../image/footballer.png";
import basketball from "../image/basketball.png";
import { useState, useEffect } from "react";
import SlideshowAthletes from "./Slideshow";
import SlideshowPlayer from "./SlideshowPlayer"

function Content() {
  const [isMobile, setIsMobile] = useState(false);

  // Function to check and update the screen width
  const checkScreenWidth = () => {
    if (window.innerWidth <= 991) {
      setIsMobile(true);
    } else {
      setIsMobile(false);
    }
  };

  // Listen for window resize events
  useEffect(() => {
    checkScreenWidth();
    window.addEventListener("resize", checkScreenWidth);

    // Clean up the event
    return () => {
      window.removeEventListener("resize", checkScreenWidth);
    };
  }, []);



  const desktopResponse = () => {
    return (
      <div className="content-main">
        <div className="athlets-main">
          <Container>
            <Row>
              <Col>
                <Image
                  src={footballer}
                  className="athletes-image float-start"
                  alt="Footballer"
                />
              </Col>
              <Col>
                <section className="section-one">
                  <div className="font-size-header">ATHLETES</div>
                  <div className="athletes-content mb-4">
                    <div className="font-size-number-title d-flex">
                      <div className="font-size-number me-2">01</div>
                      <div className="font-size-title">CONNECTION</div>
                    </div>
                    <div className="font-size-content mt-3">
                      Connect with coaches directly you can ping coaches to view
                      their profiles.
                    </div>
                  </div>
                </section>
              </Col>
            </Row>
          </Container>
          <section className="section-two">
            <Container>
              <Row>
                <Col></Col>
                <Col>
                  <div className="collaboration-content mt-4">
                    <div className="font-size-number-title d-flex">
                      <div className="font-size-number me-2">02</div>
                      <div className="font-size-title">COLLABORATION</div>
                    </div>
                    <div className="font-size-content mt-3">
                      Work with other student athletes to increase visibility.
                      When you share and like other players videos, it will
                      increase your visibility as a player. This is the teamwork
                      aspect of Surface 1.
                    </div>
                  </div>
                </Col>
              </Row>
            </Container>
          </section>

          <section className="section-three">
            <Container>
              <Row>
                <Col></Col>
                <Col>
                  <div className="growth-content mt-4">
                    <div className="font-size-number-title d-flex">
                      <div className="font-size-number-other me-2">03</div>
                      <div className="font-size-title">GROWTH</div>
                    </div>
                    <div className="font-size-content-other mt-3">
                      Resources and tools for you to get better as a student
                      Athelte. Access to training classes, tutor sessions, etc
                    </div>
                  </div>
                </Col>
              </Row>
            </Container>
          </section>
        </div>
        {/*---------------- PLAYER-MAIN ---------------  */}
        <div className="player-main">
          <Container>
            <Row>
              <Col>
                <section className="player-section-one">
                  <div className="font-size-header">PLAYERS</div>
                  <div className="player-content mb-4">
                    <div className="font-size-number-title d-flex">
                      <div className="font-size-number me-2">01</div>
                      <div className="font-size-title">CONNECTION</div>
                    </div>
                    <div className="font-size-content mt-3">
                      Connect with talented athlete directly, you can watch
                      their skills through video showreels directly from Surface
                      1.
                    </div>
                  </div>
                </section>
              </Col>
              <Col>
                <Image
                  src={basketball}
                  className="player-image float-end"
                  alt="basketball Player"
                />
              </Col>
            </Row>
          </Container>

          <section className="player-section-two">
            <Container>
              <Row>
                <Col>
                  <div className="collaboration-content mt-4">
                    <div className="font-size-number-title d-flex">
                      <div className="font-size-number me-2">02</div>
                      <div className="font-size-title">COLLABORATION</div>
                    </div>
                    <div className="font-size-content mt-3">
                      Work with recruiter to increase your chances of finding
                      talented athlete.
                    </div>
                  </div>
                </Col>
                <Col></Col>
              </Row>
            </Container>
          </section>

          <section className="player-section-three">
            <Container>
              <Row>
                <Col>
                  <div className="growth-content mt-4">
                    <div className="font-size-number-title d-flex">
                      <div className="font-size-number-other me-2"  style={{ color: '#8F6BE8' }}>03</div>
                      <div className="font-size-title">GROWTH</div>
                    </div>
                    <div className="font-size-content-other mt-3">
                      Save your time, recruit proper athlets for your team.
                    </div>
                  </div>
                </Col>
                <Col></Col>
              </Row>
            </Container>
          </section>
        </div>
        {/* END DIV */}
      </div>
    );
  };

  const mobileResponse = () => {
    return (
      <div className="content-main-mobile">
        <div className="athlets-main">
          <div className="font-size-header-other ms-4 mt-3">ATHLETES</div>

          <section className="section-one-mobile">
            <Image
              src={footballer}
              className="athletes-image-mobile"
              alt="Footballer"
            />
          </section>
          <section className="section-two-mobile">
            <SlideshowAthletes/>
          </section>
        </div>

        <div className="player-main">
          <div className="font-size-header-other ms-4 mt-3">PLAYERS</div>

          <section className="section-one-mobile">
            <Image
              src={basketball}
              className="player-image-mobile"
              alt="basketBall"
            />
          </section>
          <section className="section-two-mobile">
            <SlideshowPlayer/>
          </section>
        </div>
        {/* END DIV */}
      </div>
    );
  };

  return <>{isMobile ? mobileResponse() : desktopResponse()}</>;
}

export default Content;
