import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import ImageComponenet from '../ImageComponenets/ImageComponent';

function Model() {
  return (
    <div
      className="modal show"
      style={{ display: 'flex', position: 'relative', maxHeight: '400px', justifyContent: 'left'}}
    >
      <Modal.Dialog style={{width:'30%',}}>

            <Modal.Body>

                <div>
                    <ImageComponenet />
                    <span>Profile</span>
                    <span>Dark Mode</span>
                </div>

            </Modal.Body>

      </Modal.Dialog>
    </div>
  );
}

export default Model;