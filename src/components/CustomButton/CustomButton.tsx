import { Button, ButtonProps } from 'react-bootstrap';
import { CustomButtonProps } from './customButton.type';

const CustomButton = ({ buttonText, ...props }: CustomButtonProps & ButtonProps) => (
  <Button {...props}>{buttonText}</Button>
);

export default CustomButton;
