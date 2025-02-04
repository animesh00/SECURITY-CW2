import React from "react";
import ServiceCard from "./ServiceCard";
import { Col } from "reactstrap";
import weatherImg from "../assets/images/weather.png";
import guideImg from "../assets/images/guide.png";
import customizationImg from "../assets/images/customization.png";

const ServiceData = [
  {
    imgUrl: weatherImg,
    title: "Shop News Updates",
    desc: 'Stay up-to-date with the latest in shopping through "Shop News Updates," featuring breakthroughs in Shop technology, market trends, and policy changes.',
  },
  {
    imgUrl: guideImg,
    title: "Shop Articles",
    desc: 'Stay up-to-date with the latest in shopping through "Shop News Updates," featuring breakthroughs in Shop technology, market trends, and policy changes.',
  },
  {
    imgUrl: customizationImg,
    title: "Fast and Easy Payment",
    desc: 'Stay up-to-date with the latest in shopping through "Shop News Updates," featuring breakthroughs in Shop technology, market trends, and policy changes.',
  },
];

const ServiceList = () => {
  return (
    <>
      {ServiceData.map((item, index) => (
        <Col lg="3" key={index}>
          <ServiceCard item={item} />
        </Col>
      ))}
    </>
  );
};

export default ServiceList;
