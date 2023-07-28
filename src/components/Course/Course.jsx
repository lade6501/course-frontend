import React, { useState } from "react";
import { Card, Button, Dropdown } from "react-bootstrap";
import "./Course.css";
import Modal from "../Modal/Modal";
import EnrollFrom from "../Forms/EnrollForm";
import axios from "axios";

const Course = ({ course }) => {
  const [show, setShow] = useState(false);
  const [selectedCourse, setSelectedCourse] = useState();

  const hideModal = () => {
    setShow(!show);
  };

  const handleEnroll = () => {
    if (localStorage.getItem("token")) {
      const backUrl = "http://localhost:8000/user/addCourse";
      axios
        .put(backUrl, { email: "user.wrong@test.com", course })
        .then((response) => {
          console.log("Update response course ", response);
        });
    } else {
      setShow(true);
    }
  };
  return (
    <>
      <Card className="course-card" key={course.id}>
        <Card.Img
          className="course-card-img"
          variant="top"
          src={course.image}
          alt={course.courseName + "image"}
        />
        <Card.Body>
          <Card.Title>{course.courseName}</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
          <Card.Text>Rating : {course.rating}</Card.Text>

          <Button
            className="enroll-button"
            variant="primary"
            onClick={() => handleEnroll()}
          >
            Enroll
          </Button>
        </Card.Body>
      </Card>
      <main>
        <Modal show={show} handleClose={hideModal}>
          <EnrollFrom hideModal={hideModal} course={selectedCourse} />
        </Modal>
      </main>
    </>
  );
};

export default Course;
