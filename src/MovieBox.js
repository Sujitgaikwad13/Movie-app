import {
  Modal,
  show,
  ModalBody,
  Button,
  ModalHeader,
  ModalTitle,
  ModalFooter,
} from "react-bootstrap";
import React, { useState } from "react";
const API_IMG = "https://image.tmdb.org/t/p/w500/";

const MovieBox = ({
  title,
  poster_path,
  vote_average,
  release_date,
  overview,
}) => {
  const [show, setShow] = useState(false);
  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);
  return (
    <div className="card text-center bg-secondary mb-3">
      <div className="card-body">
        <img className="card-img-top" src={API_IMG + poster_path} />
        <div className="card-body">
          <button type="button" className="btn btn-dark" onClick={handleShow}>
            View More
          </button>
          <Modal show={show} onHide={handleClose}>
            <ModalHeader closeButton>
              <ModalTitle></ModalTitle>
            </ModalHeader>
            <ModalBody>
              <img className="card-img-top" style={{width:"14rem"}} src={API_IMG + poster_path} />
              <h3>{title}</h3>
              <h4>ImDB: {vote_average}</h4>
              <h5>Release date: {release_date}</h5>
              <h6>Overview</h6>
              <p>{overview}</p>
            </ModalBody>
            <ModalFooter>
              <Button variant="secondary" onClick={handleClose}>
                Close
              </Button>
            </ModalFooter>
          </Modal>
        </div>
      </div>
    </div>
  );
};

export default MovieBox;
