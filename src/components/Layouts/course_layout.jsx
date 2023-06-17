import React, { useState,useEffect } from "react";
import Course from "../Course/Course";
import { Container, Row, Col } from "react-bootstrap";
import axios from 'axios';

const course_layout = () => {
  const [courses,setCourses] = useState([]);
  
  useEffect(()=>{
    getCourses();
  },[])

  //Calling course api to get all the courses from DB
  const getCourses = async() =>{
    const response = await axios.get('http://localhost:8000/courses/allCourses/');
    setCourses(response.data)
  }
  
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
