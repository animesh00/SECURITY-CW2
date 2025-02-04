import React from "react";
import { Col, Container, Row } from "reactstrap";
import servicesImg from "../assets/images/services.jpg";
import AboutSection from "../components/About/AboutSection";
import StartSellingSection from "../components/About/StartSelling";
import CommonSection from "../shared/CommonSection";
import Newsletter from "../shared/Newsletter";
const About = () => {
  return (
    <>
      <CommonSection title="About Us" />
      <AboutSection aboutClass="aboutPage" />
      <StartSellingSection />
      <section className="about__page-section pt-1 pb-1">
        <Container>
          <Row>
            <Col lg="6" md="6" sm="12">
              <div className="about__page-img">
                <img src={servicesImg} alt="" className="w-100 rounded-3" />
              </div>
            </Col>

            <Col lg="6" md="6" sm="12">
              <div className="about__page-content">
                <h2 className="section__title">
                  We Are Committed to Providing the Best Services
                </h2>

                <p className="section__description">
                  At Shop, our dedication to serving Shop goes beyond
                  just offering products. We are committed to providing you with a
                  seamless and enjoyable shopping experience. Our mission is to
                  connect you with a wide range of high-quality products from
                  trusted local Shop.
                </p>

                <p className="section__description">
                  We understand the challenges faced by local Shop and strive to
                  address them with tailored services and resources.  We are
                  committed to providing you with a seamless and enjoyable
                  shopping experience.
                </p>

                <div className="d-flex align-items-center gap-3 mt-4">
                  <span className="fs-4">
                    <i className="ri-phone-line"></i>
                  </span>

                  <div>
                    <h6 className="section__subtitle">Need Any Help?</h6>
                    <h4>+977 9852654587</h4>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <Newsletter />
    </>
  );
};

export default About;
