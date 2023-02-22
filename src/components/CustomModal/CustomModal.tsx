import { useState } from 'react';
import { Modal, ModalProps } from 'react-bootstrap';
import CustomButton from '@/components/CustomButton';
import CustomCounter from '@/components/CustomCounter';
import { CustomModalProps } from './customModal.type';

const CustomModal = ({
  modalTtile,
  modalContent,
  modalPrice,
  buttonText,
  handleHide,
  ...props
}: CustomModalProps & ModalProps) => {
  const [productCount, setProductCount] = useState(1);

  const handleModalHide = () => {
    handleHide();
    setProductCount(1);
  };

  const handleCountClick = (addOn: number) => {
    setProductCount(productCount + addOn);
  };

  return (
    <Modal size="lg" aria-labelledby="contained-modal-title-vcenter" centered onHide={handleModalHide} {...props}>
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">{modalTtile}</Modal.Title>
      </Modal.Header>
      <Modal.Body className="d-flex flex-column align-items-center">
        <h6>{modalContent}</h6>
        <CustomCounter value={productCount} price={modalPrice} handleClick={handleCountClick} min={1} max={10} />
      </Modal.Body>
      <Modal.Footer>
        <CustomButton buttonText={buttonText} onClick={handleModalHide} />
      </Modal.Footer>
    </Modal>
  );
};

export default CustomModal;
