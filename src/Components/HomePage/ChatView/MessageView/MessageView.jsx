import Nav from 'react-bootstrap/Nav';
import ImageComponenet from '../../../SupportComponents/ImageComponenets/ImageComponent';
import ProfileDetailsModel from '../../../SupportComponents/ModelComponents/Model';
import {useState} from "react";

const MessageView = () => {

  const [viewModel,setModelView] = useState(false);

  const showContactDetails = () =>{

      setModelView(true);

  };


  return (

    <>
    <Nav className="d-flex align-items-center justify-content-between bg-light p-2">

        <div className="d-flex align-items-center">
          <ImageComponenet extraStyle="width: 280px; padding: 5px;" />
          <span className="ms-2 fw-bold" style={{ fontSize: '1.25rem' }}>
            Madhan Kumar
          </span>
        </div>

        <span
          className="material-symbols-outlined"
          style={{ fontSize: '1.5rem', cursor: 'pointer' }}
          onClick={showContactDetails}
        >
        more_vert
      </span>
    </Nav>

    {viewModel && <ProfileDetailsModel />}

    </>
  );
};

export default MessageView;
