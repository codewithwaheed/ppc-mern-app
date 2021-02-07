import React, { Component } from "react";
import Modal from "react-bootstrap/Modal";
export default class ModalPage extends Component {
  render() {
    return (
      <>
        <Modal
          {...this.props}
          size="md"
          aria-labelledby="contained-modal-title-vcenter"
          centered
        >
          <Modal.Header closeButton>
            <Modal.Title id="contained-modal-title-vcenter">
              {this.props.title}
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>{this.props.body}</Modal.Body>
          <Modal.Footer>{this.props.footer}</Modal.Footer>
        </Modal>
      </>
    );
  }
}
//  <div className="modalBox">
//    <div className="modalHeader">Modal Header</div>
//    <Modal.Content>1233</Modal.Content>
//    <div className="modalBody">body</div>
//    <div className="modalAction"></div>
//  </div>;
