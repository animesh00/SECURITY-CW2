import React from "react";
import { Col, Container, Row } from "reactstrap";
import kiranaImg from "../../assets/images/kirana_1.jpg";
import "./AboutSection.css";

const AboutSection = ({ aboutClass }) => {
  return (
    <section
      className="about__section pt-3 pb-3"
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
              <h2 className="section__title">Welcome to Shop</h2>
              <p className="section__description">
                At Shop, we are committed to providing you with a seamless and
                enjoyable shopping experience. Our mission is to connect you with a wide range of high-quality products from trusted local suppliers, ensuring that you can find everything you need for your daily needs.  
              </p>

              <div className="about__section-item d-flex align-items-center">
                <p className="section__description d-flex align-items-center gap-2">
                  <i className="ri-checkbox-circle-line"></i> Quality products
                  that meet your expectations.
                </p>

                <p className="section__description d-flex align-items-center gap-2">
                  <i className="ri-checkbox-circle-line"></i> Expert advice and
                  personalized service.
                </p>
              </div>

              <div className="about__section-item d-flex align-items-center">
                <p className="section__description d-flex align-items-center gap-2">
                  <i className="ri-checkbox-circle-line"></i> Sustainable
                  practices for a better tomorrow.
                </p>

                <p className="section__description d-flex align-items-center gap-2">
                  <i className="ri-checkbox-circle-line"></i> A wide range of
                  tools and resources tailored to your needs.
                </p>
              </div>
            </div>
          </Col>

          <Col lg="6" md="6">
            <div className="about__img">
              <img src={kiranaImg} alt="" className="w-100" />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default AboutSection;
