import React from "react";
import "../../styles/become-driver.css";
import { Container, Row, Col } from "reactstrap";

import driverImg from "../../assets/all-images/toyota-offer-2.png";
import { Link } from "react-router-dom";

const BecomeDriverSection = () => {
  return (
    <section className="become__driver">
      <Container>
        <Row>
          <Col lg="6" md="6" sm="12" className="become__driver-img">
            <img src="https://imgs.search.brave.com/ThDgDRvqK7S3WjskxHkUyRZTF5f0sTg3Cxh4BoMlSgk/rs:fit:632:225:1/g:ce/aHR0cHM6Ly90c2Uz/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC4x/WmpzZHhrOWlMd0t2/WlpPdGpWd2tRSGFG/aiZwaWQ9QXBp" alt="" className="w-100" />
          </Col>

          <Col lg="6" md="6" sm="12">
            <h2 className="section__title become__driver-title">
              Wanna Become part of us? We got you covered!
            </h2>

            <button className="btn become__driver-btn mt-4">
              <Link style={{textDecoration: 'none'}} to='*'>Drive our Car</Link>
            </button>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default BecomeDriverSection;
