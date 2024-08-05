import React from 'react';
import Modal from 'react-modal';

const DescriptionModal = ({ isOpen, description, onClose }) => {
    return (
        <Modal
            isOpen={isOpen}
            onRequestClose={onClose}
            contentLabel="Node Description"
            style={{
                content: {
                    top: '50%',
                    left: '50%',
                    right: 'auto',
                    bottom: 'auto',
                    marginRight: '-50%',
                    transform: 'translate(-50%, -50%)',
                    padding: '20px',
                    border: '1px solid #000080',
                    borderRadius: '10px',
                    backgroundColor: '#ffffff'
                }
            }}
        >
            <h2 style={{ color: '#000080' }}>Node Description</h2>
            <p>{description}</p>
            <button onClick={onClose}>Close</button>
        </Modal>
    );
};

export default DescriptionModal;
