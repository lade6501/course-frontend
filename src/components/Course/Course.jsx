import React, { useState } from "react";
import { Card, Button, Dropdown } from "react-bootstrap";
import "./Course.css";
import Modal from "../Modal/Modal";
import EnrollFrom from "../Forms/EnrollForm";

const Course = ({ course }) => {
  const [show, setShow] = useState(false);
  const [selectedCourse, setSelectedCourse] = useState();

  const hideModal = () => {
    if (show === true) {
      setSelectedCourse({});
    } else {
      setSelectedCourse(course);
    }
    setShow(!show);
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
            onClick={() => hideModal()}
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
