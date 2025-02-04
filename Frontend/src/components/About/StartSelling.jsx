import React from "react";
import { Col, Container, Row } from "reactstrap";
import kiranaImg from "../../assets/images/kirana_2.jpg";
import "./StartSelling.css";

const StartSellingSection = () => {
  return (
    <section className="become__seller">
      <Container>
        <Row>
          <Col lg="6" md="6" sm="12" className="become__seller-img">
            <img src={kiranaImg} alt="" className="w-100" />
          </Col>

          <Col lg="6" md="6" sm="12">
            <h2 className="section__title become__seller-title">
              Do You Want to Earn With Us? So Don't Be Late
            </h2>

            <button
              className="btn become__seller-btn mt-4"
              onClick={() => (window.location.href = "/login")}
            >
              Start Selling
            </button>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default StartSellingSection;
