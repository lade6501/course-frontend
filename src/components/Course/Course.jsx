import React, { useState } from "react";
import { Card, Button, Dropdown } from "react-bootstrap";
import "./Course.css";
import Modal from "../Modal/Modal";
import EnrollFrom from "../Forms/EnrollForm";

const Course = (props) => {
  const [show, setShow] = useState(false);

  const hideModal = () => {
    setShow(!show);
  };

  return (
    <>
      <Card className="course-card" key={props.course.id}>
        <Card.Img
          className="course-card-img"
          variant="top"
          src={props.course.image}
          alt={props.course.courseName + "image"}
        />
        <Card.Body>
          <Card.Title>{props.course.courseName}</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
          <Card.Text>Rating : {props.course.rating}</Card.Text>

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
          <EnrollFrom hideModal={hideModal} />
        </Modal>
      </main>
    </>
  );
};

export default Course;
