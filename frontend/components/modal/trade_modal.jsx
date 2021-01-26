import React from 'react';
import { closeModal } from '../../actions/modal_actions';
import { connect } from 'react-redux';

// import RequestMessageContainer from '../squads/request_message_container';
// import EditContainer from '../squads/squad_show/edit_container';

function Modal({modal, closeModal}) {
  if (!modal) {
    return null;
  }
//   let component;
//   switch (modal.word) {
//     case 'request':
//       component = <RequestMessageContainer />;
//       break;
//     case 'editBio':
//       component = <EditContainer />;
//       break;
//     default:
//       return null;
//   }
  return (
    <div className="modal-background" onClick={closeModal}>
      <div className="modal-child" onClick={e => e.stopPropagation()}>
        { component }
      </div>
    </div>
  );
}

const mapStateToProps = (state, ownProps) => {
  return {
    modal: state.ui.modal
  };
};

const mapDispatchToProps = dispatch => {
  return {
    closeModal: () => dispatch(closeModal())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Modal);
