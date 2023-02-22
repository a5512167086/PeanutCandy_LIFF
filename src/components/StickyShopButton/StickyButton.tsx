import { useNavigate } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import CustomButton from '../CustomButton';

const StickyButton = () => {
  const navigate = useNavigate();

  const handleStickyShopButtonClick = () => {
    navigate('/checkout');
  };

  return (
    <Container className="p-0 my-2 position-sticky bottom-0">
      <CustomButton className="w-100 p-3 " buttonText={'去結帳'} onClick={handleStickyShopButtonClick} />
    </Container>
  );
};

export default StickyButton;
