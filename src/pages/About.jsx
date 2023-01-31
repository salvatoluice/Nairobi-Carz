import React from "react";

import CommonSection from "../components/UI/CommonSection";
import Helmet from "../components/Helmet/Helmet";
import AboutSection from "../components/UI/AboutSection";
import { Container, Row, Col } from "reactstrap";
import BecomeDriverSection from "../components/UI/BecomeDriverSection";

import OurMembers from "../components/UI/OurMembers";
import "../styles/about.css";

const About = () => {
  return (
    <Helmet title="About">
      <CommonSection title="About Us" />
      <AboutSection aboutClass="aboutPage" />

      <section className="about__page-section">
        <Container>
          <Row>
            <Col lg="6" md="6" sm="12">
              <div className="about__page-img">
                <img src="https://imgs.search.brave.com/US4Hph6Y3aoiGwWGCpSrYo0k8mV4-NI_fTN-1QE7H4Q/rs:fit:711:225:1/g:ce/aHR0cHM6Ly90c2Ux/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC5S/LTNUal8yOGpaSjlm/bVZEZlhnRUZRSGFF/OCZwaWQ9QXBp" alt="" className="w-100 rounded-3" />
              </div>
            </Col>

            <Col lg="6" md="6" sm="12">
              <div className="about__page-content">
                <h2 className="section__title">
                  We Are Committed To Provide Safe Ride Solutions
                </h2>

                <p className="section__description">
                Welcome to Nairobi Rentals, your premier car rental company in Nairobi, Kenya. We are a family-owned business that has been serving the community for over 20 years. Our mission is to provide our customers with reliable and affordable transportation, whether they're here for business or pleasure.

We take pride in our fleet of vehicles, which includes a wide range of options to suit every need and budget. From economy cars to luxury SUVs, we have something for everyone. All of our vehicles are regularly serviced and maintained to ensure your safety and comfort on the road.

At Nairobi Rentals, customer satisfaction is our top priority. We have a team of friendly and knowledgeable staff who are always ready to assist you with any questions or concerns you may have. Our goal is to make your car rental experience as smooth and stress-free as possible.

We are fully licensed and insured, and we have received numerous awards for our exceptional service. We are also open 7 days a week to serve you better
                </p>

                <div className=" d-flex align-items-center gap-3 mt-4">
                  <span className="fs-4">
                    <i class="ri-phone-line"></i>
                  </span>

                  <div>
                    <h6 className="section__subtitle">Any Questions?</h6>
                    <h4>+254 1 13 794 219</h4>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <BecomeDriverSection />

      <section>
        <Container>
          <Row>
            <Col lg="12" className="mb-5 text-center">
              <h6 className="section__subtitle">Meet our Experts</h6>
              <h2 className="section__title">Our Lead Team</h2>
            </Col>
            <OurMembers />
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default About;
