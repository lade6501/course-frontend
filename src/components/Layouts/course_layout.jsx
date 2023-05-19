import React, { useState } from "react";
import Course from "../Course/Course";
import { Container, Row, Col } from "react-bootstrap";

const courses = [
  {
    id: 1,
    image:
      "https://cdn.freebiesupply.com/logos/large/2x/react-1-logo-png-transparent.png",
    courseName: "React",
    rating: "4.5 ",
  },
  {
    id: 2,
    image: "https://openclipart.org/image/2400px/svg_to_png/272339/angular.png",
    courseName: "Anguler",
    rating: "4.2 ",
  },
  {
    id: 3,
    image:
      "https://th.bing.com/th/id/OIP.CbL7Xeq2c29sTx9d-HTbXAHaHa?pid=ImgDet&rs=1",
    courseName: "Python",
    rating: "4.78 ",
  },
  {
    id: 4,
    image:
      "https://th.bing.com/th/id/OIP.HR0bVR9uwNQC8m9TTGLy5AHaEK?pid=ImgDet&rs=1",
    courseName: "Azure",
    rating: "4.87 ",
  },
];

const course_layout = () => {
  return (
    <>
      <Container>
        <Row className="mt-3">
          {courses.map((ele) => {
            return (
              <Col sm="4" className="mb-5" key={ele.id}>
                <Course course={ele} />
              </Col>
            );
          })}
        </Row>
      </Container>
    </>
  );
};

export default course_layout;
