import React, { useEffect, useState } from "react";
import { Col, Container, Row, Card } from "react-bootstrap";
import "./userProfile.css";
import $ from "jquery";
import Swal from "sweetalert2";
import { useNavigate, useLocation } from "react-router-dom";
import Modal from "../Modal/Modal";
import ProfileUpdate from "../Forms/ProfileUpdate";

const userProfile = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [user, setUser] = useState(location.state);
  const [show, setShow] = useState(false);

  const hideModal = () => {
    setShow(!show);
  };

  useEffect(() => {
    if (!localStorage.getItem("token")) {
      navigate("/enroll");
      Swal.fire("Error!", "Please login to view your profile.", "error");
    }
  }, []);

  const handlelogout = () => {
    localStorage.removeItem("token");
    navigate("/enroll");
  };

  const updateProfile = () => {
    hideModal();
  };
  return (
    <>
      {user && (
        <Container className="py-5 h-100">
          <Row className="profile-row h-100">
            <Col lg="6" className="mb-4 mb-lg-0">
              <Card className="mb-3" style={{ borderRadius: ".5rem" }}>
                <Row className="g-0">
                  <Col
                    md="4"
                    className="gradient-custom text-center text-white p-3"
                    style={{
                      borderTopLeftRadius: ".5rem",
                      borderBottomLeftRadius: ".5rem",
                    }}
                  >
                    <Card.Img
                      src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava1-bg.webp"
                      alt="Avatar"
                      className="my-5"
                      style={{ width: "80px" }}
                    />
                    <h5>{user.name}</h5>
                    <Card.Text style={{ color: "#fff" }}>
                      {user.bioInfo}
                    </Card.Text>
                    <i
                      title="Update Profile"
                      className="fa-solid fa-user-pen icon-edit"
                      onClick={() => updateProfile()}
                    ></i>
                  </Col>
                  <Col md="8">
                    <Card.Body>
                      <i
                        className="fa-solid fa-right-from-bracket icon-logout"
                        data-toggle="tooltip"
                        title="Logout"
                        data-animation="true"
                        style={{ float: "right" }}
                        onClick={() => handlelogout()}
                      ></i>
                      <h6>Info</h6>
                      <hr className="mt-0 mb-4" />

                      <Row className="pt-1">
                        <Col size="6" className="mb-3">
                          <h6>Email</h6>
                          <p>{user.email}</p>
                        </Col>
                        <Col size="6" className="mb-3">
                          <h6>Phone</h6>
                          <p>{user.phone}</p>
                        </Col>
                      </Row>

                      <h6>Courses</h6>
                      <hr className="mt-0 mb-4" />
                      <Row className="pt-1">
                        <Col size="6" className="mb-3">
                          <h6>Enrolled</h6>
                          <p>Lorem ipsum</p>
                        </Col>
                        <Col size="6" className="mb-3">
                          <h6>Progress</h6>
                          <p>50%</p>
                        </Col>
                      </Row>
                    </Card.Body>
                  </Col>
                </Row>
              </Card>
            </Col>
          </Row>
        </Container>
      )}
      <Modal show={show} handleClose={hideModal}>
        <ProfileUpdate
          show={show}
          useremail={user.email}
          hideModal={hideModal}
        />
      </Modal>
    </>
  );
};

export default userProfile;
