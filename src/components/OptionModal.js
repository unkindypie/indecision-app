import React from 'react';
import Modal from 'react-modal';

const OptionModal = (props)=>(
    <Modal
        isOpen={!!props.selectedOption}
        contentLabel="Selected Option"
        //вызывается при клике по неактивной области или нажатии esc
        onRequestClose={props.handleCloseSelectedOptionModal}
    >
        <h3>Selected Option</h3>
        <p>{props.selectedOption}</p>
        <button onClick={props.handleCloseSelectedOptionModal}>Okay</button>
    </Modal>
);


export default  OptionModal;

