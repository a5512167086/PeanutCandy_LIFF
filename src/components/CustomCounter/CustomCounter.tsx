import { Container } from 'react-bootstrap';
import CustomButton from '../CustomButton';
import { CustomCounterProps } from './customCounter.type';

const CustomCounter = ({ value, min, max, handleClick }: CustomCounterProps) => {
  const increase = () => {
    if (value < max) {
      handleClick(1);
    }
  };

  const decrease = () => {
    if (value > min) {
      handleClick(-1);
    }
  };

  return (
    <Container className="d-flex justify-content-center my-3">
      <CustomButton buttonText="-" onClick={decrease} />
      <input className="mx-2 text-center w-25" min={min} max={max} type="number" disabled value={value} />
      <CustomButton buttonText="+" onClick={increase} />
    </Container>
  );
};

export default CustomCounter;
