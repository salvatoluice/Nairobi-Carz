import React from "react";
import { Container, Row, Col } from "reactstrap";
import "../../styles/about-section.css";
import aboutImg from "../../assets/all-images/cars-img/bmw-offer.png";

const AboutSection = ({ aboutClass }) => {
  return (
    <section
      className="about__section"
      style={
        aboutClass === "aboutPage"
          ? { marginTop: "0px" }
          : { marginTop: "280px" }
      }
    >
      <Container>
        <Row>
          <Col lg="6" md="6">
            <div className="about__section-content">
              <h4 className="section__subtitle">About Us</h4>
              <h2 className="section__title">Welcome to Nairobi-Carz Rentals</h2>
              <p className="section__description" style={{color: '#000', }}>
              Welcome to Nairobi Rentals, your premier car rental company in Nairobi, Kenya. We are a family-owned business that has been serving the community for over 20 years. Our mission is to provide our customers with reliable and affordable transportation, whether they're here for business or pleasure.

We take pride in our fleet of vehicles, which includes a wide range of options to suit every need and budget. From economy cars to luxury SUVs, we have something for everyone. All of our vehicles are regularly serviced and maintained to ensure your safety and comfort on the road.

At Nairobi Rentals, customer satisfaction is our top priority. We have a team of friendly and knowledgeable staff who are always ready to assist you with any questions or concerns you may have. Our goal is to make your car rental experience as smooth and stress-free as possible.

We are fully licensed and insured, and we have received numerous awards for our exceptional service. We are also open 7 days a week to serve you better
              </p>

              <div className="about__section-item d-flex align-items-center">
                <p className="section__description d-flex align-items-center gap-2">
                  <i class="ri-checkbox-circle-line"></i> Full Car Service Check
                </p>

                <p className="section__description d-flex align-items-center gap-2">
                  <i class="ri-checkbox-circle-line"></i> Full Customer Support
                </p>
              </div>

              <div className="about__section-item d-flex align-items-center">
                <p className="section__description d-flex align-items-center gap-2">
                  <i class="ri-checkbox-circle-line"></i> Friendly & affordable Prices
                </p>

                <p className="section__description d-flex align-items-center gap-2">
                  <i class="ri-checkbox-circle-line"></i> High class cars
                </p>
              </div>
            </div>
          </Col>

          <Col lg="6" md="6">
            <div className="about__img">
              <img src={aboutImg} alt="" className="w-100" />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default AboutSection;
