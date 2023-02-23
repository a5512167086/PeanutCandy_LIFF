import { useState } from 'react';
import { Modal, ModalProps } from 'react-bootstrap';
import CustomButton from '@/components/CustomButton';
import CustomCounter from '@/components/CustomCounter';
import { CustomModalProps } from './customModal.type';
import { useDispatch } from 'react-redux';
import { addToCart } from '@/store/features/cart';

const CustomModal = ({
  productId,
  productName,
  productPrice,
  productDesc,
  buttonText,
  handleHide,
  ...props
}: CustomModalProps & ModalProps) => {
  const [productCount, setProductCount] = useState(1);
  const dispatch = useDispatch();

  const handleModalHide = () => {
    handleHide();
    setProductCount(1);
  };

  const handleCountClick = (addOn: number) => {
    setProductCount(productCount + addOn);
  };

  const handleAddToCart = () => {
    const currentProduct = {
      id: productId,
      name: productName,
      price: productPrice,
      count: productCount,
      description: productDesc
    };
    dispatch(addToCart(currentProduct));
    handleModalHide();
  };

  return (
    <Modal size="lg" aria-labelledby="contained-modal-title-vcenter" centered onHide={handleModalHide} {...props}>
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">{`正在將 ${productName} 加入購物車`}</Modal.Title>
      </Modal.Header>
      <Modal.Body className="d-flex flex-column align-items-center">
        <h6>請輸入要加到購物車的商品數量</h6>
        <CustomCounter value={productCount} price={productPrice} handleClick={handleCountClick} min={1} max={10} />
      </Modal.Body>
      <Modal.Footer>
        <CustomButton buttonText={buttonText} onClick={handleAddToCart} />
      </Modal.Footer>
    </Modal>
  );
};

export default CustomModal;
