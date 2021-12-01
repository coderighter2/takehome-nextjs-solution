import React from 'react';
import styles from '../styles/Home.module.css';
import * as _ from 'lodash';
import Modal from 'react-modal';
import Nominee from './nominee';
type Props = {
  modalIsOpen: boolean;
  closeModal: any;
  selectedNominess: any;
};
const ModalComponent: React.FC<Props> = ({
  modalIsOpen,
  closeModal,
  selectedNominess,
}) => {
  const selectNominessCb = () => {};
  return (
    <Modal
      isOpen={modalIsOpen}
      id="modal-id"
      style={customStyle}
      onRequestClose={closeModal}
    >
      <div className={styles.modalBody}>
        <h2>Success</h2>
        <div onClick={closeModal} className={styles.closeIcon}>
          X
        </div>
      </div>
      <main className={styles.main}>
        {Object.keys(selectedNominess).length > 0 &&
          Object.keys(selectedNominess).map((n, idx) => {
            if (selectedNominess[n][0].isSelected) {
              return (
                <Nominee
                  data={selectedNominess[n]}
                  index={idx}
                  key={idx}
                  selectNominessCb={selectNominessCb}
                  isButtonShow={false}
                  isSelectedShow={true}
                />
              );
            }
          })}
      </main>
    </Modal>
  );
};
export default ModalComponent;
const customStyle: ReactModal.Styles = {
  overlay: {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(255, 255, 255, 0.75)',
  },
  content: {
    position: 'absolute',
    top: '40px',
    left: '40px',
    right: '40px',
    bottom: '40px',
    border: '1px solid #ccc',
    background: '#fff',
    overflow: 'auto',
    WebkitOverflowScrolling: 'touch',
    borderRadius: '4px',
    outline: 'none',
    padding: '20px',
  },
};
