import React from "react";
import { Col, Container, Row } from "reactstrap";
import experienceImg from "../assets/images/serve.png";
import heroImg from "../assets/images/men.png";
import heroImg2 from "../assets/images/pics.png";
import heroImg3 from "../assets/images/serve.png";
import shopnow from "../assets/images/shopnow.jpg";
import MasonryImagesGallery from "../components/ImageGallery/MasonryImagesGallery";
import Testimonials from "../components/Testimonial/Testimonials";
import ServiceList from "../services/ServiceList";
import Newsletter from "../shared/Newsletter";
import ProductCard from "../shared/ProductCard";
import Subtitle from "../shared/Subtitle";
import "../styles/Home.css";

const Home = () => {
  return (
    <>
      {/* =============== hero section start =========== */}
      <section>
        <Container>
          <Row>
            <Col lg="6">
              <div className="hero__content">
                <div className="hero__subtitle d-flex align-items-center">
                  <Subtitle subtitle={"Shop Now"} />
                  <img src={shopnow} alt="" />
                </div>
                <h1>
                  <span className="highlight">Shop</span> for the future.
                </h1>
                <p>
please shop with us. we will provide you the best service. This is the best place to shop. we will provide you the best service. this is a grocery store. shop now to get it delivered in                </p>
              </div>
            </Col>

            <Col lg="2">
              <div className="hero__img-box">
                <img src={heroImg} alt="" />
              </div>
            </Col>
            <Col lg="2">
              <div className="hero__img-box mt-5">
                <img src={heroImg3} alt="" />
              </div>
            </Col>
            <Col lg="2">
              <div className="hero__img-box mt-5">
                <img src={heroImg2} alt="" />
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      {/* =============== hero section end =========== */}

      <section>
        <Container>
          <Row>
            <Col lg="3">
              <h5 className="services__subtitle">What we serve</h5>
              <h2 className="services__title">Our Services</h2>
            </Col>
            <ServiceList />
          </Row>
        </Container>
      </section>

      {/* ================== feature product section  start =================== */}
      <section>
        <Container>
          <Row>
            <Col lg="12" className="mb-5">
              <Subtitle subtitle={"See More"} />
              <h2 className="feature__product-title">Picked by us</h2>
            </Col>
            <ProductCard />
          </Row>
        </Container>
      </section>
      {/* ================== feature product section  end =================== */}

      {/* ================== experience  section  start =================== */}
      <section>
        <Container>
          <Row>
            <Col lg="6">
              <div className="experience__content">
                <Subtitle subtitle={"Experience"} />
                <h2>
                  With all our experience <br /> we will servee you
                </h2>
                <p>
                  Please shop with us. We are happy to serve you. We are committed to providing you with the best shopping experience possible.
                </p>
              </div>

              <div className="counter__wrapper d-flex align-items-center gap-5">
                <div className="counter__box">
                  <span>89k+</span>
                  <h6>Products sold </h6>
                </div>
                <div className="counter__box">
                  <span>2k+</span>
                  <h6>Satisfied Customers </h6>
                </div>
                <div className="counter__box">
                  <span>5</span>
                  <h6>Years Experience</h6>
                </div>
              </div>
            </Col>
            <Col lg="6">
              <div className="experience__img">
                <img src={experienceImg} alt="" />
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      {/* ==================  experience section  end =================== */}

      {/* ==================  gallery section  end =================== */}
      <section>
        <Container>
          <Row>
            <Col lg="12">
              <Subtitle subtitle={"Gallery"} />
              <h2 className="gallery__title">Visit our customers gallery</h2>
            </Col>
            <Col lg="12">
              <MasonryImagesGallery />
            </Col>
          </Row>
        </Container>
      </section>
      {/* ==================  gallery section  end =================== */}

      {/* ==================  testimonial section  end =================== */}
      <section>
        <Container>
          <Row>
            <Col lang="12">
              <Subtitle subtitle={"Customer Love"} />
              <h2 className="testimonial__title">
                What our customers say about us
              </h2>
            </Col>
            <Col lg="12">
              <Testimonials />
            </Col>
          </Row>
        </Container>
      </section>
      {/* ==================  testimonial section  end =================== */}

      <Newsletter />
    </>
  );
};

export default Home;
